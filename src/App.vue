<template>
  <div id="app">
    <h1>Bruxa Hacker!</h1>
    <h3>Avada Kedavra</h3>
    <h4>Nada de bruxa e muito menos de Hacker!</h4>
    <h5>Sou mais uma copiadora de código</h5>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Seja bem vindo ao guia bruxo do meu Web site"/>
    <Chat/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Chat from './components/Chat';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Chat
  }
  
  
  
}
</script>

<style>
#app {
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
body{
   background-color: rgb(196, 240, 240);

}
</style>
