<template>
  <div class="pb-16">
    <top-discount></top-discount>
    <category-button></category-button>
    <top-view></top-view>
    <newest></newest>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
