<template>
    <section>
        <div>
            {{ message }}
        </div>
        <router-link to="/">Top</router-link>
        <router-link to="second-page">second-page</router-link>
        <router-link to="axios">axios</router-link>
        <router-link to="vuex">vuex</router-link>
        <router-link to="counter">counter</router-link>
    </section>
</template>>

<script>
export default {
    data: function(){
        return {
            message: 'this is page.vue message'
        }
    }
}
</script>>