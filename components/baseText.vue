<template lang="pug">
v-text-field.ma-0.pa-0(
  :label="label"
  dense
  hide-details
  outlined
)
</template>

<script>
export default {
  props: [
    'label'
  ]
}
</script>
