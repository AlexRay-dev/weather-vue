<template>
  <li class="tab-forecast__item">
    <div class="tab-forecast__item-header">
      <div>{{getDate(forecastItem.dt)}}</div>
      <div>{{getTime(forecastItem.dt)}}</div>
    </div>
    <div class="tab-forecast__item-body">
      <div>
        <div>Temperature: {{Math.round(forecastItem.main.temp)}}°</div>
        <div>Feels like: {{Math.round(forecastItem.main.feels_like)}}°</div>
      </div>

      <div>
        <div>{{ forecastItem.weather[0].main }}</div>
        <img
            class='tab-forecast__item-img'
            :src="API.IMG + forecastItem.weather[0].icon + '@4x.png'"
        />
      </div>
    </div>
  </li>
</template>

<script>
import {getDate, getTime} from "@/utils";
import {API} from "@/consts/api";

export default {
  props: {
    forecastItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    getDate,
    getTime
  },
}
</script>

<style lang="scss" scoped>
.tab-forecast__item {
  padding: 8px 10px;
  border: 1px solid #000000;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 9px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &-body {
    display: flex;
    justify-content: space-between;
  }
}
</style>