<template>
  <div class="NavBar">
    <a-menu mode="vertical" :default-selected-keys="[navList[0]]">
      <template v-for="nav in navList">
        <a-menu-item :key="nav">{{ nav }}</a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navListMap: {
        "/micro-juejin-home": [
          "推荐",
          "关注",
          "后端",
          "前端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        "/micro-juejin-boiling": [
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
        ]
      },
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
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.NavBar {
  width: 113px;
  background: #fff;
  height: max-content;
  transition: all 1s ease;
}
</style>
