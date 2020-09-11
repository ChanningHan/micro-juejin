<template>
  <div class="ArticleCard">
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
    <div class="ArticleCard_photo">
      <img :src="article.photo" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  components: {}
};
</script>

<style scoped lang="scss">
.ArticleCard {
  //box-shadow: 0 2px 2px rgba(110, 110, 110, 0.55);
  border-bottom: 0.5px solid rgba(110, 110, 110, 0.1);
  padding: 16px 24px;
  //padding: 0px 24px;
  display: flex;
  height: 116px;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  .ArticleCard_main-wrapper {
    text-align: left;
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
      color: #2e3135;
      font-weight: 600;
      font-size: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
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
    width: 60px;
    height: 60px;
    background: #3a50d6;
    transition: all 1s ease;
    img {
      height: 100%;
      width: 60px;
      object-fit: cover;
      object-position: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .ArticleCard_photo {
    //width: 0;
    opacity: 0;
    transform: scale(0) translateX(-500px);
  }
}
</style>
