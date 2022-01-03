<template>
  <div class="allComments">
    <h3 class="titleComments">Commentaires :</h3>
    <article class="comments" v-for="comment in comments" :key="comment.id">
        <div class="commentPseudo">{{ comment.User.pseudo }}:</div>
        <div class="commentContent">"{{ comment.content }}"</div>
        <button
          class="deleteComment" aria-placeholder="supprimer le commentaire?" @click="deleteComment(comment.id)" v-if="userId == comment.UserId || isAdmin == true"> X
        </button>
    </article>
      
      <div class="createComments">
            <form @submit.prevent="createComment" class="formComment" >

                <div class="formNewComments">
                  <div class="whriteComment">
                    <label class="titleNewComment" for="newComment">Un commentaire ?</label> <br>
                    <textarea v-model="content" name="newComment" class="contentNewComment" placeholder="voulez-vous rajouter quelque chose?" required></textarea> <br>
                    <button class="addComment" type="submit">Commenter</button>
                  </div>
                    
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

 deleteComment(commentId) {
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
    //alert(this.$route.params.postId);
  },
}
</script>

<style scoped>
h3 {
  margin: 4rem 0;
}
.allComments {
  text-align: center;
  border: 1px solid #1f3250;
  color: #1f3250;
  box-shadow: 0 0 10px #1f3250;
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
article.comments{
  border: double #bb4e56;
  width: 90%;
  margin-bottom: 5px;
}
.commentPseudo {
  border-radius: 25px 25px 0 0;
  padding: 5px;
  text-align: left;
  font-weight: bold;
  padding-left: 10px;
  margin: 5px;
}
.commentContent{
  background-color: #fff;
  color: #1f3250;
  padding: 15px;
  margin-bottom: 10px;
}
.comments {
  width: 100%;
  margin: auto;
  height: auto;
}
.whriteComment{
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 10px;
}
.titleNewComment, .contentNewComment{
  margin: 5px;
}
.contentNewComment{
  width: 50%;
}
button.addComment {
  padding: 5px;
  width: 150px;
  background-color: #bb4e56;
  font-weight: 800;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin: 8px;
}
button.deleteComment{
  color: white;
  background-color:#bb4e56 ;
  margin-bottom: 10px;
}
a button.deleteComment {
  text-decoration: none;
}
</style>