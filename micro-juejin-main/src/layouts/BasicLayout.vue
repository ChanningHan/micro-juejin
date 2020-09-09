<template>
  <a-layout id="components-layout-demo-top" class="BasicLayout_container">
    <transition name="head_fade">
      <a-layout-header class="BasicLayout_header" v-show="showHeader">
        <transition name="menu_fade" mode="out-in">
          <div v-if="!isCollapsed" key="0">
            <a-menu
              theme="light"
              mode="horizontal"
              :selectedKeys="[activeRule]"
              class="BasicLayout_header-menu"
            >
              <a-menu-item
                v-for="app in apps"
                :key="app.activeRule"
                @click="handleRouterLink(app.activeRule)"
              >
                <span>{{ app.$meta.title }}</span>
              </a-menu-item>
            </a-menu>
          </div>

          <a-dropdown v-else key="1">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
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
        </transition>
      </a-layout-header>
    </transition>

    <a-layout-content
      class="BasicLayout_content"
      ref="BasicLayout_content"
      @scroll="handleScroll"
    >
      <transition name="subApp_fade">
        <div id="subApp" ref="subApp" v-show="!switchingApp">
          Micro App
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
import apps from "@/shared/microApps";
import { debounce, throttle } from "@/shared/util";

export default {
  data() {
    return {
      apps,
      activeRule: void 0,
      ruleMap: new Map(),
      screenWidth: document.body.clientWidth,
      isCollapsed: false,
      scrollTop: 0,
      showHeader: true,
      switchingApp: false
    };
  },
  computed: {
    currentTitle() {
      return this.activeRule
        ? this.ruleMap.get(this.activeRule)
        : apps[0].$meta.title;
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
    },
    handleScroll(e) {
      this.scrollTop = e.target.scrollTop;
    }
  },
  created() {
    this.apps.forEach(app => {
      this.ruleMap.set(app.activeRule, app.$meta.title);
    });
    this.activeRule = "/" + this.$route.path.split("/")[1];
  },
  watch: {
    $route(newVal) {
      this.activeRule = "/" + newVal.path.split("/")[1];
    },
    screenWidth(newVal) {
      this.isCollapsed = newVal < 800;
    },
    scrollTop: debounce(
      function(newVal, oldVal) {
        this.showHeader = newVal - oldVal <= 0;
      },
      100,
      false
    )
  },
  mounted() {
    this.isCollapsed = this.screenWidth < 800;
    window.onresize = throttle(
      () => {
        this.screenWidth = document.body.clientWidth;
      },
      800,
      false
    );
  }
};
</script>
<style></style>
<style lang="scss" scoped>
.BasicLayout_container {
  //background: #42b983;
  height: 100vh;

  .BasicLayout_header {
    background: #fff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    transform-origin: top;
    .BasicLayout_header-menu {
      line-height: 64px;
    }
  }

  .BasicLayout_content {
    padding: 64px 16px 16px;
    overflow: auto;
    text-align: center;
    #subApp {
      display: inline-block;
    }
  }

  .BasicLayout_footer {
    text-align: center;
  }
}

/*transition相关*/
.menu_fade-enter,
.menu_fade-leave-to {
  opacity: 0;
  //transform: translate3d(0px, -0px, 100px);
  transform: perspective(500px) translateZ(100px);
}

.head_fade-enter,
.head_fade-leave-to {
  transform: rotateX(90deg) perspective(100px) translateZ(50px);
}

.head_fade-enter-active,
.head_fade-leave-active,
.menu_fade-enter-active,
.menu_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.54, 0.05, 0.29, 2);
}

.subApp_fade-enter,
.subApp_fade-leave-to {
  opacity: 0;
  transform: perspective(500px) translateZ(-100px);
}
.subApp_fade-enter-active,
.subApp_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.54, 0.05, 0.29, 2);
}
</style>
