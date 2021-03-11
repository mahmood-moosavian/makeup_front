<template>
    <div class="container mx-auto md:w-1/2">
    <!-- <Loader :active="loading" /> -->
        <div class="sm:max-w-sm flex flex-row items-center justify-between mx-auto mt-24 text-cyan_darkeset_200 font-bold">
            <div class="text-lg mr-5 sm:mr-0">ورود به پروفایل</div>
            <div class="ml-5 sm:ml-0"><img width="100" height="50" src="/images/logo.svg" alt="logo"></div>
        </div>
        <div class="sm:max-w-sm flex flex-col sm:border rounded-sm mx-auto mt-6 p-5">
            <div class="flex">
                <span class="text-cyan_darkeset"> کد 4 رقمی را وارد کنید:</span>
            </div>
            <div class="flex items-center justify-center mt-5 mb-3 h-10 pb-3 text-cyan_darkeset_200">
                <input ref="num4" v-model="num4" tabindex="4" type="text" name="num4" maxlength="1" class="w-12 mx-2 text-center border-b-2 focus:outline-none focus:border-gray-400">
                <input ref="num3" v-model="num3" tabindex="3" type="text" name="num3" maxlength="1" class="w-12 mx-2 text-center border-b-2 focus:outline-none focus:border-gray-400">
                <input ref="num2" v-model="num2" tabindex="2" type="text" name="num2" maxlength="1" class="w-12 mx-2 text-center border-b-2 focus:outline-none focus:border-gray-400">
                <input ref="num1" v-model="num1" tabindex="1" type="text" name="num1" maxlength="1" class="w-12 mx-2 text-center border-b-2 focus:outline-none focus:border-gray-400"  autofocus>
            </div>
            <div class="flex flex-row justify-between items-center mb-2">
                <div class="text-cyan_darker text-md focus:outline-none">
                    {{ mobile }}
                    <button @click="changeNumber()" class="text-green_flat mr-2 focus:outline-none">تغییر شماره</button>
                </div>
                <button @click="confirmCode()" class="text-white py-2 px-2 rounded-full w-24 bg-pink-600 focus:outline-none">
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
    data() {
        return {
            mobile:'',
            active_code:'',
            num4:'',
            num3:'',
            num2:'',
            num1:'',
            errors:[],
            loading:false,
        }
    },
    watch: {
        num1(){
            if(this.num1.length>0)
                this.$refs.num2.focus();
            else
                this.$refs.num1.focus();
        },
        num2(){
            if(this.num2.length>0)
                this.$refs.num3.focus();
            else
                this.$refs.num1.focus();

        },
        num3(){
            if(this.num3.length>0)
                this.$refs.num4.focus();
            else
                this.$refs.num2.focus();
        },
        num4(){
            if(this.num4.length>0)
                this.$refs.num4.focus();
            else
                this.$refs.num3.focus();
        },

    },
    created() {
        this.mobile = this.$route.params.mobile;
        if(this.$route.params.forget_pass){
            this.forget_pass = this.$route.params.forget_pass
            this.authenticate()

        }
    },
    methods:{
        changeNumber(){
            this.$router.push({name:'login'})
        },
        confirmCode(){
            this.loading = true;
            const params = {
                mobile:this.mobile,
                active_code: this.num1+this.num2+this.num3+this.num4,
                forget_pass: this.forget_pass
            }
            this.$axios.post('/api/v1/confirmCode',params).then(({data}) => {
                this.$store.dispatch('user/login', data);
                this.$router.push({name:'panel'})

            })
            .catch(error => {
                this.errors = [];
                if (error.response.status === 422 ) {
                    this.errors = error.response.data.errors.active_code;
                }
                if (error.response.status === 401 ) {
                    this.errors = error.response.data.errors.active_code;
                }
            })
            .finally(() =>{
                this.loading = false;
            })
        },

        authenticate(){
            
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
