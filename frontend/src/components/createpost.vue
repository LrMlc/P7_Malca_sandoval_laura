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
        <input class="imagePost" type="file" name="file" @change="selectFile($event)" /> <br />
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
      file: '',
    };
  },
  methods: {
    selectFile(event){
      this.file=event.target.files[0];
    },
    createPost: function () {
      let data=new FormData();
      data.append("content",this.content);
      data.append("file", this.file);
      axios
        .post("http://localhost:3000/api/post/", data)
        .then((response) => {
          console.log(response.data);
          this.$emit("newPost");
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
  box-shadow: inset 0 0 20px;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  width: 60%;
  margin: auto;
  padding: 10px;
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
  width: 140px;
  background-color: #bb4e56;
  font-weight: 800;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
</style>