<template>
    <section class="container">
        <counter />
        <page />
    </section>
</template>

<script>
import counter from '~/components/counter.vue'
import page from '~/components/page.vue'

export default {
    components: {
        counter,
        page
    }    
}
</script>