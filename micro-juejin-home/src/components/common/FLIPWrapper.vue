<template>
  <transition-group name="FLIP-wrapper" id="FLIP-wrapper">
    <slot>
      <h1 :key="-1" class="FLIP-wrapper-tip">🦄 EMPTY 😱😱😱😱😱😱😱</h1>
    </slot>
  </transition-group>
</template>

<script>
export default {
  name: "FLIPWrapper"
};
</script>

<!--注意这里的style不能用scoped，否则过渡效果会失效-->
<style>
.FLIP-wrapper-enter-active,
.FLIP-wrapper-leave-active {
  transition: all 0.5s ease;
}

.FLIP-wrapper-leave-active {
  position: absolute;
}

/*元素进入和离开前的相关样式*/
.FLIP-wrapper-enter, .FLIP-wrapper-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */
 {
  opacity: 0;
  transform: translateY(-100%) scale(0.1);
}

/*触发FLIP*/
.FLIP-wrapper-move {
  transition: transform 1s, opacity 2s;
}
</style>

<style scoped>
#FLIP-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

/*
  下面是slot默认内容的一些样式
  这部分不重要
*/
.FLIP-wrapper-tip {
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
