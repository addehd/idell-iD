<template>
  <div class="test">
    <h1>idell ID</h1>
    <h3>{{title}}</h3>
    <section id="colors">
      <div v-for="(color, index) in colors" :key="index">
        <div class="color" :style="color.style">{{ color.name }}</div>
      </div>
    </section> 
   
    <input type="color" @change="pipet($event)" :value="newColor">
      <button @click="addColor">
      Add color
    </button>
    <!--<button @click="getUser">setData</button>
    <button @click="getData">getData</button>-->
  </div>
</template>

<script>
import { db, auth } from '../main.js';

export default {
  data() {
    return {
      title: auth.currentUser.email,
      text: '',
      message: 'hmm',
      newColor: '#e66465',
      colors: [
        { name: 'blue', style: 'background: blue;' },
        { name: 'green', style: 'background: green;' },
        { name: 'yellow', style: 'background: orange;' },
        { name: 'red', style: 'background: red;' },
        { name: 'orange', style: 'background: purple;' },
      ]
    }
  },
  methods: {
    addColor: function(){
      let color = { name: this.newColor, style: `background:${this.newColor}`}
      this.colors.push(color)
      console.log(this.test)
    },
    pipet: function(e){
     this.newColor = e.target.value
    },
    getData: function(){
      db.collection('graphic-id').doc(auth.currentUser.uid).get().then(doc =>{
        console.log(doc.collection())
      })
    },
    getUser: function(){
     // db.collection('graphic-id').doc(auth.currentUser.uid).set(dat)
      console.log(auth.currentUser.uid)
    }
  }
}
</script>

<style scoped>
#colors {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; }

.color {
  height: 100px;
  width: 200px;
  margin: 0.5rem; 
  color: white; }
</style>