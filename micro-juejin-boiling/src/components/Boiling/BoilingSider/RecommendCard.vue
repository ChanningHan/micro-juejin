<template>
  <div class="RecommendCard boiling_card">
    <div class="header">推荐沸点</div>
    <div class="recommend_list">
      <a
        href="https://juejin.im/pin/6871042321472421902"
        target="_blank"
        class="recommend_item"
      >
        <div class="recommend_item-content">
          <span class="content_text"
            >【沸点福利】16期：云音乐又来给大家送黑胶会员啦！😋</span
          >
          <span class="content_stat">38 赞 · 460评论</span>
        </div>
        <div class="recommend_item-img">
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a79feed5612f4a1b801440c3ec44f570~tplv-k3u1fbpfcp-zoom-1.image"
            alt=""
          />
        </div>
      </a>
      <a
        href="https://juejin.im/pin/6872178970512031757"
        target="_blank"
        class="recommend_item"
      >
        <div class="recommend_item-content">
          <span class="content_text"
            >有个异地四五年的男朋友，男朋友人很好，就是有些直男，最近又被朋友追，告诉他我有男朋友可是他还是不放弃，本来没什么感觉，可是总是能被他猜中我的小心思，最近感觉不一样了，我狠不下心不理他，好愧疚，还有些烦自己，该怎办😣</span
          >
          <span class="content_stat">1 赞 · 125评论</span>
        </div>
      </a>
      <a
        href="https://juejin.im/pin/6872231385176735757"
        target="_blank"
        class="recommend_item"
      >
        <div class="recommend_item-content">
          <span class="content_text"
            >我这周六穿了这套颜色的汉服去体育西，不知道周六那天有人去体育西玩了吗？</span
          >
          <span class="content_stat">11 赞 · 87评论</span>
        </div>
        <div class="recommend_item-img">
          <img
            src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64e874f0f28746f5a97ea850659ba1c7~tplv-k3u1fbpfcp-zoom-1.image"
            alt=""
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.RecommendCard {
  margin: 8px 0;
  .header {
    padding: 8px 16px;
    font-weight: 600;
    font-size: 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  .recommend_list {
    padding: 0px 16px;
    .recommend_item {
      color: #2c3e50;
      display: flex;
      padding: 8px 0px;
      border-bottom: 1px solid #eee;
      .recommend_item-content {
        text-align: left;
        font-size: 1em;
        height: 68px;
        //flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .content_text {
          height: 38px;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .content_stat {
          font-size: 12px;
          color: #909090;
        }
      }
      .recommend_item-img {
        height: 68px;
        min-width: 68px;
        max-width: 68px;
        margin-left: 8px;
        img {
          height: 100%;
          width: 100%;
          border-radius: 6px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
</style>
