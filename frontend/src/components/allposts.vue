   
<template>
    <div>
        <h4>{{ post.User.firstname }} {{ post.User.lastname }}</h4>
        <p>posté le {{ post.createdday }}</p>
    // ajouter un bouton suppression visible qu'a l'administrateur?//   
    // ajouter le texte/ l'image du post//
    // montrer tout les posts//     
   
            
</template>
<script>
import Comments from "@/components/Comments.vue"
export default {
    name: 'Posts',
    components: {
        Comments
    },
    props: {
        posts: Array,
        isAdmin: Boolean,
        userId: Number
    },
    data() {
        return {
            comments: [],
        }
    },
    //methods: {
    //est ce qu'il faut déterminer le statut de l'user connecté (si il est administrateur ou pas) par rapport à ce post 
                
       // },
        //supprimer le post 
        //deletePost(postId) {
            //const data = {
               // userId: localStorage.getItem('userId')
           // }
       // },
        //}
        /* ajout d'un commentaire  */
        //async CreateComment(commentId) {
            //???//
        //}
        /* actualisation suite à la suppression du commentaire */
        //async deleteComment(commentId) {
            //this.comments = this.comments.filter((comment) => comment.id != commentId)
       // }
               
        //  est ce qu'il faut faire le fetch de tous les commentaires d'un post ? //
       // }        
    //}
}
</script>