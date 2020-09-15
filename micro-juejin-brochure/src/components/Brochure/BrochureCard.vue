<template>
  <a
    :href="`https://juejin.im/book/${brochure.booklet_id}`"
    target="_blank"
    class="BrochureCard shadow_card"
  >
    <div class="img_wrapper">
      <img v-lazy="toCached(brochure.base_info.cover_img)" alt="cover" />
    </div>
    <div class="main_wrapper">
      <div class="main_header">
        <div class="header_tag" v-if="!brochure.base_info.is_finished">
          预售
        </div>
        <div class="header_title">{{ brochure.base_info.title }}</div>
      </div>
      <div class="main_summary">
        {{ brochure.base_info.summary }}
      </div>
      <div class="main_user">
        <img
          v-lazy="toCached(brochure.user_info.avatar_large)"
          alt="avatar"
          class="user_avatar"
        />
        <span class="user_name">{{ brochure.user_info.user_name }}</span>
        <span class="user_level"
          ><span style="margin-right: 2px;">Lv</span
          >{{ brochure.user_info.level }}</span
        >
        <span class="user_job">{{ brochure.user_info.job_title }}</span>
      </div>
      <div class="main_other">
        <span class="other_price">￥{{ brochure.base_info.price / 100 }}</span>
        <span class="other_sectionCount"
          >{{ brochure.base_info.section_count }}小节 ·
        </span>
        <span class="other_buyCount"
          >{{ brochure.base_info.buy_count }}人已购买</span
        >
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["brochure"],
  methods: {
    toCached: function(value) {
      return `https://images.weserv.nl/?url=${value}`;
    }
  }
};
</script>

<style scoped lang="scss">
.BrochureCard {
  text-decoration: none;
  box-sizing: border-box;
  width: 701px;
  height: 192px;
  background-color: #fff;
  padding: 1.5em;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  font-size: 16px;
  &:hover {
    background-color: rgba(58, 80, 214, 0.03);
    transform: scale(0.95);
  }
  .img_wrapper {
    height: 141px;
    width: 101px;
    min-width: 101px;
    box-shadow: 4px 4px 4px rgba(110, 110, 110, 0.15);
    margin-right: 24px;
    transform: scale(1);
    transition: transform 0.5s ease;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .main_wrapper {
    color: #000;
    flex: 1;
    text-align: left;
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.5s ease;
    .main_header {
      display: flex;
      align-items: center;
      .header_tag {
        font-size: 0.75em;
        background-color: #ed7b11;
        display: inline-block;
        color: #fff;
        min-width: 24px;
        padding: 2px 6px;
        border-radius: 2px;
        height: 16px;
        line-height: 16px;
        margin-right: 16px;
      }
      .header_title {
        //font-size: 21px;
        font-size: 1.31em;
        font-weight: 500;
        //white-space: nowrap;
        text-overflow: ellipsis;
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:hover {
          color: #007fff;
        }
      }
    }
    .main_summary {
      display: inline-block;
      max-width: 100%;
      font-size: 0.875em;
      color: #909090;
      margin: 8px 0 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .main_user {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .user_avatar {
        width: 1.6875em;
        height: 1.6875em;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
      .user_name {
        margin: 0 8px;
        font-size: 0.94em;
      }
      .user_level {
        background-color: #3a50d6;
        color: #fff;
        font-size: 12px;
        line-height: 12px;
        padding: 2px;
        font-weight: bold;
        border-radius: 2px;
        transform: scale(0.9);
        margin-right: 8px;
      }
      .user_job {
        color: #909090;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.875em;
      }
    }
    .main_other {
      color: #c0c0c0;
      .other_price {
        color: #ed7b11;
        font-weight: 600;
        font-size: 1.25em;
      }
      .other_sectionCount {
        margin-left: 8px;
        font-size: 0.875em;
      }
      .other_buyCount {
        font-size: 0.875em;
      }
    }
  }
}
</style>
