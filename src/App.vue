<template>
  <div id="app">
    <!-- <img src="./assets/VEnterpriseRoundNoText.png"> -->
    <p>Hello World</p>
    <router-link to="/projects">Projects</router-link>
    <router-view/>
    <p>Technical problems please hold by</p>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .scrolling-wrapper-flex {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .card {
    flex: 0 0 auto;
  }
</style>
