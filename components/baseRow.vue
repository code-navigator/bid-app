<template lang="pug">
  v-row.pa-0
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
