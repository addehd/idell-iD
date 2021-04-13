<template>
  <div>
    <div>
      <img class="company-logo" :src="imgSrc">
    </div>
    <div class="upload-logo">
      <input type="file" @change="onUpload" accept="image/*" >
      Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db, auth } from '../main.js';

export default {
  data(){
    return{
        imageData: null,
        imgSrc: null,
        previewImg: null,
        uploadValue: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods:{
    onUpload(event){
      this.uploadValue = 0
      this.imageData = event.target.files[0]
      if(typeof this.imageData.name === "undefined"){
        return
      }
      const storageRef = firebase.storage().ref(auth.currentUser.uid + '-' + Date.now().toString(16) + '-' + this.imageData.name).put(this.imageData)
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue = 100
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.imgSrc = url
          this.setData()
        })
      })
    },
    getData: function(){
      let docRef = db.collection("users").doc(auth.currentUser.uid)
      docRef.get().then((doc) => {
        if (doc.exists) {
          this.imgSrc = doc.data().imgSrc
        } else {
            console.log("No such document!")
        }
      }).catch(function(error) {
          console.log("Error getting document:", error)
      })
    },
    setData: function(){
      db.collection("users").doc(auth.currentUser.uid).update({
        imgSrc: this.imgSrc,
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })
    }
  }
}
</script>

<style scoped>
.preview {
  max-width: 4rem; }

.upload-logo{
  margin: 3rem; }
</style>