<template lang="pug">
v-autocomplete.pt-0.pb-0(
  :items="items"
  :label="label"
  clearable
  dense
  hide-details
  outlined
  height="20"
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

<style>
.v-icon.v-icon.v-icon--link {
  top: -7px;
  font-size: 15px;
}
</style>
