<template>
  <div class="container mx-auto">
    <div class="flex justify-between border-b border-gray-300 py-20 px-5">
      <div>
        <nuxt-link exact to="/profile">پروفایل</nuxt-link> |
        <nuxt-link to="/profile/packages">پکیج های شما</nuxt-link> |
        <nuxt-link to="/profile/discounts">ارایه تخفیف</nuxt-link> |
        <nuxt-link to="/profile/gallery">تصاویر شما</nuxt-link> |
        <nuxt-link to="/profile/messages">پیام ها</nuxt-link> |
        <nuxt-link to="/profile/map">موقعیت شما روی نقشه</nuxt-link>
      </div>
      <div><a href="/">Logo</a></div>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
}
</script>
<style scoped>
a{
  font-size: medium;
  font-weight: bold;

}
a.nuxt-link-active{
  border-bottom-color: hotpink;
  border-bottom-width: medium;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
