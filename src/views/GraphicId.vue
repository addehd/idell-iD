<template>
  <section>
    <h1>Grafisk iD</h1>
    <UploadLogo/>
    <Colors/>
  </section>
</template>

<script>
import UploadLogo from '../components/UploadLogo.vue'
import Colors from '../components/Colors.vue'

export default {
  data() {
    return {
      imgUrl: ''
    }
  }, 
  components: {
    Colors,
    UploadLogo
  }
}
</script>

<style scoped>
</style>