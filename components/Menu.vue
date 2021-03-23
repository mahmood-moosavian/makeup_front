<template>
  <div class="">
    <!-- section of Bottom Navigation in devices <= sm  -->
    <section class="NuxtLogo block md:hidden fixed bottom-0 w-full border-t shadow-lg h-20 z-50 bg-gray-200 pt-1">
      <div class="container mx-auto h-full px-6 flex justify-between items-center">
        <div>
          <button :class="showMenu?`text-pink-400`:``" class="focus:outline-none flex flex-col items-center text-gray-500" @click="showCat">
            <svg
              class="h-10  focus:outline-none "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <span class="text-sm">دسته بندی</span>
          </button>
        </div>
        <div  @click="hideCat">
          <nuxt-link to="/" class="focus:outline-none flex flex-col items-center text-gray-500 hover:text-pink-400">
            <svg
              class="h-10 text-gray-500 focus:outline-none hover:text-pink-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="text-sm">خانه</span>
          </nuxt-link>
        </div>
        <div  @click="hideCat" class="focus:outline-none  text-gray-500 hover:text-pink-400">
          <nuxt-link to="/login" class="flex flex-col items-center">
            <svg class="h-10 text-gray-500 focus:outline-none hover:text-pink-400"
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
            <span class="text-sm">ورود</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- section of show categories in devices <= sm  -->
    <div :class="`NuxtLogo flex w-full h-full bg-gray-100 fixed top-0 left-0 z-40 pb-16 ${showMenu?'block transition duration-1000 ease-in-out':'hidden'}`">
      <div class="w-1/3 h-full bg-gray-200 overflow-y-scroll flex flex-col text-center">
        <div v-for="category in categories" @click="tabId = category.id" :class="`w-full h-32 text-lg py-10 cursor-pointer ${tabId ==  category.id? 'bg-gray-100 border-b border-t border-solid':'' }`" >{{category.title}}</div>

      </div>
      <div class="w-2/3  h-full flex-col overflow-y-scroll">
        <div class="px-5" v-for="category in categories">
          <div v-for="subcategory in category.subCategory" v-show="category.id == tabId">
            <div class="flex justify-between py-5 px-5">
              <div @click="hideCat"><nuxt-link to="">{{subcategory.title}}</nuxt-link></div>
              <span class="arrow_tab"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="hidden relative bg-white border-b border-t shadow-md border-gray-100 text-gray-600 mt-5 md:block"
      style="height:48px"
    >
      <div class="container mx-auto flex px-16 relative">
        <ul class="flex">
          <!--Toggleable Link-->
          <li v-for="category in categories" class="hoverable hover:text-pink-500">
            <a href="#" class="relative block py-4 px-3 text-md link">{{category.title}}</a>
            <div class="p-6 mega-menu mb-16 sm:mb-0 bg-white rounded-b-lg shadow-2xl">
              <div class="container mx-auto w-full flex flex-wrap justify-between">
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                  <!-- <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3> -->
                  <li v-for="subcategory in category.subCategory">
                    <a
                      href="#"
                      class="block p-3 text-gray-600 hover:text-pink-500"
                    >{{subcategory.title}}</a>
                  </li>
                </ul>
                <!-- <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                  <li class="pt-3">
                    <img src="https://placehold.it/205x172" />
                  </li>
                </ul>-->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name:'Menu',
  data() {
    return {
      showMenu: false,
      tabId: 'village',
      active: true,
      categories:[
        {title:'باغ تالار', id:'village',image:'~assets/picture/talar.svg',subCategory:[{title:'باغسرا',link:''},{title:'تالار',link:''}]},
        {title:'سالن های زیبایی', id:'salon',image:'~assets/picture/beauty.svg',subCategory:[{title:'ابرو',link:''},{title:'ناخن',link:''}]},
        {title:'کلینیک زیبایی', id:'clinic',image:'~assets/picture/clinic.svg',subCategory:[{title:'کاشت مژه',link:''},{title:'جراحی ریبایی',link:''}]},
        {title:'مزون', id:'mezon',image:'~assets/picture/mezon.svg',subCategory:[{title:'لباس عروس',link:''},{title:'تاج',link:''}]},
        {title:'دسته گل', id:'flower',image:'~assets/picture/camera.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
        {title:'پیرایش آقایان', id:'barber',image:'~assets/picture/barber.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
        {title:'محضر ازدواج', id:'mahzar',image:'~assets/picture/mahzar.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
        {title:'تشریفات', id:'tashrifat',image:'~assets/picture/tashrifat.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
      ],
    };
  },
  methods: {
    showCat: function() {
      this.showMenu = !this.showMenu;
    },
    hideCat:function(){
      this.showMenu = false;
    }
  }
};
</script>

<style>
html {
  direction: rtl;
  font-size: 0.8em !important;
}
.link:hover {
  border-bottom: 2px solid #f04867;
}
/* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.mega-menu {
  display: none;
  right: 51px;
  position: absolute;
  text-align: right;
  width: 90%;
  z-index: 9999;
}
/* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
.hoverable {
  position: static;
}
.hoverable:first-child > a:after {
  top: 15%;
  right: 0;
  width: 1px;
  height: 70%;
  background: #fff;
  position: absolute;
}
.hoverable > a:after {
  /* content: "\221F";
  display: inline-block;
  transform: rotate(315deg);
  padding-left: 5px;
  position: relative;
  top: 2px; */
  content: "";
  top: 15%;
  right: 0;
  width: 1px;
  height: 70%;
  background: #eee;
  position: absolute;
}
.arrow_tab::after{
   content: "\221F";
  display: inline-block;
  transform: rotate(-315deg);
  padding-left: 5px;
  position: relative;
  top: 2px;
}
/* .hoverable:hover > a:after {
  /* content: "\221F";
  display: inline-block;
  transform: rotate(-315deg);
  padding-left: 5px;
  position: relative;
  top: 2px; /
  content: "";
    top: 15%;
    right: 0;
    width: 1px;
    height: 70%;
    background: #eee;
    position: absolute;
} */
.hoverable:hover .mega-menu {
  display: block;
  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
}
.hoverable:hover > .link {
  border-bottom: 2px solid #f04867;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
