<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div :class="{active:isActive}"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      count: 0
    }
  },
  watch:{
    isActive(){

    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style>
  .active {
    animation: activeAnimation 1s ;
  }
  @keyframes activeAnimation {
    from ()

  }
</style>
