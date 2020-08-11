<template>
    <section class="container">
        <li v-for="user in users" v-bind:key="user.id">
            {{ user.id }}, {{ user.name }}
        </li>
    </section>
</template>>

<script>
const axios = require('axios')
let url = "https://jsonplaceholder.typicode.com/users"

export default {
    asyncData({ params }) {
        return axios.get(url)
            .then(function (response) {
                return { users: response.data }
            console.log(response);
            })
            .catch(function (error) {
                // handle error
            console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}
</script>>