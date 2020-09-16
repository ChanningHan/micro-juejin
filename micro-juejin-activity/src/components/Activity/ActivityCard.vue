<template>
  <a :href="activity.url" target="_blank" class="ActivityCard shadow_card">
    <header>
      <img
        v-lazy="`https://images.weserv.nl/?url=${activity.screenshot}`"
        alt="cover"
      />
    </header>
    <main>
      <span class="title">
        {{ activity.title }}啊啊啊啊啊案发生的放红烧豆腐安徽省地方接口邯郸发的
      </span>
    </main>
    <footer>
      <div class="info_container">
        <div class="date_wrapper">
          <a-icon type="calendar" />
          <span>{{ activity.event_start_time | formatStartDate }}</span>
        </div>
        <div class="position_wrapper">
          <a-icon type="environment" />
          <span>{{ activity.city }}</span>
        </div>
      </div>
      <div
        class="info_btn"
        :style="{ backgroundColor: isPast ? '#bbb' : '#007fff' }"
      >
        {{ isPast ? "活动详情" : "报名参加" }}
      </div>
    </footer>
  </a>
</template>

<script>
export default {
  props: ["activity"],
  computed: {
    isPast() {
      return Date.now() - this.activity.event_end_time * 1000 > 0;
    }
  }
};
</script>

<style scoped lang="scss">
.ActivityCard {
  margin: 8px 0;
  background: #fff;
  height: 264px;
  box-sizing: border-box;
  width: calc(25% - 11px);
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  color: #2c3e50;
  &:visited {
    color: #909090;
  }
  &:hover {
    //transform: perspective(500px) translateZ(24px);
    transform: scale(1.05);
  }
  header {
    height: 52%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  main {
    text-align: left;
    padding: 16px;
    .title {
      font-weight: bold;
      overflow: hidden;
      word-break: break-all;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  footer {
    padding: 0 16px 16px;
    display: flex;
    text-align: left;
    justify-content: space-between;
    font-size: 12px;
    align-items: flex-end;
    span {
      margin-left: 8px;
    }
    .date_wrapper {
      //display: flex;
      margin-bottom: 4px;
    }
    .info_btn {
      padding: 4px 24px;
      border-radius: 40px;
      color: #fff;
    }
  }
}
</style>
