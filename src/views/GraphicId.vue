<template>
  <section>
    <h1>Grafisk iD</h1>
    <UploadLogo/>
    <Colors/>
    <Socialmedia/>
    <UploadImages/>
  </section>
</template>

<script>
import UploadLogo from '../components/UploadLogo.vue'
import Colors from '../components/Colors.vue'
import Socialmedia from '../components/Socialmedia.vue'
import UploadImages from '../components/UploadImages.vue'

export default {
  data() {
    return {
      imgUrl: ''
    }
  }, 
  components: {
    Colors,
    UploadLogo,
    Socialmedia,
    UploadImages
  }
}
</script>

<style scoped>
</style>