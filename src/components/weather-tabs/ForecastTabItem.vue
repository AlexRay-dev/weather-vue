<template>
  <li class="tab-forecast__item">
    <div class="tab-forecast__item-header">
      <div>January 25</div>
      <div>14:00</div>
    </div>
    <div class="tab-forecast__item-body">
      <div>
        <div>Temperature: -9°</div>
        <div>Feels like: -15°</div>
      </div>

      <div>
        <div>Clouds</div>
        <div>icon</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {}
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