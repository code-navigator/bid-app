<template lang="pug">
  v-btn.ma-2.pa-0(
    x-small
    @click="click"
  )
    slot
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

