<template>
  <a-layout class="BasicLayout_container">

    <transition name="head_fade">
      <a-layout-header class="BasicLayout_header" v-show="showHeader">
        <div class="BasicLayout_header_container">
          <transition
            name="menu_fade"
            mode="out-in"
            style="display: inline-block"
          >
            <div v-if="!isCollapsed" key="0" class="header_menu-wrapper">
              <img
                class="header_menu-img"
                src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
                alt="LOGO"
              />
              <a-menu
                theme="light"
                mode="horizontal"
                :selectedKeys="[activeRule]"
                class="header_menu"
              >
                <a-menu-item
                  v-for="app in apps"
                  :key="app.activeRule"
                  @click="handleRouterLink(app.activeRule)"
                >
                  <span class="header_menu-title">{{ app.$meta.title }}</span>
                </a-menu-item>
              </a-menu>
            </div>

            <div class="header_menu-wrapper" v-else key="1">
              <img
                class="header_menu-img"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDQ1IDM4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkp1ZWppbjwvdGl0bGU+CiAgICA8ZGVzYz5KdWVqaW4uaW08L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iMC4xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA1LjAwMDAwMCkiIGZpbGw9IiMwMDZDRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuMjkzNDMyOCwyLjU4MzEzMDQ5IEwxOC4wMTczOTg0LDAgTDE0LjU5NDYyNCwyLjY5ODg3ODAxIEwxNC40MTcyMDc3LDIuODQxODIzMDQgTDE4LjAxNzM5ODQsNS43MTI0MjQ4MyBMMjEuNjI4NjU3OCwyLjg0MTgyMzA0IEwyMS4yOTM0MzI4LDIuNTgzMTMwNDkgWiBNMzMuNzA3ODI4OSwxMi42MDA2Njc0IEwxOC4wMDc5MTA5LDI0Ljk4MDI3NiBMMi4zMTc0ODA0NCwxMi42MDgyNTc0IEwwLDE0LjQ2OTcwNTIgTDE4LjAwNzkxMDksMjguNjY5MDE2NyBMMzYuMDI1NjI1NiwxNC40NjIxMTUyIEwzMy43MDc4Mjg5LDEyLjYwMDY2NzQgWiBNMTguMDA3OTEwOSwxMy42MDUwNzc2IEw5LjQ2NDQxNTU0LDYuODY4NjM1MDUgTDcuMTQ2NjE4ODUsOC43MzAwODI5IEwxOC4wMDc5MTA5LDE3LjI5NDEzNDUgTDI4Ljg3ODM3NDIsOC43MjI0OTI5IEwyNi41NjA1Nzc1LDYuODYxMDQ1MDUgTDE4LjAwNzkxMDksMTMuNjA1MDc3NiBaIiBpZD0iRmlsbC0xLUNvcHkiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                alt="LOGO"
              />
              <a-dropdown>
                <a class="header_menu-title" @click="e => e.preventDefault()">
                  {{ currentTitle }} <a-icon type="down" />
                </a>
                <a-menu slot="overlay" selectable :selectedKeys="[activeRule]">
                  <a-menu-item
                    v-for="app in apps"
                    :key="app.activeRule"
                    @click="handleRouterLink(app.activeRule)"
                  >
                    <span>{{ app.$meta.title }}</span>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </transition>

          <div class="header_right-wrapper">
            <SearchInput :isCollapsed="isCollapsed"></SearchInput>
            <WriteButton :isCollapsed="isCollapsed"></WriteButton>
            <BellBadge></BellBadge>
            <UserAvatar></UserAvatar>
          </div>
        </div>
      </a-layout-header>
    </transition>


    <transition name="ease_fade">
      <NavBar
        v-if="showNavBar"
        :showHeader="showHeader"
        :activeRule="activeRule"
      ></NavBar>
    </transition>

    <a-layout-content
      class="BasicLayout_content"
      ref="BasicLayout_content"
      @scroll="handleScroll"
    >

      <Loading class="BasicLayout_loading" v-show="isLoading"></Loading>
      <transition name="subApp_fade">
        <div id="subApp" ref="subApp" v-show="!switchingApp">
          <!--          Micro App-->
          <router-view />
        </div>
      </transition>
    </a-layout-content>


    <a-layout-footer class="BasicLayout_footer">
      Created By Channing
    </a-layout-footer>
  </a-layout>
</template>
<script>
import Vue from "vue"
import { mapState } from "vuex";
import apps from "@/shared/microApps";
import { debounce, throttle } from "@/shared/util";
import SearchInput from "./BasicLayout/SearchInput";
import WriteButton from "@layouts/BasicLayout/WriteButton";
import BellBadge from "@layouts/BasicLayout/BellBadge";
import UserAvatar from "@layouts/BasicLayout/UserAvatar";
import NavBar from "@layouts/BasicLayout/NavBar";
import Loading from "@/components/common/Loading";
import { actions, state } from "@/shared/subRegister";
import Home from "@views/Home";

export default {
  components: {
    SearchInput,
    WriteButton,
    BellBadge,
    UserAvatar,
    NavBar,
    Loading
  },
  data() {
    return {
      isLoadingMicro: true,
      switchingApp: false,
      apps,
      activeRule: void 0,
      ruleMap: new Map(),
      screenWidth: document.body.clientWidth,
      // isCollapsed: false,
      scrollTop: 0,
      showHeader: true
    };
  },
  computed: {
    ...mapState(["isLoading"]),
    currentTitle() {
      return this.activeRule
        ? this.ruleMap.get(this.activeRule)
        : apps[0].$meta.title;
    },
    isCollapsed() {
      return this.screenWidth < 960;
    },
    showNavBar() {
      switch (this.activeRule) {
        case "/micro-juejin-home":
          return true;
        case "/micro-juejin-boiling":
          return this.isCollapsed;
        case "/micro-juejin-topic":
          return false;
        case "/micro-juejin-brochure":
          return true;
        case "/micro-juejin-activity":
          return true;
        default:
          return false;
      }
    }
  },
  methods: {
    handleRouterLink(activeRule) {
      if (this.activeRule === activeRule) {
        return;
      }
      this.activeRule = activeRule;
      this.switchingApp = true;
      setTimeout(async () => {
        await this.$router.push(activeRule);
        this.switchingApp = false;
      }, 500);
      // setTimeout(() => {
      // }, 500);
    },
    handleScroll(e) {
      const { clientHeight, scrollHeight, scrollTop } = e.target;
      if (scrollHeight - scrollTop === clientHeight) {
        state.scrollToBottom = true;
        state.isLoadingMicro = false;
        actions.setGlobalState(state);
      }
      this.scrollTop = e.target.scrollTop;
    }
  },
  created() {
    document.cookie = 'test_cookie="I am a cookie"';
    localStorage.setItem("test_token", "I am Channing");
    this.apps.forEach(app => {
      this.ruleMap.set(app.activeRule, app.$meta.title);
    });
    this.activeRule = "/" + this.$route.path.split("/")[1];
  },
  watch: {
    $route(newVal) {
      this.activeRule = "/" + newVal.path.split("/")[1];
    },
    scrollTop: debounce(
      function(newVal, oldVal) {
        this.showHeader = newVal - oldVal <= 0;
        if (newVal <= 0) {
          this.showHeader = true;
        }
      },
      200,
      false
    )
  },
  mounted() {
    window.onresize = throttle(
      () => {
        this.screenWidth = document.body.clientWidth;
      },
      500,
      false
    );

    // 监听微应用加载状态
    actions.onGlobalStateChange(state => {
      console.log("BasicLayout 监听到全局状态变化");
      console.log(state);
      new Vue(
          {render: h => h(Home)}
      ).$mount(state.testAttr.querySelector('#app'))
      this.isLoadingMicro = state.isLoadingMicro;
    });
  }
};
</script>

<style lang="scss" scoped>
.BasicLayout_container {
  //background: #42b983;
  transition: all 0.5s ease;
  //min-height: 100%;
  //max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  .BasicLayout_header {
    background: #fff;
    box-shadow: 0 3px 3px rgba(110, 110, 110, 0.15);
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 2;
    width: 100%;
    transform-origin: top;
    .BasicLayout_header_container {
      display: flex;
      width: 960px;
      justify-content: space-between;
    }

    .header_menu-wrapper {
      min-width: 130px;
      display: flex;

      .header_menu {
        line-height: 64px;
      }
      .header_menu-img {
        cursor: pointer;
        margin-right: 12px;
      }
    }
    .header_menu-title {
      font-size: 16px;
    }
    .header_right-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 520px;
    }
  }

  .BasicLayout_content {
    padding: 64px 0 0;
    margin: 0;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    .BasicLayout_loading {
      position: absolute;
      height: 36px;
      width: 150px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    #subApp {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .BasicLayout_footer {
    text-align: center;
    padding: 4px;
    background: rgba(0, 127, 255, 0.09);
    //box-shadow: 0 -12px 12px rgba(218, 231, 246);
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    z-index: 9999;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
@media screen and (max-width: 600px) {
  .BasicLayout_container {
    height: 100%;
  }
}
</style>

<style>
/*transition相关*/

.ease_fade-enter,
.ease_fade-leave-to {
  opacity: 0;
}

.menu_fade-enter,
.menu_fade-leave-to {
  opacity: 0;
  transform: perspective(500px) translateZ(100px);
}

.head_fade-enter,
.head_fade-leave-to {
  //transform: rotateX(90deg) perspective(100px) translateZ(50px);
  opacity: 0;
  transform: translateY(-63px);
}

.head_fade-enter-active,
.head_fade-leave-active {
  //transition: transform 0.5s cubic-bezier(0.65, -1.51, 0.41, 2.43), opacity 0.5s;
  transition: transform 0.5s ease, opacity 0.5s;
}

.menu_fade-enter-active,
.menu_fade-leave-active {
  transition: all 0.3s cubic-bezier(0.54, 0.05, 0.29, 2);
}

.subApp_fade-enter,
.subApp_fade-leave-to {
  opacity: 0;
  transform: perspective(500px) translateZ(-100px);
}
.subApp_fade-enter-active,
.subApp_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.54, 0.05, 0.29, 1);
  //transition: all 0.1s ease;
}
</style>
