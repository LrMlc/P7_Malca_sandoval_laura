<template>
  <section class="allPosts">
    <h2>Actuellement</h2>

    <article v-for="post in posts" :key="post.id" class="post">
      <router-link :to="{name:'post', params:{postId:post.id}}">
        <div class="nicknamePost">{{ post.User.pseudo }}</div>
        <div class="contentPost">{{ post.content }}</div>
        <div class="filePost"></div>
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
    };
  },
  methods: {
    getAllPosts: function () {
      axios.get("http://localhost:3000/api/post/").then((res) => {
        this.posts = res.data;
      });
    },
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<style scoped>
h3 {
  margin: 4rem 0;
}
.allPosts {
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
article.post {
  border-radius: 2px solid #851505;
  cursor: pointer;
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
  color: #262a77;
  padding: 20px;
  margin-bottom: 10px;
}
.filePost {
  margin-bottom: 10px;
}
</style>