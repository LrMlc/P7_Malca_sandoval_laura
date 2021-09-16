<template>
    <nav>
        <router-link to=".views/login.vue"><i class="fas fa-power-off"></i>Déconnexion</router-link>
    </nav>   
</template>

<script>
export default {
  name: 'nav'
}

</script>
<style scoped>
nav{
  display: flex;
  align-items: right;
  height: 10px;
  border: 1px solid #ff6666;
}
</style>
