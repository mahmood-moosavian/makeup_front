<template>
  <div>
    <header class="border-b-1 lg:mx-8">
      <div class="container mx-auto lg:px-4 flex lg:p-5 mt-3">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center md:w-1/2 w-full">
            <div class="mx-6 text-pink-500 w-48">
              <nuxt-link to="/">بانک شادی</nuxt-link>
            </div>
            <form class="relative w-full">
              <input
                style
                class="border rounded-full px-3 py-2 focus:outline-none w-full"
                type="text"
                placeholder="جستجو"
              />
              <svg
                class="cursor-pointer mt-3 ml-2 bg-light-gray absolute top-0 left-0 stroke-current text-pink-500 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
          <div class="mx-6">
            <div>
              <template v-if="!false/*this.$auth.loggedIn*/">
                <nuxt-link to="/login">
                  <span>ورود</span>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="relative"
                  @mouseover="showTooltipProfile = false"
                  @mouseout="showTooltipProfile = true">
                  <svg
                    class="cursor-pointer w-6 stroke-current text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div
                    @mouseover="showTooltipProfile = false"
                    class="NuxtLogo absolute flex flex-col w-48 text-center mt-6 rounded-lg top-0 left-0 border-pink-200 bg-pink-400 border z-50 text-white"
                    :class="{'hidden':showTooltipProfile}"
                  >
                    <div class="p-2 border-b border-pink-200 ">
                      <nuxt-link to="/profile">پروفایل</nuxt-link>
                    </div>
                    <div class="p-2">
                      <div class="cursor-pointer" @click="logout">خروج از حساب کاربری</div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- section of Bottom Navigation in devices <= sm  -->
    <Menu />
    <section class>
      <Nuxt />
    </section>
    <!-- <footer class="bg-gray-100">
      <div class="container mx-auto px-6 pt-10 pb-6">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Links</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Help</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Support</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Legal</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Social</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Company</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a
                  href="#"
                  class="hover:underline text-gray-600 hover:text-orange-500"
                >Official Blog</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      showTooltipProfile : true,
      tabId: "village",
      active: true,
      categories: [
        {
          title: "باغ تالار",
          id: "village",
          subCategory: [
            { title: "باغسرا", link: "" },
            { title: "تالار", link: "" }
          ]
        },
        {
          title: "سالن های زیبایی",
          id: "salon",
          subCategory: [
            { title: "ابرو", link: "" },
            { title: "ناخن", link: "" }
          ]
        },
        {
          title: "کلینیک زیبایی",
          id: "clinic",
          subCategory: [
            { title: "کاشت مژه", link: "" },
            { title: "جراحی ریبایی", link: "" }
          ]
        },
        {
          title: "مزون",
          id: "mezon",
          subCategory: [
            { title: "لباس عروس", link: "" },
            { title: "تاج", link: "" }
          ]
        },
        {
          title: "آتلیه و فیلم",
          id: "photo",
          subCategory: [
            { title: "آتلیه", link: "" },
            { title: "فیلمبرداری", link: "" }
          ]
        },
        {
          title: "تالار",
          id: "vill",
          subCategory: [
            { title: "باغسرا", link: "" },
            { title: "تالار", link: "" }
          ]
        },
        {
          title: "باغ",
          id: "villa",
          subCategory: [
            { title: "باغسرا", link: "" },
            { title: "تالار", link: "" }
          ]
        }
      ]
    };
  },
  methods: {
    showCat: function() {
      this.showMenu = !this.showMenu;
    },
    hideCat: function() {
      this.showMenu = false;
    },
    async logout(){
      // await this.$auth.logout();
    }
  }
};
</script>
<style>
html {
  background-color: rgba(241, 240, 240, 0.041);
  color: #718096;
}
</style>
