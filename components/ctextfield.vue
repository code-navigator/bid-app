<template lang="pug">
  v-text-field(
    dense
    :label="label"
    outlined
    hide-details
    v-model="model"
    @click="$emit('click')"
  )
</template>
<script>
  export default {
    props: [
      'label',
      'model'
    ],
  methods: {
    click() {
      this.$emit('click')
    }
  }
  }
</script>

