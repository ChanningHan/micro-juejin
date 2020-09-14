<template>
  <div class="BoilingSider">
    <UserCard></UserCard>
    <RecommendCard></RecommendCard>
    <GuideCard></GuideCard>
  </div>
</template>

<script>
import UserCard from "@comp/Boiling/BoilingSider/UserCard";
import RecommendCard from "@comp/Boiling/BoilingSider/RecommendCard";
import GuideCard from "@comp/Boiling/BoilingSider/GuideCard";
export default {
  components: {
    UserCard,
    RecommendCard,
    GuideCard
  }
};
</script>

<style scoped lang="scss">
.BoilingSider {
  //min-width: 248px;
  width: 248px;
  height: 50vh;
  //background: #fff;
  transition: all 1s ease;
}
</style>
