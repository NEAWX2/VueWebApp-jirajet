<script setup>
import Mybar from './views/mybar.vue';
import mybar from './views/mybar.vue';

</script>

<template>
  <div id="app">
    <mybar />
    <router-view/>
  </div>

</template>
<script>
  export default {
    name : "App",
    components : {
      Mybar,
    },
  };
</script>

<style scoped>

</style>
