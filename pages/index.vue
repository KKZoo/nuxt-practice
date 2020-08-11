<template>
  <section>
    <hello />
    <hello />
    <p>{{ message }}</p>
    <page />
  </section>
</template>

<script>
import hello from '~/components/hello.vue'
import page from '~/components/page.vue'

export default {
  components: {
    hello,
    page
  },
  data: function(){
    return {
      message: 'this is message'
    }
  }
}
</script>

<style>
</style>
