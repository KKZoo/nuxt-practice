<template>
  <section class="container">
    <p>this is second page</p>
    <img src="~/assets/cat.jpg" class="cat-size">
    <hello />
    <page />
  </section>
</template>

<script>
import hello from '~/components/hello.vue'
import page from '~/components/page.vue'

export default {
  componets:{
    hello,
    page
  }
}
</script>

<style>
.cat-size{
  width: 100px;
}
</style>
