<template>
  <div class="home">
    <Welcome msg="idell iD"/>
    <button class="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
