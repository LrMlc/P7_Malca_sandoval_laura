<template>
<div>
  <navcomp/>
  <createpost/>
  <allposts/>
</div>
</template>

<script>
import navcomp from '@/components/nav.vue';
import createpost from '@/components/createpost.vue';
import allposts from '@/components/allposts.vue';

export default {
  name: 'Home',
  components: {
    navcomp,
    createpost,
    allposts
  }
}
</script>

<style scoped>

</style>
