<template>
  <div class="BoilingCard">
    <div class="header">
      <img :src="boiling.author_user_info.avatar_large | toSmallAvatar" alt="avatar" />
      <div class="author_info">
        <div class="author_username">{{boiling.author_user_info.user_name}}</div>
        <div class="author_description">
          <span>{{boiling.author_user_info.job_title}}</span>
          <span>@ {{boiling.author_user_info.company}} ·</span>
          <span>{{boiling.msg_Info.ctime | pastTime}}</span>
        </div>
      </div>
      <a-button style="color:#6cbd45;">关注</a-button>
    </div>
    <!-- <div clsas="main"></div>
    <div clsas="footer"></div>-->
  </div>
</template>

<script>
export default {
  props: ["boiling"]
};
</script>

<style scoped lang="scss">
.BoilingCard {
  background-color: #fff;
  margin: 8px 0;
  .header {
    display: flex;
    height: 64px;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
    img {
      border-radius: 50%;
      height: 45px;
      width: 45px;
      object-fit: cover;
      margin-right: 16px;
    }
    .author_info {
      flex: 1;
      text-align: left;
      .author_username {
        font-weight: 600;
      }
      .author_description {
        font-size: 12px;
        color: #909090;
        span {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
