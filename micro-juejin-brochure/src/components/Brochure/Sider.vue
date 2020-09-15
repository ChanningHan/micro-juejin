<template>
  <div class="Sider">
    <a
      href="https://juejin.im/post/6844904192625082382"
      target="_blank"
      class="header shadow_card"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAMAAAD/uJueAAAAulBMVEUAAAA+Xpw4Voc3VYg3VYg4VYc8V4o3Voc3VYg4Vok4Vok8Woc4VYc3VYc3VYc5Voo4VYc5Vog5VY5AVZU4VYc3VYg3VYc4Vog4Vog7WIk4Vog5V4g4Vof///83VYcra979/f4radnh5u6ntctcdJ00W51CXo/t8PXQ1+OAk7MtZ9EuZckvYrxrgaY2WJT3+PqSor5FYpDX3efL0+C+x9i5w9WwvNCHmbd6jq9geKBVb5lMZ5Q7WInr7vOydVF/AAAAHXRSTlMACPexzPMi2fB/eBHl3WZMYDMbDLqrmYlVGppnRCmvHJoAAAFOSURBVEjHtdRpb4JAGARgEBAK1KpVe+5wWHpYFO19/v+/1ddasqabQCeN84UY88SJw671l3Qdi4u91wEnDvYBhkgn4ALgOl1OU4DqdHOlFMB0ulYSgOmkNoTpZJC2TpoQnQzS0kkTopMmrZ0aids7NDs1E8CbDH51MonnO/1IE4n8lO5kBt8JQrsm+XIFeKNYdzJJNisLwB3+EKXSxzm2O5kkkdwuEA9rIsmBVDWTJCvg2pooebYQMQuEHJFuCCKSJAX6LCnhsGQGnyUZvH+QHRYrMd7Bn0xMSbww9GtJv/yVPMgj9v60PjHEQXZ84O1BvieuC+tY0Ou9CZouJessBuZ3hmi8+uwwAF7yJmImOurg4/mTIJKTU7kClxVBJN0xsJpWBJEMRnomTVpy7q5nokg9E0Mkvc1MBNEzEaSeiSIy06QDgtQzEUTPtP3pCx5TpfyEn6+dAAAAAElFTkSuQmCC"
      />
      <span>小册下线分销提现公告</span>
    </a>
    <div class="main shadow_card">
      <div class="main_slogan">
        <span>掘金小册是什么?</span>
        <span>一个小篇幅、高浓度、成体系、有收益的技术学习平台</span>
      </div>
      <div class="main_wechatQr">
        <span>关注公众号 领取优惠码</span>
        <div class="main_qr_img"></div>
      </div>
    </div>
    <div class="footer shadow_card">
      <a
        href="https://juejin.im/book/59e414a5518825541b03ce66"
        target="_blank"
        class="footer_item"
      >
        <img
          src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/author.c5d975e.png"
        />
        <span>成为作者</span>
      </a>
      <a
        href="https://juejin.im/topic/6824710202692993037?sort=newest"
        target="_blank"
        class="footer_item"
      >
        <img
          src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/feedback.1230fb5.png"
        />
        <span>建议反馈</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.Sider {
  width: 240px;
  margin-left: 24px;
  height: 600px;
  //background-color: #fff;
  transition: all 0.5s ease;
  .header {
    display: flex;
    align-items: center;
    padding: 16px;
    text-decoration: none;
    color: #2c3e50;
    background-color: #fff;
    img {
      height: 32px;
      width: 32px;
      margin-right: 8px;
    }
  }
  .main {
    background-color: #fff;
    text-align: left;
    margin: 12px 0;
    .main_slogan {
      padding: 16px;
      border-bottom: 1px solid #e3e3e3;
      span {
        display: block;
        color: #909090;
        &:first-child {
          font-size: 16px;
          color: #000;
          margin-bottom: 4px;
        }
      }
    }
    .main_wechatQr {
      padding: 12px 16px;
      span {
        font-size: 15px;
        color: #000;
        margin-bottom: 4px;
      }
      .main_qr_img {
        margin-top: 8px;
        height: 95px;
        background: url("https://s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat-qr.f1926e7.png")
          no-repeat center 0;
        background-size: contain;
      }
    }
  }
  .footer {
    background: #fff;
    display: flex;
    .footer_item {
      padding: 16px;
      display: flex;
      align-items: center;
      color: #909090;
      text-decoration: none;
      position: relative;
      &:hover {
        background: rgba(0, 127, 255, 0.03);
      }
      &:first-child:after {
        content: "";
        width: 1px;
        height: 42px;
        background: #e3e3e3;
        position: absolute;
        right: 0;
        top: 23px;
      }
      img {
        width: 39px;
        height: 28px;
        object-fit: cover;
        margin-bottom: 8px;
      }
      flex: 1;
      flex-direction: column;
    }
  }
}
</style>
