<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/map">Map</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  // components: {
  //   Home,
  //   Map
  // }
};
</script>

<style>

</style>
