<template>
  <div id="NavBar" :style="{
      top: showHeader ? '63px' : '0'
      // top: '64px'
    }">
    <div class="NavBar_container">
      <div class="nav_list">
        <div
          v-for="tag in navList"
          :key="tag"
          class="nav_list-item"
          :style="{ color: activeTag === tag ? '#007FFF' : '#71777c' }"
          @click="activeTag = tag"
        >{{ tag }}</div>
        
      </div>
      <div class="tag_manage-btn" v-if="activeRule==='/micro-juejin-home'">
        <a-button type="link">标签管理</a-button>
        </div>  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    activeRule: {
      type: String,
      default: ""
    }
  },
  computed: {
    navList() {
      return this.navListMap[this.activeRule] || [];
    }
  },
  created() {
    this.activeTag = this.navList && this.navList[0];
  },
  data() {
    return {
      activeTag: "",
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
      }
    };
  }
};
</script>

<style lang="scss">
#NavBar {
  transition: top 0.5s cubic-bezier(0.65, -1.51, 0.41, 2.43), opacity 0.5s;
  background: #fff;
  width: 100vw;
  border-top: 1px solid #e3e3e3;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
  //height: 46px;
  line-height: 46px;
  position: fixed;
  z-index: 1;
  //top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  .NavBar_container {
    display: flex;
    width: 960px;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    .nav_list {
      display: flex;
      min-width: max-content;
      .nav_list-item {
        padding: 0 16px;
        font-size: 14px;
        color: #71777c;
        cursor: pointer;
        min-width: max-content;
        &:hover {
          color: #007fff;
        }
      }
    }
    .tag_manage-btn {
      // min-width: 100px;
      // background-color: #dc0816;
    }
  }
}
</style>
