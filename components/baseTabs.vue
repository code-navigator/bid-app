<template lang="pug">
v-tabs(
  background-color="black"
  color="white"
  dark
  grow
  slider-color="black"
  v-model="basetab"
)
  slot
</template>

<script>
export default {
  props: [
    'tab'
  ],
  computed: {
    basetab: {
      get() {
        return this.tab
      },
      set(newTab) {
        this.$emit('click', newTab)
      }
    }
  }
}
</script>
