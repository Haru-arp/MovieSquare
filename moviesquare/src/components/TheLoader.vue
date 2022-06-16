<template>
  <div
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex,
    }"
    :class="{
    absolute,
    fixed
  }" 
  class="spinner-border"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.spinner-border{
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #6667ab;   
}
.spinner-border.absolute{
  position: absolute;
}
.spinner-border.fixed{
  position: fixed;
}
</style>