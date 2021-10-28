<template>
  <div class="createPost">
    <div class="newPost">
      <textarea
        v-model="content"
        name="content"
        class="contentNewPost"
        placeholder="Voulez-vous partager quelque chose ?"
      ></textarea>
      <br />
    </div>
    <div class="filePost">
      <label for="image">
        <input class="imagePost" type="file" name="image" ref="image" /> <br />
      </label>
    </div>

    <button @click="createPost()" class="submit">Publier</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    createPost: function () {
      axios
        .post("http://localhost:3000/api/post/", {
          content: this.content,
        })
        .then((response) => {
          console.log(response.data);
        })
      .catch(error =>
      {
      console.log( error );
      });
    },
  },
};
</script>

<style scoped>
.createPost {
  text-align: center;
  border: 5px solid #851505;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  margin: auto;
  padding: 20px;
  margin-bottom: 40px;
}
.newPost {
  margin: 5px;
}
.contentNewPost {
  width: 500px;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
}
input {
  padding-bottom: 10px;
  width: 400px;
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