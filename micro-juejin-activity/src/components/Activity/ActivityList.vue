<template>
  <div class="ActivityList">
    <ActivityCard
      v-for="activity in activityList"
      :key="activity.id"
      :activity="activity"
    ></ActivityCard>
  </div>
</template>

<script>
import ActivityCard from "@comp/Activity/ActivityCard";
export default {
  components: {
    ActivityCard
  },
  created() {
    this.getActivityList();
  },
  computed: {
    activityList() {
      return this.$store.getters["activity/activityList"];
    }
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    async getActivityList() {
      this.loading = true;
      const res = await this.$store.dispatch("activity/getActivityList");
      console.log("getActivityList res");
      console.log(res);
      if (!res) {
        this.$message.warn("没有更多活动辣");
      }
      this.loading = false;
    }
  }
};
</script>

<style scoped lang="scss">
.ActivityList {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
