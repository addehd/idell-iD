<template>
  <div>
    <section id="colors">
      <div v-for="(color, index) in colors" :key="index">
        <div class="color" :style="color.style"><div class="removeColor" @click="removeColor(index)">x</div>{{ color.name }}</div>
      </div>
    </section>
    <div class="edit-colors">
      <input type="color" @change="pipet($event);" :value="newColor">
      <button @click="addColor">Add color</button>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../main.js';

export default {
  data() {
    return {
      newColor: '#e66465',
      colors: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    removeColor: function(index){
      this.colors.splice(index, 1)
      this.setData()
    },
    addColor: function(){
      let color = { name: this.newColor, style: `background:${this.newColor}`}
      this.colors.push(color)
      this.setData()
    },
    pipet: function(e){
     this.newColor = e.target.value
    },
    getData: function(){
      let docRef = db.collection("users").doc(auth.currentUser.uid)
      docRef.get().then((doc) => {
        if (doc.exists && typeof doc.data().colors !== "undefined") {
            this.colors = doc.data().colors
        } else {
            console.log("No such document!")
        }
      }).catch(function(error) {
          console.log("Error getting document:", error)
      })
    },
    setData: function(){
      db.collection("users").doc(auth.currentUser.uid).set({
        colors: this.colors,
        companyName: "idell",
        values: "flow tech"
      }, { merge: true })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      })
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

.edit-colors {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.color {
  height: 100px;
  width: 200px;
  margin: 0.5rem; 
  color: white;
  position: relative; }

.removeColor {
  position: absolute;
  left: 6px;
  top: 0; }

input[type="color"] {
  padding: 0;
  margin: 0;
  border-width: 0;
  height: 3.4rem;
  width: 3.4rem;
  background: none;
  border: none;
}
button {
    height: 3rem;;
}
</style>