<template>
    <nav>
      <div class="home"><router-link to="/home">Accueil</router-link></div>
      <div class="box-profile"><router-link to="/profil">Profil</router-link></div>
      <div class="box-deconnexion"><router-link to="/">Déconnexion</router-link></div>
    </nav>   
</template>

<script>
/*src="https://kit.fontawesome.com/113b72d011.js" crossorigin="anonymous"*/
export default {
  name: 'nav-comp'
}

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
a{
 text-decoration: none;
 color: #bb4e56;
 cursor: pointer;
 font-weight: 800;
}
</style>
