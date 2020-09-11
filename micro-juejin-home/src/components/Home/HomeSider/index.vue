<template>
  <transition name="head_fade">
    <div id="HomeSider_container"></div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#HomeSider_container {
  background: #fff;
  height: 1000px;
  width: 240px;
  margin-left: 16px;
  transition: all 1s;
  transform: scale(1);
}
@media screen and (max-width: 900px) {
  #HomeSider_container {
    width: 0;
    opacity: 0;
    transform: scale(0);
  }
}
</style>
