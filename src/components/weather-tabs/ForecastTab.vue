<template>
  <div class="weather__tab tab-forecast">
    <div class="tab-forecast__city">Perm</div>

    <ul class="tab-forecast__list">
      <forecast-tab-item/>
      <forecast-tab-item/>
      <forecast-tab-item/>
      <forecast-tab-item/>
    </ul>
  </div>
</template>

<script>
import ForecastTabItem from "@/components/weather-tabs/ForecastTabItem";

export default {
  name: 'forecast-tab',
  components: {ForecastTabItem}
}
</script>

<style lang="scss" scoped>
.tab-forecast {
  &__city {
    font-size: 24px;
    margin-bottom: 7px;
  }
}
</style>