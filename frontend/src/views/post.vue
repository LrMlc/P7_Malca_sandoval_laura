<template>
<section class="get-one-post">
  <article class="post">
    <div class="nicknamePost">{{ post.User.pseudo }}</div>
    <div class="contentPost">{{ post.content }}</div>
    <div class="filePost"></div>
  </article>
  <div>
    <comments />
</div>
<div><button class="deletePost" @click="this.deletePost(post.id)" v-if="userId == post.UserId || admin == 1"></button></div>
<div class="return">
  <button>
    <router-link to="/home"><i class="fas fa-undo-alt"></i>Page précédente</router-link>
  </button>
</div>
</section>
</template>
<script>
import axios from "axios";
import comments from '../components/comments.vue';
export default {
  components: { comments },
  name: 'post',
  data() {
    return {
      post: {User: {pseudo:""}, content:""}
    };
  },
  methods: {
    getOnePost: function () {
      axios.get("http://localhost:3000/api/post/"+ this.$route.params.postId).then((res) => {
        this.post = res.data;
      });

    },
  },
  deletePost(idPost) {
            const token = localStorage.getItem('token')
            //const idPost = this.$route.params.id
            axios.delete("http://localhost:3000/api/post/" + idPost,  
            )
            .then(res => {
                if (res) {
                    this.getAllPosts();
                }
            })
            .catch(error => {
                console.log("Le post n'a pas été supprimé" + error )
            }) 
        },
  mounted() {
    this.getOnePost();
  },
};
</script>
<style scoped>

.get-one-post {
  text-align: center;
  border: 5px solid #851505;
  color: #851505;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  margin: auto;
  padding: 20px;
  margin-bottom: 40px;
}
.post {
  width: 100%;
  margin: auto;
  height: auto;
}
.nicknamePost {
  border-radius: 25px 25px 0 0;
  padding: 5px;
  text-align: left;
  font-weight: bold;
}
.contentPost {
  background-color: #fff;
  color: #262A77;
  padding: 20px;
  margin-bottom: 10px;
}
.filePost {
  margin-bottom: 10px;
}
button {
  padding: 10px;
  width: 200px;
  background-color: #851505;
  font-weight: 800;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
</style>