<template>
  <div id="Activity">
    <div class="Activity_header">
      <ADCarousel></ADCarousel>
      <ActivityCalendar></ActivityCalendar>
    </div>
    <ActivityList></ActivityList>
  </div>
</template>

<script>
import ADCarousel from "@comp/Activity/ADCarousel";
import ActivityCalendar from "@comp/Activity/ActivityCalendar";
import ActivityList from "@comp/Activity/ActivityList";
export default {
  components: {
    ADCarousel,
    ActivityCalendar,
    ActivityList
  }
};
</script>

<style scoped lang="scss">
#Activity {
  width: 960px;
  padding-top: 164px;
  .Activity_header {
    height: 281px;
    display: flex;
  }
}
</style>
<style lang="scss">
@media screen and(max-width: 975px) {
  #Activity {
    .ActivityCalendar_container {
      width: 0px;
      transform: scale(0);
    }
  }
}
</style>
