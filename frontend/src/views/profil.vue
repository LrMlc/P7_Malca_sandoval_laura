<template>
<section>
  <div class="deleteProfil">
    <h2>Bonjour, </h2>
    <div class="userPseudo">"{{nickname}}!"</div>
    <div class="question">Voulez vous supprimer votre profil?</div>
    <button class="delete" @click="deleteUser()">Supprimer le profil</button>
  </div>
</section>
</template>

<script>
import axios from "axios";
export default {
  name: "profil",
  data() {
    return {
      nickname: "",
      userId: -1,
      isAdmin: false,
    };
  },
methods:{
 deleteUser() {
            axios.delete("http://localhost:3000/api/user/" + this.userId , 
            )
            .then(res => {
                if (res) {
                localStorage.removeItem('token');
                    this.$router.push('/login'); 
                }
            })
            .catch(error => {
                console.log( error )
            })
  },                   
},
 mounted() {
    this.isAdmin=localStorage.getItem("isAdmin")=="true";
    this.userId=localStorage.getItem("userId");
    this.nickname=localStorage.getItem("nickname");
},
}
</script>
<style scoped>
.deleteProfil{
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
h2{
  text-align: left;
  padding-left: 70px;
}
div.userPseudo{
  font-size: xxx-large;
}
</style>