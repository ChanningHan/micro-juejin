<template>
  <a
    class="ArticleCard"
    :href="`https://juejin.im/post/${article.id}`"
    target="_blank"
  >
    <div class="ArticleCard_main-wrapper">
      <div class="ArticleCard_head">
        <span>{{ article.author }}</span>
        <span>{{ article.date }}</span>
        <span>{{ article.tag }}</span>
      </div>
      <div class="ArticleCard_title">
        <span>{{ article.title }}</span>
      </div>
      <a-button-group class="ArticleCard_action">
        <a-button size="small" class="ArticleCard_action-like">
          <i
            class="iconfont icondianzan"
            style="font-size: 12px;margin-right: 3px;"
          ></i>
          <span>{{ article.like }}</span>
        </a-button>
        <a-button size="small" class="ArticleCard_action-comment">
          <i
            class="iconfont iconcomment_fill"
            style="font-size: 12px;margin-right: 3px;transform: scale(0.8) translateY(1px)"
          ></i>
          {{ article.comment }}</a-button
        >
      </a-button-group>
    </div>
    <div class="ArticleCard_photo" v-if="article.photo">
      <img :src="article.photo" alt="" />
    </div>
  </a>
</template>

<script>
export default {
  props: ["article"],
  components: {}
};
</script>

<style scoped lang="scss">
.ArticleCard {
  border-bottom: 0.5px solid rgba(110, 110, 110, 0.1);
  padding: 16px 24px;
  display: flex;
  height: 116px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background: rgba(0, 127, 255, 0.1);
    border-bottom: 1.5px solid rgba(110, 110, 110, 0.1);
    box-shadow: inset 6px 6px 6px rgba(110, 110, 110, 0.15);
    transform: perspective(500px) translateZ(-40px);
  }
  .ArticleCard_main-wrapper {
    text-align: left;
    flex: 1;
    margin: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .ArticleCard_head {
      color: #b2bac2;
      font-size: 12px;
      span {
        position: relative;
        margin-right: 12px;

        &:after {
          content: "";
          display: block;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          position: absolute;
          background: #b2bac2;
          right: -6px;
          top: 6px;
        }

        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
    .ArticleCard_title {
      max-width: 576px;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: #2e3135;
        font-weight: 600;
        font-size: 18px;
      }
    }
    .ArticleCard_action {
      display: flex;
      margin-top: 8px;
      .ArticleCard_action-comment,
      .ArticleCard_action-like {
        display: flex;
        align-items: center;
        color: #909090;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }

  .ArticleCard_photo {
    min-width: 60px;
    width: 60px;
    height: 60px;
    transition: all 1s ease;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .ArticleCard_photo {
    opacity: 0;
    position: absolute;
    right: 0;
    transform: scale(0) translateX(-500px);
  }
  .ArticleCard_main-wrapper {
    max-width: calc(100vw - 48px) !important;
  }
}
@media screen and (max-width: 970px){
  .ArticleCard_main-wrapper {
    max-width: calc(100vw - 120px);
  }
}
</style>
