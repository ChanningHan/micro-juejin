<template>
  <div id="Activity">
    <div class="Activity_header">
      <ADCarousel class="shadow_card"></ADCarousel>
      <ActivityCalendar class="shadow_card"></ActivityCalendar>
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
<style lang="scss">
#Activity {
  .shadow_card {
    box-shadow: 2px 2px 2px rgba(110, 110, 110, 0.15);
    &:hover {
      box-shadow: 6px 6px 6px rgba(110, 110, 110, 0.1);
    }
  }
}
</style>
<style scoped lang="scss">
#Activity {
  width: 960px;
  padding-top: 56px;
  .Activity_header {
    height: 300px;
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
      margin-left: 0px;
    }
    .ADCarousel {
      width: 100vw;
    }
    .ActivityCard {
      width: 32vw;
      //height: 36.7vw;
      height: max-content;
    }
  }
}
@media screen and(max-width: 725px) {
  #Activity {
    .ActivityCard {
      width: 49vw;
      //height: 56.2vw;
      height: max-content;
    }
  }
}
@media screen and(max-width: 510px) {
  #Activity {
    .ActivityCard {
      width: 100vw;
      //height: 114.8vw;
      height: max-content;
    }
  }
}
</style>
