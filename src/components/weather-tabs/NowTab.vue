<template>
  <div class="weather__tab  tab-now">
    <div class="tab-now__temp">
      -9
    </div>

    <div class="tab-now__footer">
      <div class="tab-now__city">
        Perm
      </div>

      <button
          class="tab-now__add-to-fav"
          @click="addToFavorite"
      >
        <icon-favorite/>
      </button>
    </div>
  </div>
</template>

<script>
import IconFavorite from "@/components/icons/IconFavorite";

export default {
  name: 'now-tab',
  components: {IconFavorite},
  methods: {
    addToFavorite() {
      console.log(1)
    }
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

  &__add-to-fav {
    width: 24px;
    height: 25px;

    background-color: transparent;
    cursor: pointer;
    border: none;
  }
}
</style>