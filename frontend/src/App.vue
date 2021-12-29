<template>
<section>
  <headercomp />
  <router-view></router-view>
</section>

</template>

<script>

import headercomp from '@/components/header.vue';


export default {
  name: 'App',
  components: {
    headercomp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
header, img {
    margin: 2rem;
}
</style>
