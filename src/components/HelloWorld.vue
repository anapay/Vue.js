<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
     Aprendendo a programar! <br>
      Confira o, </h3><br>
      <a href="https://github.com/anapay" target="_blank" rel="noopener">Código no meu Github</a>

    <h3>Me siga nas redes sociais</h3>
    <ul>
      <li><a href="https://www.instagram.com/anapay42/?hl=pt-br" target="_blank" rel="noopener">Instagram</a></li>
      <li><a href="https://codepen.io/Anapay" target="_blank" rel="noopener">CodePen</a></li>
      <li><a href="https://twitter.com/anapay42" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/ana-paula-6b28291a6/" target="_blank" rel="noopener">Linkedin</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #442019ea;
}

</style>
