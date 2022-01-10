<template>
    <nav>
      <div class="home"><router-link to="/home">Accueil</router-link></div>
      <div class="box-profile"><router-link to="/profil">Profil</router-link></div>
      <div class="disconnect" @click="disconnect()">Déconnexion</div>
    </nav>   
</template>

<script>
export default {
  name: 'nav-comp',

  methods: {
   disconnect: function () {
     localStorage.clear();
     this.$router.push('/'); 
   }
 },
};
</script>
<style scoped>
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 25px;
  height: 10px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: inset 0 0 20px;
  background-color: #CAC8C7;
  margin-bottom: 80px;
 
}
a, .disconnect{
 text-decoration: none;
 color: #bb4e56;
 cursor: pointer;
 font-weight: 800;
}
</style>
