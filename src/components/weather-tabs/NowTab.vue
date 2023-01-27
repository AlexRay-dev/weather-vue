<template>
  <div v-if="isCurrentWeatherLoading" class="weather__tab-loading">Идёт загрузка...</div>
  <div
      v-else-if="currentWeather"
      class="weather__tab  tab-now"
  >
    <div class="tab-now__temp">
      {{ Math.round(currentWeather.main.temp) + '°' }}
    </div>

    <div class="tab-now__icon">
      <img
          :src="API.IMG + currentWeather.weather[0].icon + '@4x.png'"
          alt="weather img"
      />
    </div>

    <div class="tab-now__footer">
      <div class="tab-now__city">{{ currentWeather.name }}</div>

      <button
          class="tab-now__add-to-fav"
          @click="addToFavorite"
      >
        <icon-favorite
            :isFilled="isFavoriteIconFilled"
        />
      </button>
    </div>
  </div>
  <div v-else class="weather__tab-error">Произошла ошибка при загрузке страницы</div>
</template>

<script>
import IconFavorite from "@/components/icons/IconFavorite";
import {mapMutations, mapState} from "vuex";
import {API} from "@/consts/api";

export default {
  name: 'now-tab',
  components: {IconFavorite},
  data() {
    return {
      API,
      isFavoriteIconFilled: false,
    }
  },
  methods: {
    addToFavorite() {
      const isFavorite = this.favorites.includes(this.currentWeather.name.toLowerCase());
      if (!isFavorite) {
        this.setFavorites([...this.favorites, this.currentWeather.name.toLowerCase()]);
        this.isFavoriteIconFilled = true;
      } else {
        this.setFavorites(this.favorites.filter(city => city !== this.currentWeather.name.toLowerCase()));
        this.isFavoriteIconFilled = false;
      }
    },
    ...mapMutations({
      setFavorites: 'setFavorites',
    }),
  },
  updated() {
    if(this.currentWeather) {
      this.isFavoriteIconFilled = this.favorites.includes(this.currentWeather.name.toLowerCase());
    }
  },
  computed: {
    ...mapState({
      isCurrentWeatherLoading: state => state.isCurrentWeatherLoading,
      currentWeather: state => state.currentWeather,
      city: state => state.city,
      favorites: state => state.favorites,
    })
  }
}
</script>

<style lang="scss" scoped>
.tab-now {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__temp {
    font-size: 70px;
    line-height: 82px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__city {
    font-size: 24px;
  }

  &__icon {
    display: flex;
    justify-content: center;

    img {
      width: 150px;
      height: 150px;
    }
  }

  &__add-to-fav {
    width: 24px;
    height: 25px;

    background-color: transparent;
    cursor: pointer;
    border: none;
  }
}
</style>