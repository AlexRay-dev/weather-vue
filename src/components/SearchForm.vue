<template>
  <form class="search">
    <input
        class='search__input'
        type='text'
        placeholder='Search city'
        :value="searchQuery"
        @input="setSearchQuery($event.target.value)"
        v-focus
    />
    <button
        class='search__submit'
        type='submit'
        @click.prevent="fetchWeather"
    >
      <icon-search/>
    </button>
  </form>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';
import IconSearch from "@/components/icons/IconSearch";

export default {
  components: {IconSearch},
  methods: {
    fetchWeather() {
      if (!this.searchQuery.trim()) return;
      this.setCity(this.searchQuery);
      this.fetchCurrentWeather();
      this.fetchForecast();
      this.setSearchQuery('');
    },
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
      setCity: 'setCity',
    }),
    ...mapActions({
      fetchCurrentWeather: 'fetchCurrentWeather',
      fetchForecast: 'fetchForecast'
    }),
  },
  mounted() {
    this.fetchCurrentWeather();
    this.fetchForecast();
  },
  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
    }),
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #000;
}

.search__input {
  width: 100%;
  padding-right: 20px;
  font-size: 18px;
  line-height: 21px;
  border: none;
  outline: none;
}

.search__input::placeholder {
  font-size: 18px;
  line-height: 21px;
  color: #696969;
}

.search__submit {
  font-size: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: inherit;
}
</style>