<template>
  <div class="about" style="background: #42b983;">
    <h1>This is a people page</h1>
    <PeopleList></PeopleList>
  </div>
</template>
<script>
import PeopleList from "../components/People/PeopleList.vue";
export default {
  components: {
    PeopleList
  }
};
</script>
