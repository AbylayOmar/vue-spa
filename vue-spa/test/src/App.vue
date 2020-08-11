<template>
  <div id="app">
    <router-link to="/aba">Home</router-link>
    <router-link to="/nauka">N</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Nauka from './components/Nauka'
import Aba from './components/Aba'

export default {
    name: 'App',
    components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
