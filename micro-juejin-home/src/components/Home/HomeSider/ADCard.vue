<template>
  <a :href="$attrs.href" target="_blank">
    <div class="HomeSider_AD_wrapper">
      <img :src="$attrs.img" alt="" />
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.HomeSider_AD_wrapper {
  height: 200px;
  width: 240px;
  margin-bottom: 16px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
