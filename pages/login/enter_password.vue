<template>
    <div class="container mx-auto md:w-1/2">
    <!-- <Loader :active="loading" /> -->
        <div class="sm:max-w-sm flex flex-row items-center justify-between mx-auto mt-24 text-cyan_darkeset_200 font-bold">
            <div class="text-lg mr-5 sm:mr-0">ورود به پروفایل</div>
            <div class="ml-5 sm:ml-0"><img width="100" height="50" src="" alt="logo"></div>
        </div>
        <div class="sm:max-w-sm flex flex-col sm:border rounded-sm mx-auto mt-6 p-5">
            <div class="flex">
                <span class="text-cyan_darkeset"> کلمه عبور خود را وارد کنید:</span>
            </div>
            <div class="flex relative">
                <input :type="passwordFieldType" class="h-10 w-full border text-cyan_darkeset_200 rounded-sm px-3 focus:outline-none my-4" v-model="password">
                <!-- <img class="opacity-50" @click="switchVisibility" :src="`/images/${imgViewPassword}`" id="input_img"> -->
            </div>
            <div class="flex flex-row justify-between mb-2">
                <button @click="forgetPassword()" class="text-green_flat text-md focus:outline-none">
                    <span class="flex items-center justify-center">
                        <transition name="loader" mode="out-in">
                            <span class="content-around" v-if="!loadingPass">کلمه عبورم رو فراموش کردم</span>
                            <!-- <img class="h-6 content-between" v-else src="/asset/loading-btn.svg"> -->
                        </transition>
                    </span>

                    </button>
                <button @click="login()" class="text-white py-2 px-2 rounded-full w-24 bg-green_flat focus:outline-none">
                    <span class="flex items-center justify-center">
                        <transition name="loader" mode="out-in">
                            <span class="content-around" v-if="!loading">ادامه</span>
                            <img class="h-6 content-between" v-else src="~/assets/images/loading-btn.svg">
                        </transition>
                    </span>
                </button>

            </div>
            <div v-if="errors" class="text-sm text-right">
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
            mobile: null,
            password:null,
            errors:[],
            loading:false,
            loadingPass:false,
            passwordFieldType: 'password',
            imgViewPassword: 'view.png',
        }
    },
    created() {
        // this.mobile = this.$route.params.mobile;
    },
    methods: {
        forgetPassword(){
            // const mobile = this.mobile;
            // this.$router.push({name: '/login', params: { mobile: mobile,forget_pass:true }})
        },
        async login(){
        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            this.imgViewPassword = this.imgViewPassword === 'view.png' ? 'visibility.png' : 'view.png'
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
#input_img {
    position:absolute;
    top:24px;
    left:10px;
    width:24px;
    height:24px;
    cursor: pointer;
}

</style>
