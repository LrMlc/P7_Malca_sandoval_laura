<template>
    <header />
    <connexioncard />
</template>

<script>
import header from '../components/header.vue'
import connexioncard from '../components/connexioncard.vue'

export default {
  name: 'login',
  components: {
    header,
    connexioncard,
  }
}
</script>

<style scoped>

</style>
