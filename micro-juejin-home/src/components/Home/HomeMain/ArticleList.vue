<template>
  <div id="ArticleList">
    <div>
      <RecycleScroller
        ref="rec"
        class="scroller"
        :items="articleList"
        :minItemSize="0.1"
        key-field="id"
        v-slot="{ item }"
      >
        <ArticleCard :article="item" :key="item.id"> </ArticleCard>
      </RecycleScroller>
    </div>
    <div v-show="loading" style="margin-top: -156.5px">
      <div v-for="item in skeletonNum" :key="item" class="skeleton-wrapper">
        <a-skeleton active :paragraph="{ rows: 2 }" size="small" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleCard from "@comp/Home/HomeMain/ArticleCard";
import { RecycleScroller } from "vue-virtual-scroller";
import { onGlobalStateChange } from "@/main";

export default {
  components: {
    ArticleCard,
    RecycleScroller
  },
  async created() {
    onGlobalStateChange(async state => {
      console.log("局部监听！！！！！！！！！！！！！！！");
      if (state.scrollToBottom && !this.loading) {
        this.skeletonNum = 11;
        this.loading = true;
        await this.$store.dispatch("home/getArticleList", 10);
        this.loading = false;
      }
    });

    // this.skeletonNum = Math.floor(document.body.offsetHeight / 150);

    // document.body.addEventListener("scroll", function() {
    //   alert("!!!!");
    // });

    this.loading = true;
    await this.$store.dispatch("home/getArticleList");
    this.loading = false;
  },
  computed: {
    ...mapGetters("home", ["articleList"])
  },
  data() {
    return {
      loading: true,
      skeletonNum: 15,
      busy: false
    };
  }
};
</script>

<style scoped lang="scss">
#ArticleList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .skeleton-wrapper {
    border-bottom: 0.5px solid rgba(110, 110, 110, 0.1);
    padding: 0 16px;
    display: flex;
    height: 116px;
    overflow: hidden;
    background: #fff;
  }
}
</style>
<style>
.ant-skeleton-content .ant-skeleton-paragraph > li {
  width: 100%;
  height: 11px;
  list-style: none;
  background: #f2f2f2;
}
</style>
