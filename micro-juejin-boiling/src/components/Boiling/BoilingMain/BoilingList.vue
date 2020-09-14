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
      console.log("局部监听！！！！！！！！！！！！！！！");
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
      // boilingList: [
      //   {
      //     id: "1",
      //     author_user_info: {
      //       user_name: "小脏孩",
      //       user_id: "1451011079676952",
      //       job_title: "全部开发小菜鸡",
      //       company: "nowhere",
      //       avatar_large:
      //         "https://user-gold-cdn.xitu.io/2019/11/30/16ebc83a20d50d9a?w=744&h=745&f=png&s=282857"
      //     },
      //     msg_Info: {
      //       msg_id: "1",
      //       content:
      //         "马上十一放假了，大家有什么省钱小攻略吗↵↵↵在家吹空调玩电脑，电费挺贵的🤓",
      //       pic_list: [
      //         "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eee71f9b445749e0b7e7da335ca72141~tplv-k3u1fbpfcp-zoom-1.image"
      //         // "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f82f91050e0243cd87bb3b61ddd4caec~tplv-k3u1fbpfcp-zoom-1.image"
      //       ],
      //       comment_count: 3,
      //       digg_count: 6,
      //       topic: {
      //         title: ""
      //       },
      //       ctime: "1599995268"
      //     }
      //   },
      //   {
      //     id: "2",
      //     author_user_info: {
      //       user_name: "小脏孩",
      //       user_id: "1451011079676952",
      //       job_title: "全部开发小菜鸡",
      //       company: "nowhere",
      //       avatar_large:
      //         "https://user-gold-cdn.xitu.io/2019/11/30/16ebc83a20d50d9a?w=744&h=745&f=png&s=282857"
      //     },
      //     msg_Info: {
      //       msg_id: "1",
      //       content:
      //         "马上十一放假了，大家有什么省钱小攻略吗↵↵↵在家吹空调玩电脑，电费挺贵的🤓",
      //       pic_list: [
      //         "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eee71f9b445749e0b7e7da335ca72141~tplv-k3u1fbpfcp-zoom-1.image",
      //         "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f82f91050e0243cd87bb3b61ddd4caec~tplv-k3u1fbpfcp-zoom-1.image"
      //       ],
      //       comment_count: 0,
      //       digg_count: 0,
      //       topic: {
      //         title: ""
      //       },
      //       ctime: "1599995268"
      //     }
      //   }
      // ]
    };
  }
};
</script>

<style scoped lang="scss">
.skeleton-wrapper {
  background-color: #fff;
  margin: 8px 0;
  padding: 12px;
}
</style>
