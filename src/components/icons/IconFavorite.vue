<template>
  <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
  >
    <path
        d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
        opacity="0.54"
        :stroke="iconColor"
        :fill="isFilled ? iconColor : 'inherit'"
        stroke-width="2"/>
  </svg>
</template>

<script>
export default {
  name: 'icon-favorite',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 25
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    isFilled: {
      type: Boolean,
      default: false
    }
  }
}
</script>