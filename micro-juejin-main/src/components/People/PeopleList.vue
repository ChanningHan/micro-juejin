<template>
  <div>
    <a-button-group>
      <a-button
        @click="handleUnshift"
        icon="plus"
        style="border-radius: 20px 0 0 20px"
      >
        UNSHIFT
      </a-button>
      <a-button type="primary" @click="handleShot">
        SHOOT A RANDOM BIRD <icon-font type="icon-022-gun" /><icon-font
          type="icon-bird"
        />
      </a-button>
      <a-button @click="handleShuffle" style="border-radius: 0 25px  20px 0"
        >SHUFFLE <a-icon type="sync"
      /></a-button>
    </a-button-group>

    <div class="list_container">
      <FLIPWrapper>
        <div v-for="(people, index) in peopleList" :key="people.id">
          <a-card :hoverable="true" class="people_card">
            <img
              slot="cover"
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <template slot="actions" class="ant-card-actions">
              <a-tooltip title="打进人才库">
                <icon-font type="icon-022-gun" @click="handleShot(index)" />
              </a-tooltip>

              <a-tooltip title="GitHub URL">
                <a
                  href="https://github.com/channing-cli/channing-cli"
                  target="_blank"
                  ><icon-font type="icon-github"
                /></a>
              </a-tooltip>

              <a-tooltip title="掘金">
                <a
                  href="https://juejin.im/post/6867331101552181262"
                  target="_blank"
                  ><icon-font type="icon-juejin"
                /></a>
              </a-tooltip>

              <a-tooltip title="channing-cli NPM">
                <a
                  href="https://www.npmjs.com/package/channing-cli"
                  target="_blank"
                  ><icon-font type="icon-npm"
                /></a>
              </a-tooltip>
            </template>
            <a-card-meta :title="people.name">
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <div slot="description" class="description_box">
                <span>{{ people.position }}</span>
                <span>
                  {{
                    new Date(people.birth) | formatDate("YYYY年 M月 D日")
                  }}</span
                >
                <span class="description_address"> {{ people.address }}</span>
                <span>{{ people.constellation }}</span>
              </div>
            </a-card-meta>
          </a-card>
        </div>
      </FLIPWrapper>
    </div>
    <!--    <Loading v-if="loading"></Loading>-->
  </div>
</template>
<script>
import Vue from "vue";

import peopleMixin from "@/mixins/peopleMixin";
import Loading from "@/components/common/Loading";
import FLIPWrapper from "@comp/common/FLIPWrapper";

import { mapGetters, mapMutations } from "vuex";
import { SET_PEOPLE_LIST } from "@/store/modules/people/mutations-type";

import { List, Card, Icon } from "ant-design-vue";

import { shuffle } from "@/shared/util";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2043841_e21six2d0et.js"
});

Vue.use(List);
Vue.use(Card);

export default {
  mixins: [peopleMixin],

  async mounted() {
    this.loading = true;
    try {
      await this.getPeopleList();
    } finally {
      this.loading = false;
    }
  },

  computed: {
    ...mapGetters("people", ["peopleList"])
  },

  methods: {
    ...mapMutations("people", [SET_PEOPLE_LIST]),
    async getPeopleList() {
      this.loading = true;

      await this.$store.dispatch("people/getPeopleList"); // 错误情况已在拦截器处理

      this.loading = false;
    },

    handleShot(index) {
      if (this.peopleList && this.peopleList.length > 0) {
        const randomIndex =
          typeof index === "number"
            ? index
            : Math.floor(Math.random() * this.peopleList.length);
        if (randomIndex >= this.peopleList.length) {
          alert(randomIndex + " >= " + this.peopleList.length);
        }
        this.cachedList.push(this.peopleList[randomIndex]);
        this[SET_PEOPLE_LIST](
          this.peopleList
            .slice(0, randomIndex)
            .concat(this.peopleList.slice(randomIndex + 1))
        );
      } else {
        this.$message.warn("没人可以开除了");
      }
    },

    handleUnshift() {
      if (!this.cachedList.length) {
        this.$message.warn("人才库已经被掏空了");
        return;
      }

      this[SET_PEOPLE_LIST](
        this.cachedList.splice(0, 1).concat(this.peopleList)
      );
    },

    handleShuffle() {
      this[SET_PEOPLE_LIST](shuffle(this.peopleList));
    }
  },

  data() {
    return {
      // peopleList: [],
      test: false,
      loading: false,
      cachedList: [] //缓存被删除的元素
    };
  },

  components: {
    FLIPWrapper,
    IconFont,
    Loading
    // eslint-disable-next-line vue/no-unused-components
  }
};
</script>
<style lang="scss" scoped>
@keyframes testAni {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.list_container {
  margin: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .description_box {
    display: flex;
    flex-direction: column;
    .description_address {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .people_card {
    width: 300px;
    margin: 16px;
  }

  .list_wrapper {
  }
}
</style>
