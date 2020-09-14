<template>
  <div class="TopicList">
    <TopicCard
      v-for="topic in topicList"
      :key="topic.topic_id"
      :topic="topic.topic"
    ></TopicCard>
    <Loading v-if="loading" style="margin: 0 auto"></Loading>
  </div>
</template>

<script>
import TopicCard from "@comp/Topic/TopicCard";
import Loading from "@comp/common/Loading";
import API from "@/apis/";
export default {
  components: {
    TopicCard,
    Loading
  },
  data() {
    return {
      topicList: [],
      loading: false
    };
  },
  async created() {
    this.loading = true;
    const res = await API.topic.getTopicList();
    console.log("res");
    console.log(res);
    this.topicList = res.list.sort(
      (a, b) => b.topic.follower_count - a.topic.follower_count
    );
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.TopicList {
  display: flex;
  flex-wrap: wrap;
}
</style>
