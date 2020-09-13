<template>
  <div class="BoilingMain">
    <boiling-text-area></boiling-text-area> 
    <boiling-list></boiling-list>
  </div>
</template>

<script>
import BoilingTextArea from '@/components/Boiling/BoilingMain/BoilingTextArea'
import BoilingList from '@/components/Boiling/BoilingMain/BoilingList'
export default {
  components: {
    BoilingTextArea,
    BoilingList
  }
};
</script>

<style scoped lang="scss">
.BoilingMain {
  min-width: 570px;
  flex: 1;
  height: 100vh;
  background: #fff;
  transition: all 1s ease;
  margin: 0 14px;
}
</style>
