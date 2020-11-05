<template>
  <section>
    <h1>Grafisk iD</h1>
    <UploadLogo/>
    <Colors/>
  </section>
</template>

<script>
import Colors from '../components/Colors.vue'
import UploadLogo from '../components/UploadLogo.vue'

export default {
  data() {
    return {
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