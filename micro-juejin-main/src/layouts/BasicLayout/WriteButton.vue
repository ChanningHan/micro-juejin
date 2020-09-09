<template>
  <transition name="menu_fade">
    <a-dropdown-button
      :trigger="['click']"
      type="primary"
      v-show="!isCollapsed"
    >
      <div class="button-wrapper">
        <div @click="handleClickArticle">发文章</div>
      </div>
      <a-menu slot="overlay" style="width:105px;text-align: center">
        <a-menu-item key="0" @click="handleClickBoiling">
          <span>发布沸点</span>
        </a-menu-item>
      </a-menu>
      <a-icon slot="icon" type="caret-down" />
    </a-dropdown-button>
  </transition>
</template>
<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClickArticle() {
      console.log("handleClickArticle");
    },
    handleClickBoiling() {
      console.log("handleClickBoiling");
    }
  }
};
</script>
<style scoped lang="scss">
.button-wrapper {
  display: flex;
  align-items: center;
}
</style>
