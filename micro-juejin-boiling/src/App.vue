<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout";
export default {
  components: {
    BasicLayout
  },
  created() {
    console.log(process.env);
  }
};
</script>
<style lang="scss">
#app {
  //box-sizing: content-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  display: flex;
  justify-content: center;
}
</style>
