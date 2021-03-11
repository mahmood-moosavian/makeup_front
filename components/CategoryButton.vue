<template>
  <div class="container mx-auto mb-16">
      <div class="flex flex-wrap justify-evenly ml-2">
          <nuxt-link class="hover:text-pink-500 flex flex-col items-center mt-3" to="/" v-for="(category, index) in categories" :key="index">
            <div class="p-4 bg-gray-200 rounded-lg items-center">
                <img class="button-img w-20 h-20" :src="require(`../assets/pictures/${category.image}`)" alt="">
            </div> 
            <span class="mt-4">
                {{ category.title }}
            </span>
          </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        categories:[
            {title:'باغ تالار', id:'village',image:'talar.svg',subCategory:[{title:'باغسرا',link:''},{title:'تالار',link:''}]},
            {title:'سالن های زیبایی', id:'salon',image:'beauty.svg',subCategory:[{title:'ابرو',link:''},{title:'ناخن',link:''}]},
            {title:'کلینیک زیبایی', id:'clinic',image:'clinic.svg',subCategory:[{title:'کاشت مژه',link:''},{title:'جراحی ریبایی',link:''}]},
            {title:'مزون', id:'mezon',image:'mezon.svg',subCategory:[{title:'لباس عروس',link:''},{title:'تاج',link:''}]},
            {title:'دسته گل', id:'flower',image:'camera.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
            {title:'پیرایش آقایان', id:'barber',image:'barber.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
            {title:'محضر ازدواج', id:'mahzar',image:'mahzar.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
            {title:'تشریفات', id:'tashrifat',image:'tashrifat.svg',subCategory:[{title:'آتلیه',link:''},{title:'فیلمبرداری',link:''}]},
        ],
        }
    },
}
</script>

<style>
.button-img {
    filter: contrast(10%);
}
</style>