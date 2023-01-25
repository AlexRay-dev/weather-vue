<template>
  <div class="app">
    <div class='weather'>
      <div class='weather__container'>
        <search-form/>
        <div class="weather__main">
          <weather-tabs/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SearchForm from "@/components/SearchForm";
import WeatherTabs from "@/components/weather-tabs/WeatherTabs";

export default {
  name: 'App',
  components: {WeatherTabs, SearchForm},
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
    padding: 0;
    margin: 0;
  }
}
.weather {
  width: 621px;
  /*height: 462px;*/
  margin: 50px auto auto auto;
  padding: 10px;
  font-size: 24px;
  line-height: 28px;
  background-color: #fff;
}
.weather__main {
  height: 388px;
}
.weather__container {
  border: 1px solid #000;
}
</style>
