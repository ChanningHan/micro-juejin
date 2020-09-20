<template>
  <div class="loading_container">
    <h1 class="loading-tip">🦄 {{ msg }} 😱😱😱😱😱😱😱</h1>
  </div>
</template>
<script>
export default {
  name:'Loading',
  props:{
    msg: {
      type: String
    }
  }
};
</script>
<style scoped>
.loading-tip {
  margin-left: 8px;
  color: #a3a3a3;
  font-weight: bold;
  border-radius: 8px;
  padding: 1em 1.5em;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
  repeating-linear-gradient(
      -45deg,
      #a3a3a3 0,
      #a3a3a3 25%,
      transparent 0,
      transparent 50%
  )
  0 / 0.6em 0.6em;
  animation: ants 12s linear infinite;

  width: 100%;
}
@keyframes ants {
  to {
    background-position: 100% 100%;
  }
}
</style>
