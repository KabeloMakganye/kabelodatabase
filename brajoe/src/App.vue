<template>
<body>
  <div id="app">
    <!--<img src="./assets/logo.png"> -->
    <router-view/>
  </div>
  </body>
</template>

<script>
import foot from './components/foot.vue'
export default {
  components: { 'app-footer': foot },
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}

</style>
