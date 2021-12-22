<template>
<div>
  <navcomp/>
  <createpost @new-post="onNewPost()"/>
  <allposts ref="allPosts"/>
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
  },
  methods:{
    onNewPost(){
      this.$refs.allPosts.getAllPosts();
    }
  }

}
</script>

<style scoped>

</style>
