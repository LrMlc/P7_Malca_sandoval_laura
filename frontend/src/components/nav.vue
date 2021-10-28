<template>
    <nav>
        <router-link to="/login"><i class="fas fa-power-off"></i>Déconnexion</router-link>
    </nav>   
</template>

<script>
export default {
  name: 'nav-comp'
}

</script>
<style scoped>
nav{
  display: flex;
  justify-content: right;
  padding: 20px;
  height: 10px;
  border: 5px solid #851505;
  background-color: #CAC8C7;
  margin-bottom: 80px;
 
}
a{
 text-decoration: none;
 color: #851505;
 cursor: pointer;
 font-weight: 800;
}
</style>
