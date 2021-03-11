<template>
    <div class="container mx-auto md:w-1/2">
    <!-- <Loader :active="loading" /> -->
        <div class="sm:max-w-sm flex flex-row items-center justify-between mx-auto mt-24 text-cyan_darkeset_200 font-bold">
            <div class="text-lg mr-5 sm:mr-0">ورود به پروفایل</div>
            <div class="ml-5 sm:ml-0">
              <img width="100" height="50" src="/images/logo.svg" alt="logo">
            </div>
        </div>
        <div class="sm:max-w-sm flex flex-col sm:border mx-auto mt-6 p-5 bg-pink-100 rounded-lg">
            <div class="flex">
                <span class="text-cyan_darkeset"> شماره موبایل خود را وارد کنید:</span>
            </div>
            <div class="flex">
                <input maxlength="11" class="h-10 w-full border text-cyan_darkeset_200 rounded-sm px-3 focus:outline-none my-4" type="text" name="" v-model="mobile">
            </div>
            <div class="flex flex-row justify-between mb-2">
                <button @click="cancel()" class="text-cyan_darker text-md focus:outline-none">انصراف</button>
                <button @click="authenticate()" class="text-white py-2 px-2 rounded-full w-24 bg-pink-600 focus:outline-none">
                    <span class="flex items-center justify-center">
                        <transition name="page" mode="out-in">
                            <span class="content-around" v-if="!loading">ادامه</span>
                            <img class="h-6 content-between" v-else src="~/assets/images/loading-btn.svg">
                        </transition>
                    </span>
                </button>

            </div>
            <div v-if="errors.length" class="text-sm text-right">
                <div v-for="error in errors" class="text-red-600" :key="error">
                * {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
    data() {
        return {
            mobile: null,
            errors:[],
            loading:false,
        }
    },
    methods: {
        cancel(){
            this.$router.push('/')
        },
        authenticate(){
            this.loading = true
            const params = { mobile: this.mobile }
            
            this.$axios.post('/api/v1/entermobile', params).then(response =>{
                    if(response.status === 201){
                        this.$router.push({name: '/login/confirm_code', params})
                    }
                    else if(response.status === 200){
                        this.$router.push({name: 'enter.password', params})
                    }

                }).catch(error =>{
                    this.errors = [];
                    if (error.response.status === 422 ) {
                        this.errors = error.response.data.errors.mobile;
                    }
                    if (error.response.status === 404) {
                        this.$router.push('/404');
                    }
                    if (error.response.status === 500) {
                    }

                }).finally(() =>{
                    this.loading = false;
                })
            setTimeout(()=>{
                this.loading = false
                this.$router.push('/login/confirm_code')
            },2000)
            
        }

    },
}
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
