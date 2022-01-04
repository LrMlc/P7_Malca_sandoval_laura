<template>
  <section class="allPosts">
    <h2>Actuellement</h2>

    <article v-for="post in posts" :key="post.id" class="post">
      <router-link :to="{name:'post', params:{postId:post.id}}">
        <div class="nicknamePost">{{ post.User.pseudo }}:</div>
        <div class="contentPost">{{ post.content }}</div>
        <img v-if="post.file" :src="post.file" class="filePost"/>
        
      </router-link>
    </article>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "allposts",
  data() {
    return {
      posts: [],
      isAdmin: false,
      userId: -1
    };
  },
  methods: {
    getAllPosts() {
      axios.get("http://localhost:3000/api/post/").then((res) => {
        this.posts = res.data;
      });
    }},
    
  mounted() {
    this.isAdmin=localStorage.getItem("isAdmin");
    this.userId=localStorage.getItem("userId");
    this.getAllPosts();
  },
}

</script>

<style scoped>
h3 {
  margin: 4rem 0;
}
.allPosts {
  text-align: center;
  background-color: white;
  color: #bb4e56;
  border-radius: 20px;
  border: 1px solid black;
  width: 70%;
  margin: auto;
  padding: 20px;
  margin-bottom: 40px;
  box-shadow: inset 0 0 20px black;
}
article.post {
  cursor: pointer;
  border: double #bb4e56;
  width: 90%;
  margin-bottom: 5px;
  border-radius: 10px;
  margin-top: 15px;
}
.post {
  margin: auto;
  height: auto;
}
.nicknamePost {
  border-radius: 25px 25px 0 0;
  padding: 5px;
  text-align: left;
  font-weight: bold;
  margin: 10px;
  color: #bb4e56;
}
.contentPost {
  background-color: #fff;
  color: #1f3250;
  padding: 20px;
  margin-bottom: 10px;
  text-decoration: none;
}
.filePost {
  margin-bottom: 10px;
}
a{
  text-decoration: none;
}
img.filePost{
  width: 50%;
}
</style>