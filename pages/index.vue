<template lang="pug">

  splitpanes(
    class="default-theme"
    vertical
  )

    pane(size="20")

      splitpanes(
        class="default-theme"
        horizontal
      )

        pane(
          size="50"
          style="overflow: auto;"
        )
          v-container
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
                  activatable
                  dense
                  :items="items"
                  :search="search"
                )

        pane(
          size="50"
          style="overflow: auto;"
        )
          v-container
            v-row(no-gutters)
              v-col(cols="12")
                v-combobox(
                  v-model="select"
                  :items="cbitems"
                  label="Customer"
                  outlined
                  dense
                )
                v-combobox(
                  v-model="select"
                  :items="cbitems"
                  label="Program"
                  outlined
                  dense
                )
                v-text-field(
                  label="RFQ Numbers"
                  outlined
                  placeholder="Enter RFQ"
                  dense
                )
                v-text-field(
                  label="Number of Deliveries"
                  outlined
                  placeholder="Enter Deliveries"
                  dense
                )
            v-row
              v-col(cols="6")
                v-text-field(
                  label="Months to First Delivery"
                  outlined
                  placeholder="Enter Deliveries"
                  dense
                )
              v-col(cols="6")
                v-text-field(
                  label="Months to Last Delivery"
                  outlined
                  placeholder="Enter Deliveries"
                  dense
                )
            v-row
              v-col(cols=12)
                v-textarea(
                  dense
                  outlined
                  name="input-7-4"
                  placeholder="Enter or copy & paste in a list of part numbers"
                  label="Part Numbers"
                  value=""
                )

                v-btn(
                  class="mx-2"
                  small
                  fab
                  dark
                  color="indigo"
                )
                  v-icon(dark) mdi-plus

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
      select:[],
      cbitems:[],
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
</style>

