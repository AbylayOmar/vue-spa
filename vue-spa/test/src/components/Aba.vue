<template>
    <div class="aba">
        <div v-for="infoo in info.data">
            {{ infoo.title }}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'aba',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => (this.info = response));
    }
}
</script>

<style scoped>

</style>