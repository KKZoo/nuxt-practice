<template>
  <section class="container">
    <p>this is second page</p>
    <p>test text</p>
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
</style>
