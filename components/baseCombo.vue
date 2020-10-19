<template lang="pug">
v-autocomplete.pt-0.pb-0(
  :items="items"
  :label="label"
  clearable
  dense
  hide-details
  outlined
)
</template>

<script>
  export default {
    props: [
      'items',
      'label'
    ]
  }
</script>
