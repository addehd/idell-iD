<template>
  <section>
    <h1>Grafisk iD</h1>
    <UploadLogo/>
    <Colors/>
    <Socialmedia/>
  </section>
</template>

<script>
import UploadLogo from '../components/UploadLogo.vue'
import Colors from '../components/Colors.vue'
import Socialmedia from '../components/Socialmedia.vue'

export default {
  data() {
    return {
      imgUrl: ''
    }
  }, 
  components: {
    Colors,
    UploadLogo,
    Socialmedia
  }
}
</script>

<style scoped>
</style>