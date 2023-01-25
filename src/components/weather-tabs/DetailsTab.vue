<template>
  <div class="weather__tab tab-details">
    <div class="tab-details__city">Perm</div>

    <ul class="tab-details__list">
      <li class="tab-details__item">Temperature: 9</li>
      <li class="tab-details__item">Feels like: 9</li>
      <li class="tab-details__item">Weather: 9</li>
      <li class="tab-details__item">Sunrise: 9</li>
      <li class="tab-details__item">Sunset: 9</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'details-tab'
}
</script>

<style lang="scss" scoped>
.tab-details {
  &__city {
    font-size: 24px;
    margin-bottom: 42px;
  }

  &__item {
    font-size: 24px;

    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
}
</style>