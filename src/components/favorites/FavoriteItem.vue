<template>
  <li class="favorite__item">
    <div
        class="favorite__item-title"
        @click="showWeather"
    >
      {{ favoriteCity }}
    </div>
    <button
        class="favorite__item-button"
        @click="removeFromFavorites"
    >
      <icon-close/>
    </button>
  </li>
</template>

<script>
import IconClose from "@/components/icons/IconClose";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'favorite-item',
  components: {IconClose},
  props: {
    favoriteCity: {
      type: String,
      required: true,
    }
  },
  methods: {
    showWeather() {
      this.setCity(this.favoriteCity)
      this.fetchCurrentWeather();
      this.fetchForecast();
    },
    removeFromFavorites() {
      this.setFavorites(
          this.favorites.filter(city => city !== this.favoriteCity)
      )
    },
    ...mapMutations({
      setFavorites: 'setFavorites',
      setCity: 'setCity',
    }),
    ...mapActions({
      fetchCurrentWeather: 'fetchCurrentWeather',
      fetchForecast: 'fetchForecast',
    }),
  },
  computed: {
    ...mapState({
      favorites: state => state.favorites,
    })
  }
}
</script>

<style lang="scss" scoped>
.favorite__item {
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  &-title {
    font-size: 24px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &-button {
    border: none;
    background: inherit;
    outline: none;
    cursor: pointer;
  }
}
</style>