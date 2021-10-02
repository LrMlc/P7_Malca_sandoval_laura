<template>
<div>
  <headercomp /> <!--- router-link to? router-view? --->
  <navcomp />
</div>
</template>

<script>
import headercomp from '@/components/header.vue';
import navcomp from '@/components/nav.vue';

export default {
  name: 'Home',
  components: {
    headercomp,
    navcomp
  }
}
</script>

<style scoped>

</style>
