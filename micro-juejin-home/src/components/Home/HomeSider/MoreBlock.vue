<template>
  <div id="MoreBlock">
    <div class="more-list-row">
      <a href="https://juejin.im/about" target="_blank">关于</a>
      ·
      <a href="https://juejin.im/license" target="_blank" rel="">
        营业执照
      </a>
      ·
      <a href="https://juejin.im/links" target="_blank">友情链接</a>
    </div>
    <div class="more-list-row">
      <a href="https://juejin.im/terms" target="_blank">用户协议</a>
      ·
      <a href="https://juejin.im/privacy" target="_blank" rel="">
        隐私政策
      </a>
      ·
      <a href="https://juejin.im/book/5c90640c5188252d7941f5bb" target="_blank"
        >使用指南</a
      >
    </div>
    <div class="more-list-row">
      <a href="https://juejin.im/about" target="_blank">津ICP备15003202号-2</a>
    </div>
    <div class="more-list-row">
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
        target="_blank"
        >京公网安备11010802026719号</a
      >
    </div>
    <div class="more-list-row">
      <a href="javascript: void 0" target="_blank">©2020 掘金</a>
    </div>

    <a href="http://weibo.com/xitucircle" target="_blank">
      <img
        src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/weibo.0cd39f5.png"
        alt="微博"
        class="icon"
      />
    </a>
    <img
      src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat.ce329e6.png"
      alt="微信"
      class="icon"
      style="cursor: pointer"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#MoreBlock {
  text-align: left;
  .more-list-row {
    //justify-content: flex-start;
    text-align: left;
    a {
      color: #909090;
      font-size: 12px;
      &:hover {
        color: $primaryColor;
      }
    }
  }
  img {
    width: 25px;
    height: 25px;
    //margin-right: 12px;
    margin: 12px 12px 0 0;
  }
}
</style>
