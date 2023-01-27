<template>
  <div class="weather__tab tab-forecast">
    <div class="tab-forecast__city">{{ city }}</div>

    <ul class="tab-forecast__list">
      <forecast-tab-item
          v-for="forecastItem in forecast.list"
          :key="forecastItem.dt"
          :forecastItem="forecastItem"
      />
    </ul>
  </div>
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
      city: state => state.city,
    })
  }
}
</script>

<style lang="scss" scoped>
.tab-forecast {
  &__city {
    font-size: 24px;
    margin-bottom: 7px;
  }
  &__list {
    padding: 0;
    margin: 0;
  }
}
</style>