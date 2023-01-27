<template>
  <div class='weather'>
    <search-form/>

    <div class="weather__main">
      <weather-tabs/>
      <favorite-list/>
    </div>
  </div>
</template>

<script>

import SearchForm from "@/components/SearchForm";
import WeatherTabs from "@/components/weather-tabs/WeatherTabs";
import FavoriteList from "@/components/favorites/FavoriteList";

export default {
  name: 'App',
  components: {FavoriteList, WeatherTabs, SearchForm},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;

  ul {
    list-style: none;
  }
}

.weather {
  margin: 100px auto auto auto;
  max-width: 620px;
  width: 100%;
  font-size: 24px;
  background-color: #fff;
  border: 1px solid #000;
}

.weather__main {
  display: flex;
  height: 388px;
}

.weather__container {
}

@media (max-width: 500px) {
  .weather__main {
    flex-direction: column;
    height: auto;
  }
}
</style>
