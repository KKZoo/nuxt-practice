<template>
    <section class="container">
        <div>
            <p v-on:click="$store.commit('updateMessage')">
                {{ $store.state.message }}
            </p>
            <p v-on:click="$store.commit('payloadMessage', 'this is payload')">
                {{ $store.state.message }}
            </p>
            <p v-on:click="$store.dispatch('payloadMessageAction', 'this is dispatch')">
                {{ $store.state.message }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>