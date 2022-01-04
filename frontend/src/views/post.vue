<template>
<section class="get-one-post">
  <article class="post">
    <div class="nicknamePost">{{ post.User.pseudo }}:</div>
    <div class="delete"><button class="deletePost" placeholder="supprimer le post?" @click="deletePost(post.id)" v-if="userId == post.UserId || isAdmin == true"> X </button></div>
    <div class="contentPost">{{ post.content }}</div>
    <img v-if="post.file" :src="post.file" class="filePost"/>
  </article>
  <div>
    <comments />
</div>
<div class="return">
  <button class="return">
    <router-link to="/home">Page précédente</router-link>
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
      post: {User: {pseudo:""}, content:""},
      userId: -1,
      isAdmin: false,
    };
  },
  methods: {
    getOnePost: function () {
      axios.get("http://localhost:3000/api/post/"+ this.$route.params.postId).then((res) => {
        this.post = res.data;
      });

    },
    deletePost(idPost) {
            axios.delete("http://localhost:3000/api/post/" + idPost,  
            )
            .then(res => {
                if (res) {
                  this.$router.push("/home");
                }
            })
            .catch(error => {
                console.log("Le post n'a pas été supprimé" + error )
            }) 
        },
  },
  
  mounted() {
    this.getOnePost();
    this.isAdmin=localStorage.getItem("isAdmin")=="true";
    this.userId=localStorage.getItem("userId");
  },
};
</script>
<style scoped>

.get-one-post {
  text-align: center;
  border: 1px solid black;
  box-shadow: inset 0 0 20px black;
  color: #bb4e56;
  background-color: white;
  border-radius: 20px;
  width: 80%;
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
  color: #bb4e56;
  padding: 20px;
  margin-bottom: 10px;
  font-size: larger;
}
.filePost {
  margin-bottom: 10px;
}
button.return{
  padding: 5px;
  width: 150px;
  background-color: #bb4e56;
  font-weight: 800;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin: 8px;

}
a{
  color:#fff;
  text-decoration: none;
}
.delete{
  display: flex;
  justify-content: right;
  padding-right: 15px;
}
button{
color: white;
background-color: #bb4e56;
margin-bottom: 10px;
cursor: pointer;
}
img.filePost{
  width: 80%;
}

</style>