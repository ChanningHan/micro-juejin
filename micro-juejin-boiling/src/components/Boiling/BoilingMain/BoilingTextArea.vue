<template>
  <div class="BoilingTextArea boiling_card">
    <div class="textarea_container">
      <a-textarea
        v-model="value"
        placeholder="告诉你个小秘密，发布沸点时添加合适话题会被更多掘友们看见哟~"
        :auto-size="{ minRows: 3 }"
        style="resize:none;padding-bottom:32px"
      />
      <div
        class="length_count"
        :style="{ color: alowLength >= 0 ? '#a3a3a3' : '#dc0816' }"
      >
        {{ alowLength }}
      </div>
    </div>
    <div class="bottom_container">
      <div class="tool_list">
        <div class="tool_item-box">
          <div
            style="width: 18px;height: 18px;background-repeat: no-repeat;background-size: cover;background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEgMWgyMHYyMEgxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMjdGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTExIDE4LjQzOGE3LjQzOCA3LjQzOCAwIDEgMCAwLTE0Ljg3NiA3LjQzOCA3LjQzOCAwIDAgMCAwIDE0Ljg3NnptMCAxLjA2MmE4LjUgOC41IDAgMSAxIDAtMTcgOC41IDguNSAwIDAgMSAwIDE3ek03LjgxMiA5LjkzN2ExLjA2MiAxLjA2MiAwIDEgMCAwLTIuMTI0IDEuMDYyIDEuMDYyIDAgMCAwIDAgMi4xMjV6bTYuMzc1IDBhMS4wNjMgMS4wNjMgMCAxIDAgMC0yLjEyNSAxLjA2MyAxLjA2MyAwIDAgMCAwIDIuMTI1ek0xMSAxNi4yMzJhMy4yNyAzLjI3IDAgMCAwIDMuMjctMy4yN0g3LjczYTMuMjcgMy4yNyAwIDAgMCAzLjI3IDMuMjd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=');"
          ></div>
          <span>表情</span>
        </div>
        <div class="tool_item-box">
          <div
            style="width: 18px;height: 18px;background-repeat: no-repeat;background-size: cover;background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTE1LjMzMyA5LjM5NGExLjM5NCAxLjM5NCAwIDEgMSAwLTIuNzg4IDEuMzk0IDEuMzk0IDAgMCAxIDAgMi43ODh6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xIDFoMjB2MjBIMXoiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMTYuNDMzIiBoZWlnaHQ9IjEzLjc2NyIgeD0iMi43ODMiIHk9IjQuMTE3IiBzdHJva2U9IiMwMjdGRkYiIHN0cm9rZS13aWR0aD0iLjkiIHJ4PSIxLjk0NyIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzAyN0ZGRiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuOSIgZD0iTTIuOTggMTQuOTlMNyAxMWw4LjAxMiA2Ljc1MiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzAyN0ZGRiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuOSIgZD0iTTkuNjY3IDEzLjQ5MUwxMi4zMzMgMTFsNi41ODMgNS41MTYiLz4KICAgICAgICA8dXNlIGZpbGw9IiMwMjdGRkYiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjMDI3RkZGIiBzdHJva2Utd2lkdGg9Ii45IiBkPSJNMTUuMzMzIDguOTQ0YS45NDQuOTQ0IDAgMSAwIDAtMS44ODguOTQ0Ljk0NCAwIDAgMCAwIDEuODg4eiIvPgogICAgPC9nPgo8L3N2Zz4K')"
          ></div>
          <span>图片</span>
        </div>
        <div class="tool_item-box">
          <div
            style="width: 18px;height: 18px;background-repeat: no-repeat;background-size: cover;background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDI3RkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik05LjgxNSA2LjQ0OGwxLjkzNi0xLjkzNmMxLjMzNy0xLjMzNiAzLjU4LTEuMjU5IDUuMDEzLjE3MyAxLjQzMiAxLjQzMiAxLjUxIDMuNjc2LjE3MyA1LjAxM2wtMS40NTIgMS40NTItLjk2OC45NjhjLTEuMzM3IDEuMzM2LTMuNTgxIDEuMjU5LTUuMDEzLS4xNzMiLz4KICAgICAgICA8cGF0aCBkPSJNMTEuMjY3IDE1LjM2N2wtMS45MzYgMS45MzZjLTEuMzM2IDEuMzM3LTMuNTggMS4yNi01LjAxMi0uMTczLTEuNDMyLTEuNDMyLTEuNTEtMy42NzYtLjE3My01LjAxMmwxLjQ1Mi0xLjQ1Mi45NjgtLjk2OGMxLjMzNi0xLjMzNyAzLjU4LTEuMjYgNS4wMTIuMTczIi8+CiAgICA8L2c+Cjwvc3ZnPgo=');"
          ></div>
          <span>链接</span>
        </div>
        <div class="tool_item-box">
          <div
            style="width: 18px;height: 18px;background-repeat: no-repeat;background-size: cover;background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxwYXRoIGZpbGw9IiMwMjdGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjg3MiAxNC4xNzRoLTMuOTdsLS44NTkgMy40NDZhLjUuNSAwIDEgMS0uOTctLjI0MmwuNzk5LTMuMjA0SDUuNWEuNS41IDAgMCAxLS41LS41di0uMDI4YS41LjUgMCAwIDEgLjUtLjVoMi42MjhsMS4wMjYtNC4xMTNINi41YS41LjUgMCAwIDEtLjUtLjV2LS4wMjlhLjUuNSAwIDAgMSAuNS0uNWgyLjkxbC45MDQtMy42MjRhLjUuNSAwIDEgMSAuOTcuMjQybC0uODQzIDMuMzgyaDMuOTdsLjkwMy0zLjYyNGEuNS41IDAgMSAxIC45Ny4yNDJsLS44NDMgMy4zODJIMTcuNWEuNS41IDAgMCAxIC41LjV2LjAyOWEuNS41IDAgMCAxLS41LjVoLTIuMzE2bC0xLjAyNSA0LjExM0gxNi41YS41LjUgMCAwIDEgLjUuNXYuMDI4YS41LjUgMCAwIDEtLjUuNWgtMi41OThsLS44NTkgMy40NDZhLjUuNSAwIDEgMS0uOTctLjI0MmwuNzk5LTMuMjA0em0uMjU2LTEuMDI4bDEuMDI2LTQuMTEzaC0zLjk3TDkuMTYgMTMuMTQ2aDMuOTd6Ii8+Cjwvc3ZnPgo=');"
          ></div>
          <span>话题</span>
        </div>
      </div>
      <div class="send_btn-box">
        <span>Ctrl or ⌘ + Enter</span>
        <a-button type="primary" :disabled="alowLength === 1000">发布</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  computed: {
    alowLength() {
      return 1000 - this.value.length;
    }
  }
};
</script>

<style scoped lang="scss">
.BoilingTextArea {
  background-color: #fff;
  padding: 16px;
  .textarea_container {
    position: relative;
    margin-bottom: 16px;
    .length_count {
      position: absolute;
      right: 16px;
      bottom: 8px;
      color: #a3a3a3;
    }
  }
  .bottom_container {
    display: flex;
    justify-content: space-between;
    .tool_list {
      display: flex;
      width: max-content;
      .tool_item-box {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 0 8px;
        // background-color: #aabbcc;
        color: #007fff;
        height: 28px;
        width: max-content;
      }
    }
    .send_btn-box {
      span {
        color: #b3b3b3;
        margin-right: 8px;
      }
    }
  }
}
</style>
