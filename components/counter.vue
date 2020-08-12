<template>
    <section class="container">
        <p>
            {{ $store.state.counter.count }}
            <button @click="$store.dispatch('counter/countUpAction', 1)">+1</button>
            <button @click="$store.dispatch('counter/resetCountAction', 0)">reset</button>
        </p>
        
    </section>
</template>>