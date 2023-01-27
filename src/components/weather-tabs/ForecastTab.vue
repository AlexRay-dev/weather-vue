<template>
  <div v-if="isCurrentWeatherLoading" class="weather__tab-loading">Идёт загрузка...</div>
  <div
      v-else-if="forecast"
      class="weather__tab tab-forecast"
  >
    <div class="tab-forecast__city">{{ forecast.city.name }}</div>

    <ul class="tab-forecast__list">
      <forecast-tab-item
          v-for="forecastItem in forecast.list"
          :key="forecastItem.dt"
          :forecastItem="forecastItem"
      />
    </ul>
  </div>
  <div v-else class="weather__tab-error">Произошла ошибка при загрузке страницы</div>
</template>

<script>
import ForecastTabItem from "@/components/weather-tabs/ForecastTabItem";
import {mapState} from "vuex";

export default {
  name: 'forecast-tab',
  components: {ForecastTabItem},
  computed: {
    ...mapState({
      forecast: state => state.forecast,
    })
  }
}
</script>

<style lang="scss" scoped>
.tab-forecast {
  &__city {
    font-size: 24px;
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  &__list {
    padding: 0;
    margin: 0;
  }
}
</style>