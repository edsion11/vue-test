<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <el-input type="text" v-model="msg" />
    <el-button @click="show = !show">按我</el-button>
    <transition name="el-fade-in-linear"
      ><div class="ball" v-show="show"></div
    ></transition>
    <transition name="el-fade-in">
      <div v-show="show" class="ball1"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: true
    }
  },
  props: {
    msg: String
  },
  methods: {
    tiao: function() {
      console.log('aa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ec36af;
  position: absolute;
  top: 0;
  bottom: 0;
}
.ball1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ec36af;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
}
</style>
