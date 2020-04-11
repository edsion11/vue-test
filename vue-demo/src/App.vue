<template>
  <div id="app">
    <musicplay></musicplay>
  </div>
</template>

<script>
import musicplay from './components/musicplay.vue'

export default {
  name: 'app',
  components: {
    musicplay
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
    background-color: #152432;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
