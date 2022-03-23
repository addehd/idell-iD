<template>
  <div id="app">
    <section class="header">
      <img alt="Vue logo" src="./assets/logo.svg">
      <nav>
        <a href="/#/hem">Hem</a>
        <a href="/#/identity">Identitet</a>
        <a href="/#/graphic-id">Grafisk iD</a>
         <a href="/#/graphic-id">Strategi</a>
      </nav>
    </section>
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

section.header {
    background: #eeeedd;
    padding: 1rem; 
    margin-bottom: 4rem; }
    
nav {
  padding: 2rem; }

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem;
  font-weight: 400;
  text-decoration: none; }

nav a:hover {
  text-decoration: underline;
}

.button {
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:7px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
}
.button:hover {
	background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
}
.button:active {
	position:relative;
	top:1px;
}

</style>
