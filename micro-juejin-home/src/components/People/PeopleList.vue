<template>
  <div>
    <Loading v-if="loading"></Loading>
    <template v-else>
      <button @click="handleSlice">
        SLICE
      </button>
      <div
        v-for="people in peopleList"
        :key="people.id"
        class="people_info_box"
      >
        <p>id: {{ people.id }}</p>
        <p>name: {{ people.name }}</p>
        <p>birth: {{ people.birth | formatDate("YYYY年 M月 D日") }}</p>
        <p>address: {{ people.address }}</p>
        <p>constellation: {{ people.constellation }}</p>
      </div>
    </template>
  </div>
</template>
<script>
import peopleMixin from "@/mixins/peopleMixin";
import Loading from "@/components/common/Loading";

import { mapGetters, mapMutations } from "vuex";
import { SET_PEOPLE_LIST } from "@/store/modules/people/mutations-type";

export default {
  mixins: [peopleMixin],

  created() {
    this.getPeopleList();
  },

  computed: {
    ...mapGetters("people", ["peopleList"])
  },

  methods: {
    ...mapMutations("people", [SET_PEOPLE_LIST]),
    async getPeopleList() {
      this.loading = true;

      await this.$store.dispatch("people/getPeopleList"); // 错误情况已在拦截器处理

      this.loading = false;
    },
    handleSlice() {
      if (this.peopleList && this.peopleList.length > 0)
        this[SET_PEOPLE_LIST](this.peopleList.slice(1));
    }
  },

  data() {
    return {
      // peopleList: [],
      loading: false
    };
  },

  components: {
    Loading
  }
};
</script>
<style lang="scss" scoped>
.people_info_box {
  border-bottom: 1px dashed gray;
}
</style>
