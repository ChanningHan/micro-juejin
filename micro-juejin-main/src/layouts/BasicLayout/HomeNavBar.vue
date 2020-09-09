<template>
  <div
    id="NavBar"
    :style="{
      top: showHeader ? '64px' : '0'
      // top: '64px'
    }"
  >
    <div class="NavBar_container">
      <div class="nav_list">
        <div v-for="tag in navList" :key="tag" class="nav_list-item">
          {{ tag }}
        </div>
      </div>
      <div>
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
    }
  },
  data() {
    return {
      navList: [
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
      ]
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
    .nav_list {
      display: flex;
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
  }
}
</style>
