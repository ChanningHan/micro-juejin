<template>
  <div id="HomeMain_container">
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
  }
};
</script>

<style scoped lang="scss">
#HomeMain_container {
  flex: 1;
  transition: all 1s;
}
</style>
