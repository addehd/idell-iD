<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg">
    <nav>
      <a href="/#/hem">Hem</a>
      <a href="/#/identity">Identitet</a>
      <a href="/#/graphic-id">Grafisk iD</a>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1100px;
  margin: auto; }

nav {
  padding: 2rem; }

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem; }

</style>
