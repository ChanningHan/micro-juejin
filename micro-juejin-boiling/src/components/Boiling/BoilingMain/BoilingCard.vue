<template>
  <div class="BoilingCard boiling_card">
    <div class="header">
      <img v-lazy="smallAvatar" alt="avatar" />
      <div class="author_info">
        <div class="author_username">
          {{ boiling.author_user_info.user_name }}
        </div>
        <div class="author_description">
          <span>{{ boiling.author_user_info.job_title }}</span>
          <span>@ {{ boiling.author_user_info.company }} ·</span>
          <span>{{ boiling.msg_Info.ctime | pastTime }}</span>
        </div>
      </div>
      <a-button style="color:#6cbd45;border-color: #6cbd45">关注</a-button>
    </div>
    <div class="main">
      <div class="content_wrapper" ref="contentWrapper" style="height: 88px">
        <p class="content" ref="content">
          <span>{{ boiling.msg_Info.content }}</span>
        </p>
      </div>
      <a-button
        type="link"
        v-if="isOverSize"
        style="padding-left: 0"
        @click="handleCollapsed"
        >{{ isCollapsed ? "展开" : "收起" }}</a-button
      >
      <div class="img_list">
        <a
          :href="pic"
          target="_blank"
          v-for="pic in boiling.msg_Info.pic_list"
          :key="pic"
        >
          <img
            alt=""
            :src="pic"
            :style="{
              width: boiling.msg_Info.pic_list.length > 1 ? '111px' : '200px',
              height: boiling.msg_Info.pic_list.length > 1 ? '111px' : '200px'
            }"
          />
        </a>
      </div>
      <a-button
        shape="round"
        size="small"
        style="color: #007fff;border-color: #007fff;margin-bottom: 12px"
        v-if="boiling.topic.title"
        ><a
          :href="`https://juejin.im/topic/${boiling.topic.topic_id}`"
          target="_blank"
          >{{ boiling.topic.title }}</a
        ></a-button
      >
    </div>
    <div class="footer">
      <div class="footer_item">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h20v20H0z"></path>
            <path
              stroke="#8A93A0"
              stroke-linejoin="round"
              d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"
            ></path>
          </g>
        </svg>
        <span>{{ boiling.msg_Info.digg_count || "赞" }}</span>
      </div>
      <div class="footer_item">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h20v20H0z"></path>
            <path
              stroke="#8A93A0"
              stroke-linejoin="round"
              d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"
            ></path>
          </g>
        </svg>
        <span>{{ boiling.msg_Info.comment_count || "评论" }}</span>
      </div>
      <div class="footer_item">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h20v20H0z"></path>
            <g stroke="#8A93A0" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M10 2.5v10M13.5 7h2.001c.552 0 .999.437.999.96v8.621c0 1.919-1.447 1.919-1.999 1.919H5.5c-.552 0-1.999 0-1.999-1.919v-8.62c0-.53.443-.961.999-.961H6.5M7.519 4.538L10.019 2l2.5 2.513"
              ></path>
            </g>
          </g>
        </svg>
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["boiling"],
  mounted() {
    if (this.$refs.content.clientHeight > 88) {
      this.isOverSize = true;
      this.isCollapsed = true;
    }
  },
  data() {
    return {
      isCollapsed: false,
      isOverSize: false
    };
  },
  computed: {
    smallAvatar() {
      const val = this.boiling.author_user_info.avatar_large;
      return (
        "https://images.weserv.nl/?url=" +
        val.replace(
          /\?.*/g,
          "?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
        )
      );
    }
  },
  methods: {
    handleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
      console.log(this.$refs.content.clientHeight);
      this.$refs.contentWrapper.style.height = this.isCollapsed
        ? "88px"
        : `${this.$refs.content.clientHeight}px`;
    },
    test() {
      console.log(this.$refs.content.clientHeight);
    }
  }
};
</script>

<style scoped lang="scss">
.BoilingCard {
  background-color: #fff;
  margin: 8px 0;

  .header {
    display: flex;
    height: 64px;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
    img {
      border-radius: 50%;
      height: 45px;
      width: 45px;
      object-fit: cover;
      margin-right: 16px;
      cursor: pointer;
    }
    .author_info {
      flex: 1;
      text-align: left;
      .author_username {
        font-weight: 600;
      }
      .author_description {
        font-size: 12px;
        color: #909090;
        span {
          margin-right: 4px;
        }
      }
    }
  }
  .main {
    text-align: left;
    padding: 0 16px 0 76px;
    //display: flex;
    //flex-direction: column;
    .content_wrapper {
      height: 88px;
      overflow: hidden;
      transition: all 0.3s ease;
      .content {
        white-space: pre-wrap;
        text-align: left;
        font-size: 15px;
      }
    }

    .img_list {
      //padding-left: 8px;
      display: flex;
      padding-left: -16px;
      flex-wrap: wrap;
      img {
        cursor: pointer;
        //height: 200px;
        //width: 200px;
        object-fit: cover;
        margin: 8px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .footer {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 8px 0;
    .footer_item {
      flex: 1;
      color: #909090;
      display: flex;
      justify-content: center;
      border-right: 1px solid #ddd;
      cursor: pointer;
      position: relative;
      transform: scale(0.9);
      &:hover {
        &:after {
          content: "";
          display: block;
          background: rgba(255, 255, 255, 0.25);
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
      &:last-child {
        border: none;
      }
      span {
        margin-left: 4px;
      }
    }
  }
}
</style>
