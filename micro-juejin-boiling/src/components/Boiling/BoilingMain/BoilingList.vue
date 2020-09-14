<template>
  <div class="BoilingList">
    <RecycleScroller
      ref="rec"
      class="scroller"
      :items="boilingList"
      :minItemSize="0.1"
      key-field="msg_id"
      v-slot="{ item }"
    >
      <BoilingCard :boiling="item" :key="item.id"></BoilingCard>
    </RecycleScroller>
    <div v-show="loading" style="margin-top: -156.5px">
      <div v-for="item in skeletonNum" :key="item" class="skeleton-wrapper">
        <a-skeleton active :paragraph="{ rows: 2 }" size="small" />
      </div>
    </div>
  </div>
</template>

<script>
// 图片展示插件
import BoilingCard from "@/components/Boiling/BoilingMain/BoilingCard";
import { RecycleScroller } from "vue-virtual-scroller";
import { mapGetters } from "vuex";
import { onGlobalStateChange } from "@/main";
export default {
  components: {
    BoilingCard,
    RecycleScroller
  },
  computed: {
    ...mapGetters("boiling", ["boilingList"])
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("boiling/getBoilingList");
    this.loading = false;
    onGlobalStateChange(async state => {
      console.log("监听到滚动到底了！！！！！！！！！！！！！！！");
      if (state.scrollToBottom && !this.loading) {
        this.skeletonNum = 11;
        this.loading = true;
        await this.$store.dispatch("boiling/getBoilingList", 10);
        this.loading = false;
      }
    });
  },
  data() {
    return {
      loading: false,
      skeletonNum: 20
    };
  }
};
</script>

<style scoped lang="scss">
.BoilingList {
}
.skeleton-wrapper {
  background-color: #fff;
  margin: 8px 0;
  padding: 12px;
}
</style>
