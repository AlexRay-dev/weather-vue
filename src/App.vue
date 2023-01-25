<template>
  <div class="app">
    <div class='weather'>
      <div class='weather__container'>
        <search-form/>
        <div class="weather__main">
          <weather-tabs/>
          <favorite-list/>
        </div>
      </div>
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
  margin-top: 60px;

  ul {
    list-style: none;
  }
}

.weather {
  width: 621px;
  margin: 50px auto auto auto;
  padding: 10px;
  font-size: 24px;
  line-height: 28px;
  background-color: #fff;
}

.weather__main {
  display: flex;
  height: 388px;
}

.weather__container {
  border: 1px solid #000;
}
</style>
