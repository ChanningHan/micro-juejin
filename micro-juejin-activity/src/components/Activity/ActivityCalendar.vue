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
      <div slot="dateCellRender" slot-scope="value" class="calendar_dateCell">
        <a-tooltip placement="bottomRight">
          <ul
            slot="title"
            v-if="
              statMap.get(value.format('YYYY-MM-DD')) &&
                statMap.get(value.format('YYYY-MM-DD')).length > 0
            "
            style="margin-left: -32px;"
            class="calendar_dateCell-eventList"
          >
            <li
              v-for="(item, index) in statMap.get(value.format('YYYY-MM-DD'))"
              :key="index"
              style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              class="dateCell-eventList-item"
            >
              <div
                style="background: #fff;height: 4px;width: 4px;border-radius: 50%;display: inline-block;margin-bottom: 2px;margin-right: 4px;"
              ></div>
              <span>
                {{ item.title }}
              </span>
            </li>
          </ul>
          <ul class="events">
            <template
              v-for="(item, index) in statMap.get(value.format('YYYY-MM-DD'))"
            >
              <li :key="index">
                <a-badge status="processing" style="margin: -2px"> </a-badge>
              </li>
            </template>
          </ul>
        </a-tooltip>
      </div>
    </a-calendar>
  </div>
</template>

<script>
import ActivityService from "@services/ActivityService";
import moment from "moment";
moment.locale("zh_CN");

const activityService = ActivityService.getInstance();
export default {
  data() {
    return {
      date: moment(),
      monthStat: []
    };
  },
  computed: {
    statMap() {
      console.log("change!");
      let statMap = new Map();
      this.monthStat.forEach(stat => {
        statMap.set(stat.date, stat.events);
      });
      return statMap;
    }
  },
  mounted() {
    this.getMonthStat();
  },
  methods: {
    async getMonthStat() {
      const firstDayOfMonth = new Date(this.date.format("YYYY-M") + "-1");
      const preDays = moment(firstDayOfMonth).day() - 1;
      const from_date = moment(firstDayOfMonth)
        .subtract(preDays, "days")
        .format("YYYY-MM-DD");
      const res = await activityService.getMonthStat(from_date);
      this.monthStat = res || [];
      console.log("res");
      console.log(res);
    },
    handleChangeMonth(time) {
      const newDate = moment(this.date);
      newDate.subtract(time, "months");
      this.date = newDate;
      this.getMonthStat();
    }
  }
};
</script>

<style>
.dateCell-eventList-item {
  background: #3a50d6 !important;
}
</style>

<style lang="scss">
.ActivityCalendar {
  .ant-fullcalendar table thead {
    tr {
      background: #007fff;
      color: #fff;
    }
  }
  .ant-fullcalendar-calendar-body {
    padding: 0;
    .ant-fullcalendar-selected-day .ant-fullcalendar-value {
      color: #fff;
      border-radius: 50%;
      background: #007fff;
    }
  }

  .ant-fullcalendar-content {
    position: absolute;
    z-index: 999;
    //bottom: -27px;
    left: 2px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    //border: 1px solid #2c3e50;
    .events {
      height: 40px;
      margin: 0 !important;
      padding-top: 18px;
      &:hover {
        background: rgba(0, 127, 255, 0.05);
      }
      //background: #00dbde;
      //background: rgba(0, 0, 0, 0.15);
      //margin-top: 18px !important;
    }
  }
}
</style>
<style scoped lang="scss">
.ActivityCalendar_container {
  width: 476px;
  height: 100%;
  overflow: hidden;
  background: #fff;
  margin-left: 12px;
  //transition: width 0.3s ease, transform 0.3s ease;

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
    .calendar_dateCell {
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
  width: 100%;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
