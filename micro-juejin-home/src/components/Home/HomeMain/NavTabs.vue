<template>
  <div id="NavTabs">
    <a-button
      type="link"
      :class="['NavTab_btn', activeKey === 'popular' ? 'active_tab' : '']"
      @click="handleClick('popular')"
      ><span>热门</span></a-button
    >
    <a-button
      type="link"
      :class="['NavTab_btn', activeKey === 'newest' ? 'active_tab' : '']"
      @click="handleClick('newest')"
      ><span>最新</span></a-button
    >
    <a-button
      type="link"
      :class="[
        'NavTab_btn',
        activeKey === 'three_days_hottest' ? 'active_tab' : ''
      ]"
      @click="handleClick('three_days_hottest')"
      ><span>热榜</span></a-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: "popular",
      navTabs: [
        {
          title: "热门",
          value: "popular"
        },
        {
          title: "最新",
          value: "popular"
        },
        {
          title: "热榜",
          value: "popular"
        }
      ]
    };
  },
  methods: {
    handleClick(activeKey) {
      this.activeKey = activeKey;
    }
  }
};
</script>

<style scoped lang="scss">
#NavTabs {
  background: #fff;
  padding: 8px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(110, 110, 110, 0.1);
  .NavTab_btn {
    color: #909090;
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 8px;
      width: 1px;
      height: 16px;
      background: #e3e3e3;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
  .active_tab {
    color: $primaryColor;
  }
}
</style>
