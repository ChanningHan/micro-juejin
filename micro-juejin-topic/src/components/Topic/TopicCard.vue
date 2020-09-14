<template>
  <a class="TopicCard">
    <!--    {{ topic }}-->
    <a
      :href="`https://juejin.im/topic/${topic.topic_id}`"
      target="_blank"
      class="img_wrapper"
    >
      <img v-lazy="'https://images.weserv.nl/?url=' + topic.icon" alt="icon" />
    </a>
    <div class="content_wrapper">
      <a
        :href="`https://juejin.im/topic/${topic.topic_id}`"
        target="_blank"
        class="title"
        >{{ topic.title }}</a
      >
      <div class="info">
        {{ topic.follower_count + isFollowed }} 关注 ·
        {{ topic.msg_count }} 沸点
      </div>
      <div
        class="action"
        @click="isFollowed = !isFollowed"
        :style="{ color: isFollowed ? '#8a9aa9' : '#37c701' }"
      >
        {{ isFollowed ? "已关注" : "+ 关注" }}
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["topic"],
  data() {
    return {
      isFollowed: false
    };
  }
};
</script>

<style scoped lang="scss">
.TopicCard {
  a {
    text-decoration: none;
    color: #2c3e50;
  }
  display: flex;
  align-items: center;
  width: 262px;
  height: 117px;
  //background-color: #3a50d6;
  padding: 18px 14px;
  box-sizing: border-box;
  .img_wrapper {
    height: 72px;
    width: 72px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      //border-radius: 8px;
      object-fit: cover;
      object-position: center;
    }
  }
  .content_wrapper {
    margin-left: 16px;
    text-align: left;
    .title {
      font-weight: 800;
      font-size: 18px;
      &:hover {
        color: #007fff;
      }
    }
    .info {
      color: #8a9aa9;
    }
    .action {
      cursor: pointer;
      display: inline-block;
    }
  }
}
</style>
