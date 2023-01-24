<template>
  <form class="form">
    <input
        class='form__input'
        type='text'
        placeholder='Search city'
        :value="searchQuery"
        @input="setSearchQuery($event.target.value)"
        v-focus
    />

    <input
        class='form__search-btn'
        type='submit'
        @click.prevent="fetchWeather"
    />
  </form>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
    }),
    ...mapActions({
      fetchWeather: 'fetchWeather'
    }),
  },
  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
    }),
    ...mapGetters({
    })
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px 16px;
  border-bottom: 1px solid #000;
}

.form__input {
  width: 542px;
  padding: 0 10px 0 0;
  font-size: 18px;
  line-height: 21px;
  border: none;
  outline: none;
}

.form__input::placeholder {
  font-size: 18px;
  line-height: 21px;
  color: #696969;
}

.form__search-btn {
  font-size: 0;
  position: absolute;
  padding: 0;
  right: 11px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: url('../assets/img/search.svg');
  background-repeat: no-repeat;
}
</style>