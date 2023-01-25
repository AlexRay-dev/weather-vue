<template>
  <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
  >
    <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" :stroke="iconColor"/>
    <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" :stroke="iconColor"/>
  </svg>
</template>

<script>
export default {
  name: 'icon-close',
  props: {
    width: {
      type: [Number, String],
      default: 17
    },
    height: {
      type: [Number, String],
      default: 16
    },
    iconColor: {
      type: String,
      default: '#998899'
    },
    isFilled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>