<template>
  <div
    id="NavBar"
    :style="{
      top: showHeader ? '63px' : '0'
    }"
  >
    <div class="NavBar_container">
      <div class="nav_list">
        <div
          v-for="tag in navList"
          :key="tag"
          class="nav_list-item"
          :style="{ color: activeTag === tag ? '#007FFF' : '#71777c' }"
          @click="handleSelect(tag)"
        >
          {{ tag }}
        </div>
        <a-dropdown v-if="activeRule === '/micro-juejin-activity'">
          <span style="cursor:pointer;margin-left: 8px">
            其他 <a-icon type="down" />
          </span>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="city in cities"
              :key="city.city_alias"
              @click="handleSelect(city.city_name)"
            >
              <span>{{ city.city_name }}</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <a
        href="https://juejin.im/subscribe/subscribed"
        target="_blank"
        class="action_box"
        v-if="activeRule === '/micro-juejin-home'"
      >
        <a-button type="link" class="link_btn">标签管理</a-button>
      </a>
      <a
        href="https://wj.qq.com/s2/6553260/b43b/"
        target="_blank"
        class="action_box"
        v-else-if="activeRule === '/micro-juejin-activity'"
      >
        <a-button type="link" class="link_btn">
          <img
            alt="icon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDMwIDI1Ij4KICAgIDxnIGZpbGw9IiM3Mjc3N0IiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTguMzIgNy4xMTFoMTQuMzZjLjcyOSAwIDEuMzIuNTkxIDEuMzIgMS4zMlYxOC42OEExLjMyIDEuMzIgMCAwIDEgMjIuNjggMjBIOC4zMkExLjMyIDEuMzIgMCAwIDEgNyAxOC42OFY4LjQzMWMwLS43MjkuNTkxLTEuMzIgMS4zMi0xLjMyem0uMDIyIDMuNTU2di44ODloMTQuNzYzdi0uODlIOC4zNDJ6bTIuNjg0IDIuMjIydjMuNTU1aC44OTVWMTIuODloLS44OTV6bTguMDUzIDB2My41NTVoLjg5NVYxMi44OWgtLjg5NXoiLz4KICAgICAgICA8cGF0aCBkPSJNMjAuODY4IDguNDQ0VjUuMzJBMS4zMiAxLjMyIDAgMCAwIDE5LjU0OCA0aC04LjA5NmExLjMyIDEuMzIgMCAwIDAtMS4zMiAxLjMydjMuMTI0aC44OTRWNC44OWg4Ljk0OHYzLjU1NWguODk0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
          />
          活动合作</a-button
        >
      </a>
    </div>
  </div>
</template>

<script>
import { state, actions } from "@/shared/subRegister";

export default {
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    activeRule: {
      type: String,
      default: ""
    }
  },
  computed: {
    navList() {
      return this.navListMap[this.activeRule] || [];
    }
  },
  created() {
    this.activeTag = this.navList && this.navList[0];
  },
  watch: {
    activeRule() {
      this.activeTag = this.navList && this.navList[0];
    }
  },
  methods: {
    handleSelect(tag) {
      this.activeTag = tag;
      const tempState = {
        ...state,
        city: tag,
        isLoadingMicro: false
      };
      tempState.city = tag;
      actions.setGlobalState(tempState);
    }
  },
  data() {
    return {
      activeTag: "",
      navListMap: {
        "/micro-juejin-home": [
          "推荐",
          "关注",
          "后端",
          "前端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        "/micro-juejin-boiling": [
          "推荐",
          "热门",
          "关注",
          "上班摸鱼",
          "内推招聘",
          "一图胜千言",
          "今天学到了",
          "每天一道算法题",
          "开发工具推荐",
          "树洞一下"
        ],
        "/micro-juejin-brochure": [
          "全部",
          "后端",
          "前端",
          "Android",
          "iOS",
          "人工智能",
          "开发工具",
          "代码人生",
          "阅读"
        ],
        "/micro-juejin-activity": ["热门活动", "北京", "广州", "深圳", "杭州"]
      },
      cities: [
        { city_alias: "changsha", city_name: "长沙" },
        { city_alias: "chengdu", city_name: "成都" },
        { city_alias: "chongqing", city_name: "重庆" },
        { city_alias: "fuzhou", city_name: "福州" },
        { city_alias: "haiwai", city_name: "海外" },
        { city_alias: "hefei", city_name: "合肥" },
        { city_alias: "nanjing", city_name: "南京" },
        { city_alias: "qingdao", city_name: "青岛" },
        { city_alias: "quanguo", city_name: "全国" },
        { city_alias: "shenyang", city_name: "沈阳" },
        { city_alias: "shijiazhuang", city_name: "石家庄" },
        { city_alias: "suzhou", city_name: "苏州" },
        { city_alias: "taiyuan", city_name: "太原" },
        { city_alias: "tianjin", city_name: "天津" },
        { city_alias: "wuhan", city_name: "武汉" },
        { city_alias: "xiamen", city_name: "厦门" },
        { city_alias: "xian", city_name: "西安" },
        { city_alias: "xianggang", city_name: "香港" },
        { city_alias: "zhengzhou", city_name: "郑州" },
        { city_alias: "zhuhai", city_name: "珠海" },
        { city_alias: "buxian", city_name: "不限" }
      ]
    };
  }
};
</script>

<style lang="scss">
#NavBar {
  //transition: top 0.5s cubic-bezier(0.65, -1.51, 0.41, 2.43), opacity 0.5s;
  transition: top 0.5s ease, opacity 0.5s ease;
  background: #fff;
  width: 100vw;
  border-top: 1px solid #e3e3e3;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
  //height: 46px;
  line-height: 46px;
  position: fixed;
  z-index: 1;
  //top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  .NavBar_container {
    display: flex;
    width: 960px;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    .nav_list {
      display: flex;
      min-width: max-content;
      .nav_list-item {
        padding: 0 16px;
        font-size: 14px;
        color: #71777c;
        cursor: pointer;
        min-width: max-content;
        &:hover {
          color: #007fff;
        }
      }
    }
    .action_box {
      cursor: pointer;
      color: #2c3e50;
      .link_btn {
        color: #2c3e50;
        &:hover {
          color: #007fff;
        }
      }
      // min-width: 100px;
      // background-color: #dc0816;
    }
  }
}
</style>
