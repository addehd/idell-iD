<template>
  <div>
    <div >
      <p>Upload an img to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
      <button @click="emitUrl"></button>
    </div>
    <div v-if="imageData!=null">
      <img class="preview" :src="picture">
     
      <br>
      <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>
<!-- https://cloudconvert.com/svg-to-eps -->
<script>
import firebase from 'firebase'

export default {
  //name: 'Upload',
  data(){
    return{
        imageData: null,
        picture: null,
        uploadValue: 0
    }
  },
  methods:{
    emitUrl(){
      this.$emit('emitUrl')
    },
    previewImage(event) {
      this.uploadValue=0
      this.picture=null
      this.imageData = event.target.files[0]
      console.log( this.imageData )
    },
    onUpload(){
      this.picture=null
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData)
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture = url
        })
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
