<template>
  <div class='favorite'>
    <div class='favorite__title'>Added Locations:</div>

    <ul class="favorite__list">
      <favorite-item/>
    </ul>
  </div>
</template>

<script>
import FavoriteItem from "@/components/favorites/FavoriteItem";

export default {
  name: 'favorite-list',
  components: {FavoriteItem}
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