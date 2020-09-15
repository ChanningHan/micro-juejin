<template>
  <div class="BrochureList">
    <BrochureCard
      v-for="brochure in brochureList"
      :key="brochure.booklet_id"
      :brochure="brochure"
    ></BrochureCard>
    <Loading v-show="loading" class="loading_box"></Loading>
    <h1 v-if="isOver" class="over_tip">
      🦄 没有更多小册了 😱😱😱😱😱😱😱
    </h1>
  </div>
</template>

<script>
import Loading from "@comp/common/Loading";
import { mapGetters } from "vuex";
import BrochureCard from "./BrochureCard";
import { onGlobalStateChange } from "@/main";
export default {
  components: {
    BrochureCard,
    Loading
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async fetchData(limit) {
      this.loading = true;
      await this.$store.dispatch("brochure/getBrochureList", limit);
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters("brochure", ["brochureList", "isOver"])
  },
  created() {
    this.fetchData(20);
    onGlobalStateChange(state => {
      console.log("监听到滚动加载事件");
      console.log(state);
      if (state.scrollToBottom) {
        this.fetchData(10);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.BrochureList {
  flex: 1;
}
.over_tip {
  box-sizing: border-box;
  color: #a3a3a3;
  margin-bottom: 64px;
  font-weight: bold;
  border-radius: 8px;
  padding: 1em 1.5em;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(
        -45deg,
        #a3a3a3 0,
        #a3a3a3 25%,
        transparent 0,
        transparent 50%
      )
      0 / 0.6em 0.6em;
  animation: ants 12s linear infinite;

  width: 100%;
}
@keyframes ants {
  to {
    background-position: 100% 100%;
  }
}
</style>
