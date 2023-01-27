<template>
  <div class="weather__tabs">
    <component :is="currentTab.component"></component>

    <div class="tab__buttons">
      <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="['tab__button', { 'tab__button--active': currentTab === tab }]"
          @click="currentTab = tab"
      >
        {{ tab.name }}
      </button>
    </div>

  </div>
</template>

<script>
import NowTab from "@/components/weather-tabs/NowTab";
import DetailsTab from "@/components/weather-tabs/DetailsTab";
import ForecastTab from "@/components/weather-tabs/ForecastTab";

const tabs = [
  {name: 'Now', component: NowTab},
  {name: 'Details', component: DetailsTab},
  {name: 'Forecast', component: ForecastTab},
]

export default {
  name: 'weather-tabs',
  data() {
    return {
      tabs,
      currentTab: tabs[0],
    }
  },
}
</script>

<style lang="scss">
.weather__tabs {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  border-right: 1px solid #000;
  height: 100%;
}

.tab__buttons {
  display: flex;
  align-self: flex-end;
}

.tab__button {
  display: inline-block;
  width: 100px;
  height: 44px;
  padding: 12px 0;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
  line-height: 21px;
  user-select: none;
  cursor: pointer;
  background-color: inherit;
  border: none;
  border-top: 1px solid #000;

  &:not(:last-of-type) {
    border-right: 1px solid #000;
  }

  &--active {
    color: #fff;
    background-color: #000;
  }
}

.weather__tab {
  height: 100%;
  padding: 33px 18px 18px 18px;
  overflow-y: auto;

  &-loading,
  &-error {
    height: 100%;
    padding: 33px 18px 18px 18px;
  }
}

@media (max-width: 500px) {
  .weather__tabs {
    max-width: 100%;
  }
  .tab__buttons {
    width: 100%;
    border-bottom: 1px solid black;
  }
  .tab__button {
    width: 100%;
  }
}
</style>