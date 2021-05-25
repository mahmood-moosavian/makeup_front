<template>
  <div class="md:mt-0 mt-4 bg_off w-full mb-10">
    <div class="container mx-auto flex md:flex-wrap flex-col md:flex-row w-full">
      <div
        class="flex flex-row justify-between items-center w-full py-3 px-2 bg-gray-200 opacity-75 my-4  rounded-2xl"
      >
        <h2 class="text-pink-800 text-3xl text-center font-bold ">تخفیف های شگفتانه</h2>
        <nuxt-link class=" rounded-2xl bg-pink-800 text-white p-5" to="/">مشاهده همه</nuxt-link>
      </div>
      <div class="container mx-auto grid grid-cols-4 gap-2">
        <nuxt-link to="/login"  class="flex flex-col rounded-2xl h-auto p-2 bg-gray-200 my-4 col-span-4 md:col-span-1 sm:col-span-2 relative">
          <div class="bg-pink-200 flex rounded-lg justify-center items-center relative">
            <img class="rounded-lg h-56" src="~/assets/pictures/pic1.jpg" alt />
            <div class="flex w-10 flex-col absolute top-0 left-0 ml-4 mt-4 opacity-25 hover:opacity-100  transition duration-300 ease-in-out hover:-translate-y-1">
              <div class="bg-white rounded-full h-10 p-2">
                <i  class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
                </i>
              </div>
              <div class="bg-white rounded-full h-10 p-2 mt-1">
                <i class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
                </i>
              </div>
            </div>
          </div>
          <div class="absolute top-0 right-0 rounded-full w-12 h-12 bg-pink-800 flex items-center justify-center mt-4 mr-4">
            <span class="text-white text-base font-semibold">%10</span>
          </div>
          <div class="p-4 h-auto">
            <div class="flex flex-col">
              <span class="text-pink-500 p-4">سالن آرایشی هگمتانه</span>
              <div class="text-gray-500 p-4 flex items-center relative">
                <svg
                  class="w-8 location"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="mr-10">شهرک غرب</span>
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/user/register"  class="flex flex-col rounded-2xl h-auto p-2 bg-gray-200 my-4 col-span-4 md:col-span-1 sm:col-span-2">
          <div class="bg-pink-200 flex rounded-lg justify-center items-center relative">
            <img class="rounded-lg h-56" src="~/assets/pictures/pic2.jpg" alt />
            <div class="flex w-10 flex-col absolute top-0 left-0 ml-4 mt-4  opacity-25 hover:opacity-100">
              <div class="bg-white rounded-full h-10 p-2">
                <i  class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
                </i>
              </div>
              <div class="bg-white rounded-full h-10 p-2 mt-1">
                <i class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
                </i>
              </div>
            </div>
          </div>
          <div class="p-4 h-auto">
            <div class="flex flex-col">
              <span class="text-pink-500 p-4">سالن آرایشی هگمتانه</span>
              <div class="text-gray-500 p-4 flex items-center relative">
                <svg
                  class="w-8 location"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="mr-10">شهرک غرب</span>
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/"  class="flex flex-col rounded-2xl h-auto p-2 bg-gray-200 my-4 col-span-4 md:col-span-1 sm:col-span-2">
          <div class="bg-pink-200 flex rounded-lg justify-center items-center relative">
            <img class="rounded-lg h-56" src="~/assets/pictures/pic3.jpg" alt />
            <div class="flex w-10 flex-col absolute top-0 left-0 ml-4 mt-4  opacity-25 hover:opacity-100">
              <div class="bg-white rounded-full h-10 p-2">
                <i  class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
                </i>
              </div>
              <div class="bg-white rounded-full h-10 p-2 mt-1">
                <i class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
                </i>
              </div>
            </div>
          </div>
          <div class="p-4 h-auto">
            <div class="flex flex-col">
              <span class="text-pink-500 p-4">سالن آرایشی هگمتانه</span>
              <div class="text-gray-500 p-4 flex items-center relative">
                <svg
                  class="w-8 location"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="mr-10">شهرک غرب</span>
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/user/login"  class="flex flex-col rounded-2xl h-auto p-2 bg-gray-200 my-4 col-span-4 md:col-span-1 sm:col-span-2">
          <div class="bg-pink-200 flex rounded-lg justify-center items-center relative">
            <img class="rounded-lg h-56" src="~/assets/pictures/pic4.jpg" alt />
            <div class="flex w-10 flex-col absolute top-0 left-0 ml-4 mt-4  opacity-25 hover:opacity-100">
              <div class="bg-white rounded-full h-10 p-2">
                <i  class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
                </i>
              </div>
              <div class="bg-white rounded-full h-10 p-2 mt-1">
                <i class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>
                </i>
              </div>
            </div>
          </div>
          <div class="p-4 h-auto">
            <div class="flex flex-col">
              <span class="text-pink-500 p-4">سالن آرایشی هگمتانه</span>
              <div class="text-gray-500 p-4 flex items-center relative">
                <svg
                  class="w-8 location"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="mr-10">شهرک غرب</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        hoverCard:false,
      }
    },
    methods: {
      mouseOver: function(){
          this.hoverCard = true;
      },
      mouseLeave: function(){
          this.hoverCard = false;
      }
    }
};
</script>

<style>
.bg_off {
  background-image: url("~assets/images/bg-off.png");
  background-size: initial;
}
.location {
  animation: MoveUpDown 1s linear infinite;
  position: absolute;
  left: right;
  bottom: 0;
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 10px;
  }
  50% {
    bottom: 15px;
  }
}
</style>
