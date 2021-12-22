<template>
<section>
    <header class="header">
        <router-link to="/home">logo retour</router-link>
    </header>
    <div>
        <h2>Bonjour, </h2>
        <div class="userPseudo">{{nickname}}</div>
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