<template>
    <div class="createPost">
                <div class="newPost">
                    <textarea v-model="content" name="content" class="contentNewPost" placeholder="Voulez-vous partager quelque chose ?"></textarea> <br>
                </div>
                <div class="filePost">
                    <label for="image">
                        <input class="imagePost" type="file" name="image" ref="image"> <br>
                    </label>
                </div>

                <button @click="createPost()" class="submit">Publier</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CreatePost',
    data() {
        return {
            content: "",
        };
    },
methods: {
        createPost: function(){
            axios.post("http://localhost:3000/api/post/createPost", {content: this.content}
            )
            .then(response => {
                console.log(response.data);
            });
        },
}
}


</script>

<style scoped>
.createPost{
    text-align: center;
    border: 1px solid black;
    margin: auto;
    padding: 10px;
    margin-bottom: 10px;
}
.newPost{
    margin:5px ;
}
.contentNewPost{
    width: 65%;
    padding: 5px;
    border-radius: 5px
}
button{
    padding: 10px;
    background-color: blue;
    border-radius: 20px;
    cursor: pointer;
}
</style>