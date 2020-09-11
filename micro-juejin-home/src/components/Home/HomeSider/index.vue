<template>
  <transition name="head_fade">
    <div id="HomeSider_container">
      <ADCard
        :href="'https://yunqi.aliyun.com/2020/hol?utm_content=g_1000178162'"
        :img="
          'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63631b8ee0494096a4a8ed1b2e88bbb4~tplv-k3u1fbpfcp-zoom-1.image'
        "
      ></ADCard>
      <ADCard
        :href="'https://juejin.im/post/6869996232249442311'"
        :img="
          'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84f2f5347c464ffe96aab061ebe2cebb~tplv-k3u1fbpfcp-zoom-1.image'
        "
      ></ADCard>
      <DownloadCard></DownloadCard>
      <RankList></RankList>
      <LinkList></LinkList>
      <MoreBlock></MoreBlock>
    </div>
  </transition>
</template>

<script>
import ADCard from "@comp/Home/HomeSider/ADCard";
import DownloadCard from "@comp/Home/HomeSider/DownloadCard";
import RankList from "@comp/Home/HomeSider/RankList";
import LinkList from "@comp/Home/HomeSider/LinkList";
import MoreBlock from "@comp/Home/HomeSider/MoreBlock";
export default {
  components: {
    ADCard,
    DownloadCard,
    RankList,
    LinkList,
    MoreBlock
  }
};
</script>

<style scoped lang="scss">
#HomeSider_container {
  height: 1000px;
  width: 240px;
  margin: 0 16px;
  //margin-left: 16px;
  transition: all 1s;
  transform: scale(1);
}
@media screen and (max-width: 900px) {
  #HomeSider_container {
    width: 0;
    opacity: 0;
    margin: 0;
    transform: scale(0);
  }
}
</style>
