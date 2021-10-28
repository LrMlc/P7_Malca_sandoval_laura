<template>
  <header>     
        <div id="text"> 
            <img :src="require('../assets/logos/icon-left-font-monochrome-white.png')" alt="Groupomania">  
        </div>             
  </header>
</template>

<script>
export default {
  name: 'header-comp'
}

</script>
<style scoped>
header, img {
    width: 200px;
}
</style>
