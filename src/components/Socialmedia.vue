<template>
  <section>
    <article>
      <h2>{{name}}</h2>
       <img @click="onUpload" id="timeline" src="@/assets/timeline-abstract.jpg" alt="">
       <img id="fb-profile" src="@/assets/profile.png" alt="">
    </article>
    <article>
      <h2>Instagram</h2>
      <div class="insta">
        <img class="img-responsive" src="@/assets/insta.jpg" alt="">
        <img class="img-responsive" src="@/assets/insta.jpg" alt="">
        <img class="img-responsive" src="@/assets/insta.jpg" alt="">
      </div>
    </article>
  </section>
</template>

<script>
//import firebase from 'firebase'
//import { db, auth } from '../main.js';

export default {
  data(){
    return{
      name: "Facebook"
    }
  },
  mounted() {
    this.getData()
    console.log("dd");
  },
  methods:{
    onUpload(){
      console.log("f");
    },
    getData: function(){
    },
    setData: function(){
    }
  }
}
</script>

<style scoped>

.insta {
  display: flex;
    justify-content: space-around;
}

.insta img {
  padding: 1rem;
  width: 21.5rem;
}

#fb-profile {
  margin-top: -9rem;
  border-radius: 50%;
  width: 17rem;
  border: 8px solid rgb(255, 255, 255);
}

#timeline {
  width: 100%;
}

.img-responsive {
  width: 100%;
}

</style>  