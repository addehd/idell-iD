<template>
  <section>
    <div v-for="(question, index) in questions" :key="index">
      <h1>{{question.heading}}</h1>
      <textarea v-if="question.editMode"  v-model="question.paragraph" placeholder="Just do it">
      </textarea>
      <p v-if="!question.editMode">{{question.paragraph}}</p>
      <button  @click="addQuestion($event, index)">Save/edit</button>
    </div>
  </section>
</template>

<script>

import { db, auth } from '../main.js';

export default {
  data() {
    return {
      questions: [
        {
          heading:"Who is Your Ideal Customer?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What Pain Points Do You Solve?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What Kind of Personality Do You Have?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What is Your Competition?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"How Do You Make Your Clients Feel?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"Who is Your Ideal Customer?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What Pain Points Do You Solve?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What Kind of Personality Do You Have?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"What is Your Competition?",
          paragraph: "",
          editMode: true
        },
        {
          heading:"How Do You Make Your Clients Feel?",
          paragraph: "",
          editMode: true
        },
      ]
    }
  }, 
  components: {
  },
  mounted() {
    this.getData()
  },
  methods: {
    addQuestion(e, i) {
      if(this.questions[i].editMode === true) {
        this.questions[i].editMode = false }
      else {
        this.questions[i].editMode = true }

      this.questions[i].paragraph = e.target.parentElement.children[1].value
      this.setData()
    },
    setData: function(){
      db.collection("users").doc(auth.currentUser.uid).set({
        questions: this.questions,
      }, { merge: true })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      })
    },
    getData: function(){
      console.log("h")
      let docRef = db.collection("users").doc(auth.currentUser.uid)
      docRef.get().then((doc) => {
        if (doc.exists && typeof doc.data().questions !== "undefined") {
            this.questions = doc.data().questions
        } else {
            console.log("No such document! get")
        }
      }).catch(function(error) {
          console.log("Error getting document:", error)
      })
    },
  }

}
</script>

<style scoped>

textarea {
  min-height: 10rem;
  min-width: 35rem; }

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; }

section div {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column }

section button {
  margin-top: 1rem;
  margin-bottom: 2rem; }
  
</style>