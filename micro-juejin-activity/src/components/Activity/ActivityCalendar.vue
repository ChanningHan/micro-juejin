<template>
  <div class="ActivityCalendar_container">
    <a-calendar
      class="ActivityCalendar"
      :fullscreen="false"
      mode="month"
      v-model="date"
    >
      <div slot="headerRender" class="calendar_header">
        <a-button
          icon="caret-left"
          type="link"
          @click="handleChangeMonth(1)"
        ></a-button>
        <span> {{ date | formatDate("YYYY年MM月") }}</span>
        <a-button
          icon="caret-right"
          type="link"
          @click="handleChangeMonth(-1)"
        ></a-button>
      </div>
      <div slot="dateCellRender" slot-scope="value">
        <a-tooltip arrowPointAtCenter autoAdjustOverflow>
          <ul slot="title">
            <li v-for="item in getListData(value)" :key="item.content">
              {{ item.content }}
            </li>
          </ul>
          <ul class="events">
            <template v-for="item in getListData(value)">
              <li :key="item.content">
                <a-badge :status="item.type" style="margin: -2px"> </a-badge>
              </li>
            </template>
          </ul>
        </a-tooltip>
      </div>
    </a-calendar>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("zh_CN");
console.log(moment().toLocaleString());
export default {
  data() {
    return {
      date: moment()
    };
  },
  methods: {
    handleChangeMonth(time) {
      const newDate = moment(this.date);
      newDate.subtract(time, "months");
      this.date = newDate;
    },
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: "processing", content: "This is warning event." },
            { type: "processing", content: "This is usual event." }
          ];
          break;
        case 10:
          listData = [
            { type: "processing", content: "This is warning event." },
            { type: "processing", content: "This is usual event." },
            { type: "processing", content: "This is error event." }
          ];
          break;
        case 15:
          listData = [
            { type: "processing", content: "This is warning event" },
            {
              type: "processing",
              content: "This is very long usual event。。...."
            },
            { type: "processing", content: "This is error event 1." },
            { type: "processing", content: "This is error event 2." },
            { type: "processing", content: "This is error event 3." },
            { type: "processing", content: "This is error event 4." }
          ];
          break;
        default:
      }
      return listData || [];
    },

    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    }
  }
};
</script>

<style lang="scss">
.ActivityCalendar {
  .ant-fullcalendar table thead {
    tr {
      background: #007fff;
      color: #fff;
    }
  }

  .ant-fullcalendar-content {
    position: absolute;
    bottom: -27px;
    left: 2px;
    width: 100%;
  }
}
</style>
<style scoped lang="scss">
.ActivityCalendar_container {
  width: 476px;
  height: 100%;
  background: #fff;
  margin-left: 12px;
  transition: width 0.3s ease, transform 0.3s ease;

  .ActivityCalendar {
    //height: 251px;
    //display: flex;
    .calendar_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 48px;
      span {
        color: #007fff;
        font-weight: 600;
      }
    }
  }
}
</style>
<style scoped lang="scss">
.ActivityCalendar_container {
}

.events {
  list-style: none;
  //margin: 0;
  margin-top: 4px !important;
  padding: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .ant-fullcalendar-content {
    position: absolute;
    bottom: -27px;
    left: 2px;
    width: 100%;
  }
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  //text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
