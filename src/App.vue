<template>
  <div id="app">
    <h1>Guia da Bruxa Hacker!</h1>
    <h3>Avada Kedavra</h3>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Seja bem vindo ao guia bruxo Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
