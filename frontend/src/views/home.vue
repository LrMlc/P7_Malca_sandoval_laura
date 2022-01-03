<template>
<div>
  <createpost @new-post="onNewPost()"/>
  <allposts ref="allPosts"/>
</div>
</template>

<script>
import createpost from '@/components/createpost.vue';
import allposts from '@/components/allposts.vue';

export default {
  name: 'Home',
  components: {
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
