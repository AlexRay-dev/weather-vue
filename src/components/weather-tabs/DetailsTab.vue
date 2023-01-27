<template>
  <div v-if="isCurrentWeatherLoading" class="weather__tab-loading">Идёт загрузка...</div>
  <div
      v-else-if="currentWeather"
      class="weather__tab tab-details"
  >
    <div class="tab-details__city">{{this.currentWeather.name}}</div>

    <ul class="tab-details__list">
      <li class="tab-details__item">Temperature: {{Math.round(this.currentWeather.main.temp)}}°</li>
      <li class="tab-details__item">Feels like: {{Math.round(this.currentWeather.main.feels_like)}}°</li>
      <li class="tab-details__item">Weather: {{this.currentWeather.weather[0].main}}</li>
      <li class="tab-details__item">Sunrise: {{getTime(currentWeather.sys.sunrise)}}</li>
      <li class="tab-details__item">Sunset: {{getTime(currentWeather.sys.sunset)}}</li>
    </ul>
  </div>
  <div v-else class="weather__tab-error">Произошла ошибка при загрузке страницы</div>
</template>

<script>
import {mapState} from "vuex";
import {getTime} from "@/utils";

export default {
  name: 'details-tab',
  methods: {
    getTime
  },
  computed: {
    ...mapState({
      isCurrentWeatherLoading: state => state.isCurrentWeatherLoading,
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