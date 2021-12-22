<template>
  <div class="allComments">
    <h3 class="titleComments">Commentaires :</h3>
    <article class="comments" v-for="comment in comments" :key="comment.id">
        <div class="commentPseudo">{{ comment.User.pseudo }}</div>
        <div class="commentContent">{{ comment.content }}</div>
        <button
          class="deleteComment" aria-placeholder="supprimer le commenaite?" @click="deleteComment(comment.id)" v-if="userId == comment.UserId || isAdmin == 1"> X
        </button>
    </article>
      
      <div class="createComments">
            <form @submit.prevent="createComment" class="formComment" >

                <div class="formNewComments">
                    <label class="titleNewComment" for="newComment">Un commentaire ?</label> <br>
                    <textarea v-model="content" name="newComment" class="contentNewComment" placeholder="voulez-vous rajouter quelque chose?" required></textarea> <br>
                    <button class="addComment" type="submit">Commenter</button>
                </div>
            </form>
      </div>
  </div>
</template>

<script>
import axios from "axios";
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

createComment() {
            axios.post("http://localhost:3000/api/comments/"+ this.$route.params.postId, 
            {
              content:this.content
            }
            )
            .then(()=> {
                this.content = "";
                this.getAllCommentsByPost();
            })
            .catch(error => {
                console.log("Le commentaire n'a pas été crée /" + error)
            })
        },

getAllCommentsByPost(){
  axios.get("http://localhost:3000/api/comments/"+ this.$route.params.postId)
  .then((res=> {
    this.comments =res.data;
    console.log(res.data);
  }))
},

 deleteComments(commentId) {
            axios.delete("http://localhost:3000/api/comments/" + commentId , 
            )
            .then(res => {
                if (res) {
                   this.getAllCommentsByPost();
                }
            })
            .catch(error => {
                console.log("Le commentaire n'a pas été supprimé" + error )
            }) 
        }},

mounted() {
    this.isAdmin=localStorage.getItem("isAdmin")=="true";
    this.userId=localStorage.getItem("userId");
    this.getAllCommentsByPost();
    alert(this.$route.params.postId);
  },
}
</script>

<style scoped>
h3 {
  margin: 4rem 0;
}
.allComments {
  text-align: center;
  border: 1px solid #851505;
  color: #851505;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
}
.titleComments {
  text-align: left;
  padding-left: 10px;
  margin: 10px;
  cursor: pointer;
}
.pseudoComment {
  border-radius: 25px 25px 0 0;
  padding: 5px;
  text-align: left;
  font-weight: bold;
}
.commentContent{
  background-color: #fff;
  color: #262a77;
  padding: 20px;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  margin-top: 10px;
}
button .deleteComment{
  color: white;
  background-color:#851505 ;
}
a{
  color: white;
  text-decoration: none;
}
</style>