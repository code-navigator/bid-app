<template lang="pug">
  v-col.pa-1(:cols="cols")
    slot
</template>

<script>
export default {
  name: 'baseCol',
  props: [
    'cols'
  ]
}
</script>

<style></style>
