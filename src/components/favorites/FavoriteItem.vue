<template>
  <li class="favorite__item">
    <div
        class="favorite__item-title"
        @click="showWeather"
    >
      Perm
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

export default {
  name: 'favorite-item',
  components: {IconClose},
  methods: {
    showWeather() {

    },
    removeFromFavorites() {

    }
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