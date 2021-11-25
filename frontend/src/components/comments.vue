<template>
  <div class="allComments">
    <h3 class="titleComments">Commentaires :</h3>
    <div class="comments" v-for="comment in comments" :key="comment">
      <div class="commentContent">{{ comment.content }}</div>
      <div class="commentPseudo"><strong>{{ comment.nickname }}</strong></div>
        <button
          class="deleteComment" @click="deleteComment(comment.id)" v-if="userId == comment.id_user || isAdmin == 1">
        </button>
    </div>
      
      <div class="createComments">
            <form class="formComment" @submit.prevent="createComment">

                <div class="formNewComments">
                    <label class="titleNewComment" for="newComment">Un commentaire ?</label> <br>
                    <textarea name="newComment" class="contentNewComment" placeholder="voulez-vous rajouter quelque chose?" required></textarea> <br>
                    <button class="addComment" type="submit">Commenter</button>
                </div>
            </form>
      </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      comments: [],
      content: "",
      nickname: "",
      userId: -1,
      isAdmin: false,
    };
  },

methods:{
  getAllComments() {
      axios.get("http://localhost:3000/api/comments/").then((res) => {
        this.comments = res.data;
      });
    },
  

createComment() {
            axios.post(`http://localhost:3000/api/comment/${idPost}/comment`, 
            )
            .then(res => {
                this.comment = res.data;
                this.getAllComments();
            })
            .catch(error => {
                console.log("Le commentaire n'a pas été crée /" + error)
            })
        },
 deleteComments() {
            axios.delete("http://localhost:3000/api/post/" , 
            )
            .then(res => {
                if (res) {
                    window.location.reload()
                }
            })
            .catch(error => {
                console.log("Le commentaire n'a pas été supprimé" + error )
            }) 
        }},

mounted() {
    this.isAdmin=localStorage.getItem("isAdmin");
    this.userId=localStorage.getItem("userId");
    this.getAllComments();
  },
}
</script>

<style scoped>
h3 {
  margin: 4rem 0;
}
.allComments {
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
.titleComments {
  border-radius: 2px solid #851505;
  cursor: pointer;
}
.comments {
  width: 100%;
  margin: auto;
  height: auto;
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