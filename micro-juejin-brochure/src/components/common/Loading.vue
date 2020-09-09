<template>
  <div class="loading_container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>
<script>
export default {
  computed: {},
  watch: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
  props: {}
};
</script>
<style lang="scss" scoped>
.loading_container {
  $colors: #7ef9ff, #89cff0, #4aa2f4, #3b6ee6, #3a50d6;
  //$colors: #00dbde, #3aa9e6, #5d8bea, #7c6fee, #c034f7, #fb1afe;
  display: flex;
  animation-delay: 1s;
  justify-content: center;

  .dot {
    position: relative;
    width: 14px;
    height: 14px;
    line-height: 14px;
    margin: 8px 6px 0;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>
