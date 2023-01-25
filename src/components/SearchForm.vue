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
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import IconSearch from "@/components/icons/IconSearch";

export default {
  components: {IconSearch},
  methods: {
    fetchWeather() {
      this.fetchCurrentWeather();
      this.fetchForecast();
      this.setSearchQuery('');
    },
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
    }),
    ...mapActions({
      fetchCurrentWeather: 'fetchCurrentWeather',
      fetchForecast: 'fetchForecast'
    }),
  },
  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
    }),
    ...mapGetters({})
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