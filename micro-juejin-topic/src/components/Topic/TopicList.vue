<template>
  <div class="TopicList">
    <TopicCard
      v-for="topic in topicList"
      :key="topic.topic_id"
      :topic="topic.topic"
    ></TopicCard>
  </div>
</template>

<script>
import TopicCard from "@comp/Topic/TopicCard";
import API from "@/apis/";
export default {
  components: {
    TopicCard
  },
  data() {
    return {
      topicList: []
    };
  },
  async created() {
    const res = await API.topic.getTopicList();
    console.log("res");
    console.log(res);
    this.topicList = res.list.sort(
      (a, b) => b.topic.follower_count - a.topic.follower_count
    );
  }
};
</script>

<style scoped lang="scss">
.TopicList {
  display: flex;
  flex-wrap: wrap;
}
</style>
