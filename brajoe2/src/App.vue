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

</style>
