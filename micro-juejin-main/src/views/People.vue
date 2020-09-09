<template>
  <div class="about">
    <h1>PEOPLE PAGE</h1>
    <PeopleList></PeopleList>
  </div>
</template>
<script>
import PeopleList from "../components/People/PeopleList.vue";
export default {
  components: {
    PeopleList
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
