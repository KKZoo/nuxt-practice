<template>
    <section class="container">
        <div>
            <p v-on:click="$store.commit('hello/updateMessage')">
                {{ $store.state.hello.message }}
            </p>
            <p v-on:click="$store.commit('hello/payloadMessage', 'this is payload')">
                {{ $store.state.hello.message }}
            </p>
            <p v-on:click="$store.dispatch('hello/payloadMessageAction', 'this is dispatch')">
                {{ $store.state.hello.message }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>