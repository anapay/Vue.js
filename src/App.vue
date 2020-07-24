<template>
  <div id="app">
    <h1>Bruxa Hacker!</h1>
    <h3>Avada Kedavra</h3>
    <h4>Nada de bruxa e muito menos de Hacker!</h4>
    <h5>Sou mais uma copiadora de código</h5>
    <!-- <img class="logo" alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Seja bem vindo ao guia bruxo do meu Web site" />
    <Chat />
    <Descricao />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Chat from "./components/Chat";
import Descricao from "./components/Descricao.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Chat,
    Descricao
  }
};
</script>

<style>
#app {
  font-style: italic, 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: rgb(196, 240, 240);
}
.logo {
  background-color: rgb(10,23 55, 0.5);
  max-width: 100%;
  max-height: 100%;
  position:relative;
  top: 0%;
  left: 0%;
  width: auto;
  height: auto;
  
}
</style>
