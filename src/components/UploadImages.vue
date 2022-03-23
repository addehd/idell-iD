<template>
  <section class="images">
      <h1>{{dropText}}, {{storedPhotos}}</h1>
      <div id='dropzone' @drop="dropLink" @dragenter.prevent @dragover.prevent>
      <p>{{ambientPhotos}}</p>
      <p>{{dropText}}</p>
     </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../main.js';

export default {
  data(){
    return{
      dropText: "Drop images here",
      ambientPhotos: "",
      storedPhotos: []
    }
  },
  mounted() {
  },
  methods:{
    dropLink: function(e){
      e.preventDefault()
      //console.log(e.dataTransfer.files)
      e.dataTransfer.files.forEach(imageFile => {
        this.uploadImagesAsPromise(imageFile)
        //this.uploadImage(imageFile)
      })
    },
    uploadImage:function (imageFile) {
      
      return new Promise(function () {
          this.ambientPhotos = "storageRef"
          var storageRef = firebase.storage().ref("test/" + auth.currentUser.uid + imageFile.name)
          storageRef.put(imageFile)   
      })
    },
    uploadImagesAsPromise: function(imageFile){
      //https://stackoverflow.com/questions/54955426/how-to-use-async-await-in-vue-js
      //console.log(imageFile, auth.currentUser.uid, firebase, db)
      //var date =  Date.now().toString(16)
      var storageRef = firebase.storage().ref(auth.currentUser.uid + imageFile.name)
      console.log(storageRef, imageFile)
      storageRef.put(imageFile)
      this.ambientPhotos = "storageRef"
    }
  }
} 
</script>

<style scoped>
  #dropzone {
    min-height: 19rem;
    min-width: 50rem;
    background-color: rgb(218 218 255);
    background-image: url(upload-cloud.svg);
    background-repeat: no-repeat;
    background-size: 11rem;
    background-position-x: center;
    background-position-y: center;
  }  
</style>