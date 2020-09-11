<template>
  <a href="https://juejin.im/app" target="_blank">
    <div class="DownloadCard">
      <img
        src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/app-install.6226a3b.png"
        alt=""
      />
      <div class="DownloadCard_content">
        <span>下载掘金客户端</span>
        <span>一个帮助开发者成长的社区</span>
      </div>
    </div></a
  >
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.DownloadCard {
  width: 240px;
  height: 81px;
  background: #fff;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  padding: 16px;
  color: #2c3e50;
  img {
    height: 50px;
    width: 50px;
    margin-right: 4px;
  }
  .DownloadCard_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      text-align: left;
      &:first-child {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 6px;
      }
      &:last-child {
        font-size: 12px;
        color: #909090;
      }
    }
  }
}
</style>
