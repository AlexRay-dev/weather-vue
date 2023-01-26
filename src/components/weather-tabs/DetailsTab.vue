<template>
  <div class="weather__tab tab-details">
    <div class="tab-details__city">{{this.currentWeather.name}}</div>

    <ul class="tab-details__list">
      <li class="tab-details__item">Temperature: {{this.currentWeather.main.temp}}</li>
      <li class="tab-details__item">Feels like: {{this.currentWeather.main.feels_like}}</li>
      <li class="tab-details__item">Weather: {{this.currentWeather.weather[0].main}}</li>
      <li class="tab-details__item">Sunrise: {{(new Date(this.currentWeather.sys.sunrise)).toLocaleTimeString()}}</li>
      <li class="tab-details__item">Sunset: {{getTime(this.currentWeather.main.sunset)}}</li>
      <li class="tab-details__item">Sunset: {{this.currentWeather.main.sunset}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {getTime} from "@/utils";

export default {
  name: 'details-tab',
  methods: {

  },
  setup () {
    return {
      getTime
    }
  },
  computed: {
    ...mapState({
      currentWeather: state => state.currentWeather
    })
  }
}
</script>

<style lang="scss" scoped>
.tab-details {
  &__city {
    font-size: 24px;
    margin-bottom: 42px;
  }

  &__list {
    padding: 0;
    margin: 0;
  }

  &__item {
    font-size: 24px;

    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
}
</style>