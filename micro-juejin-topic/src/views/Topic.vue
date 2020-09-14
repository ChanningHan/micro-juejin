<template>
  <div id="Topic">
    <h1 class="page_header">全部话题</h1>
    <TopicList></TopicList>
  </div>
</template>

<script>
import TopicList from "@comp/Topic/TopicList";
export default {
  name: "Topic",
  components: {
    TopicList
  }
};
</script>
<style lang="scss" scoped>
#Topic {
  width: 960px;
  padding-bottom: 64px;
  .page_header {
    //margin-left: 14px;
    text-align: left;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>
