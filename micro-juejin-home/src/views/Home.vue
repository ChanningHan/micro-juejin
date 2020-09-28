<template>
  <div class="Home">
<!--    <a-modal v-model="isShow" title="Basic Modal" ></a-modal>-->
<!--    <a-button @click="isShow = !isShow">Toggle</a-button>-->
    <HomeMain></HomeMain>
    <HomeSider></HomeSider>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from "@comp/Home/HomeMain";
import HomeSider from "@comp/Home/HomeSider";

export default {
  name: "Home",
  components: {
    HomeMain,
    HomeSider
  },
  data() {
    return {
      // msg: __CHANNING_package_name__
      // isShow: false
    };
  }
};
</script>
<style lang="scss" scoped>
.Home {
  width: 960px;
  display: flex;
  padding-top: 64px;
  overflow-x: hidden;
  height: 100%;
}
</style>
