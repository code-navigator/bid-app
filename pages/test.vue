<template lang="pug">

  splitpanes(
    class="default-theme"
    vertical
  )

    pane(size="20")
      v-tabs(v-model="tab")
        v-tab Search
        v-tab Other
      v-tabs-items(v-model="tab")
        v-tab-item
          splitpanes(
            class="default-theme"
            horizontal
          )

            pane(
              size="50"
              style="overflow: auto;"
            )
              v-container(style="overflow: auto;")
                v-row(no-gutters)
                  v-col(cols="12")
                    v-text-field(
                      clearable
                      dense
                      full-width
                      outlined
                      prepend-inner-icon="mdi-magnify"
                      single-line
                      v-model="search"
                    )
                    v-treeview(
                      dense
                      :items="items"
                      :search="search"
                    )

            pane(size="50")
              v-container
                span 1b


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
  },
  data: () => ({
      search: '',
      tab: '',
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
    }),
}
</script>

<style>
.v-treeview--dense
.v-treeview-node__root {
  min-height: 0px;
}

.v-window__container {
  height: 81vh;
  display:grid;
}
</style>

