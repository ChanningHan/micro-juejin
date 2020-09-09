<template>
  <div
    class="WriteButton_wrapper"
    :style="{
      width: isCollapsed ? 0 : '120px'
    }"
  >
    <transition name="ease_fade" class="WriteButton_wrapper">
      <a-dropdown-button
        :trigger="['click']"
        type="primary"
        v-if="!isCollapsed"
        style="margin-left: 8px"
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
  </div>
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
.WriteButton_wrapper {
  transition: width 0.5s;
  .ease_fade-enter,
  .ease_fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .ease_fade-enter-active,
  .ease_fade-leave-active {
    transition: all 0.5s ease;
  }
  .button-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
