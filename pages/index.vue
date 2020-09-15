<template lang="pug">
  splitpanes(
    class="default-theme"
    vertical
  )
    pane(size="20")
      span 1
    pane(size="80")
      span 2
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  components: {
    Splitpanes,
    Pane
  }
}
</script>

