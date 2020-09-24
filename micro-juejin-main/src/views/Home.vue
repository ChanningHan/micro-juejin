<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="我是被tryVite召唤的主应用组件...."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  created() {
  },
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  beforeMount() {
  }
};
</script>
