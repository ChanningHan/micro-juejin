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
import { onGlobalStateChange } from "@/main";
import ActivityCard from "@comp/Activity/ActivityCard";
export default {
  components: {
    ActivityCard
  },
  created() {
    this.getActivityList();
  },
  mounted() {
    onGlobalStateChange((state, prev) => {
      console.log("监听到来自qiankun的全局通信");

      if (state.city !== prev.city) {
        console.log("城市发生变化");
        console.log(`${prev.city} ====> ${state.city}`);
        this.getActivityList(state.city);
      } else if (state.scrollToBottom && !this.loading) {
        this.getActivityList();
      }
    });
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
    async getActivityList(city) {
      this.loading = true;
      const res = await this.$store.dispatch("activity/getActivityList", city);
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
