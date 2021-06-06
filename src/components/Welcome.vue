<template>
  <div class="hello">
    <h1>?</h1>
    <p>Briefly put, questions are more important than answers because questions seek and frame and expose while answers, at their best, are temporary responses whose accuracy changes and shift and decays over time, needing to be reformed and remade and reevaluated as the world itself changes.
      Many times the questions are more important than the answear to understand who we are and where we are going. <br>    
    </p>
      <div class="tools-menu">
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Google drive</a>.
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Figma</a>.
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Sajt</a>.
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Social media  </a>.
      </div>

    <h3>Project management</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tools-menu {
  margin-top: 2rem;
}
.hello { 
  max-width: 40rem;
  margin: auto; }
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
  color: #42b983;
}
</style>
