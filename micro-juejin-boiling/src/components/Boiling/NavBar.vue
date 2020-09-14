<template>
  <div class="NavBar">
    <div class="NavBar_block boiling_card">
      <a-menu
        mode="vertical"
        :default-selected-keys="selectedKeys"
        @select="handleSelect"
      >
        <template v-for="nav in navList">
          <a-menu-item :key="nav">{{ nav }}</a-menu-item>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedKeys: [],
      navList: [
        "推荐",
        "热门",
        "关注",
        "上班摸鱼",
        "内推招聘",
        "一图胜千言",
        "今天学到了",
        "每天一道算法题",
        "开发工具推荐",
        "树洞一下"
      ],
      routerList: [
        "/pins/recommended",
        "/pins/hot",
        "/pins/follow",
        "/pins/topic/1",
        "/pins/topic/2",
        "/pins/topic/3",
        "/pins/topic/4",
        "/pins/topic/5",
        "/pins/topic/6",
        "/pins/topic/7"
      ],
      navMap: new Map()
    };
  },
  created() {
    this.navList.forEach((nav, index) => {
      this.navMap.set(nav, this.routerList[index]);
      this.navMap.set(this.routerList[index], nav);
    });

    this.selectedKeys = [this.navMap.get(this.$route.path)];
  },
  methods: {
    handleSelect(e) {
      const toUrl = this.navMap.get(e.key);
      this.$router.push(toUrl);
    }
  }
};
</script>

<style scoped lang="scss">
.NavBar {
  width: 113px;
  background: #fff;
  height: max-content;
  transition: all 1s ease;
  .NavBar_block {
    position: fixed;
    width: 113px;
    //left: calc(50vw - 480px);
  }
}
</style>
