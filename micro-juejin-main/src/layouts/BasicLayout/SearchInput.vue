<template>
  <a-input-search
    :placeholder="placeholder"
    v-model="searchValue"
    @search="handleSearch"
    @focus="handleFocus"
    @blur="handleBlur"
    class="SearchInput_wrapper"
    :style="{
      width: isCollapsed ? '115px' : '200px',
      transition: 'width 0.5s'
    }"
    :enterButton="false"
  />
</template>
<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchValue: "",
      placeholder: "探索掘金"
    };
  },
  methods: {
    handleSearch() {
      console.log(this.searchValue);
    },
    handleFocus() {
      this.placeholder = "搜索文字/标签/用户";
    },
    handleBlur() {
      this.placeholder = "探索掘金";
    }
  }
};
</script>
<style scoped></style>
