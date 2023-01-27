<template>
  <div class='favorite'>
    <div class='favorite__title'>Added Locations:</div>

    <ul class="favorite__list">
      <li v-if="!favorites.length">Favorite list is empty</li>
      <favorite-item
          v-else
          v-for="favoriteCity in favorites"
          :favoriteCity="favoriteCity"
          :key="favoriteCity"
      />
    </ul>
  </div>
</template>

<script>
import FavoriteItem from "@/components/favorites/FavoriteItem";
import {mapState} from "vuex";

export default {
  name: 'favorite-list',
  components: {FavoriteItem},
  computed: {
    ...mapState({
      favorites: state => state.favorites
    })
  }
}
</script>

<style lang="scss" scoped>
.favorite {
  width: 100%;
  overflow-y: auto;

  &__title {
    font-size: 24px;
    padding: 25px 18px 3px;
    border-bottom: 1px solid #000;
  }

  &__list {
    padding: 25px 18px 18px;
    margin: 0;
  }
}
</style>