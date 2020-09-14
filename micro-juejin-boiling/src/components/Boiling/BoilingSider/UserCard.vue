<template>
  <a
    class="UserCard boiling_card"
    href="https://juejin.im/user/2101921963839678"
    target="_blank"
  >
    <div class="header">
      <div class="user_avatar">
        <img
          src="https://mirror-gold-cdn.xitu.io/16d46f01d783cbf7e0d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
          alt=""
        />
      </div>
      <div class="user_info">
        <div class="username">ChanningHyl🙌</div>
        <div class="job">前端工程师</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_item">
        <div>沸点</div>
        <span>0</span>
      </div>
      <div class="footer_item">
        <div>关注</div>
        <span>10</span>
      </div>
      <div class="footer_item">
        <div>关注者</div>
        <span>9999</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.UserCard {
  //height: 181px;
  display: block;
  color: #2c3e50;
  .header {
    display: flex;
    padding: 24px 16px;
    align-items: center;
    border-bottom: 1px solid #eee;
    .user_avatar {
      height: 62px;
      width: 62px;
      margin-right: 8px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
        box-shadow: -3px 3px 6px rgba(110, 110, 110, 0.15),
          3px 3px 6px rgba(110, 110, 110, 0.15);
      }
    }
    .user_info {
      text-align: left;
      .username {
        font-weight: 600;
        font-size: 16px;
        color: #000;
      }
      .job {
        color: #999;
        font-size: 13px;
      }
    }
  }
  .footer {
    display: flex;
    padding: 12px 0px;
    justify-content: space-between;
    .footer_item {
      flex: 1;
      border-right: 1px solid #e3e3e3;
      &:last-child {
        border: none;
      }
      div {
        color: #999;
      }
      span {
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
</style>
