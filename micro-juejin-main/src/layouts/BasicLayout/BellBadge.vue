<template>
  <a-icon
    type="bell"
    size="large"
    theme="filled"
    ref="bell"
    class="bell_icon"
    @hover="handleHover"
  ></a-icon>
</template>
<script>
export default {
  methods: {
    handleHover() {
      this.$refs.bell.style.color = "#007FFF";
    }
  }
};
</script>
<style scoped lang="scss">
.bell_icon {
  cursor: pointer;
  font-size: 24px;
  color: #71777c;
  margin: 0 8px 0 8px;
  :hover {
    color: #007fff;
  }
}
</style>
