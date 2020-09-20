<template>
  <div id="HomeMain_container">
    <a-button @click="getToken" v-if="false">GET_TOKEN</a-button>
    <NavTabs></NavTabs>
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import NavTabs from "@comp/Home/HomeMain/NavTabs";
import ArticleList from "@comp/Home/HomeMain/ArticleList";
export default {
  components: {
    NavTabs,
    ArticleList
  },
  methods: {
    getToken() {
      console.log("get token");
      console.log(localStorage.getItem("test_token"));
      console.log('_______________')
      console.log('get cookie')
      console.log(document.cookie)
    }
  }
};
</script>

<style scoped lang="scss">
#HomeMain_container {
  flex: 1;
  transition: all 1s;
}
</style>
