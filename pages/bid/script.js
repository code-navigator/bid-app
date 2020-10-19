import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import baseText from '@/components/baseText'
import baseCombo from '@/components/baseCombo'
import baseTabs from '@/components/baseTabs'

export default {
  components: {
    Splitpanes,
    Pane,
    baseText,
    baseCombo,
    baseTabs
  },
  data: () => ({
    materials:['2024 O BR .063', '7075 T6 CL .050'],
    tab: null,
    thead: [
      'E-Bid Order Qty',
      'E-Bid Release Qty',
      'No. Of Deliveries',
      'Mo. to First Del. 4',
      'Mo. to Last Del.'
    ],
    tbody: [
      ['R:1 V:1', 'R:1 V:2', 'R:1 V:3', 'R:1 V:4', 'R:1 V:5']
    ],
      search: '',
      select: '',
      customers: [
        'Boeing',
        'Lockheed',
        'Northrop Grumman'
      ],
      items: [
        {
          id: 1,
          name: 'Boeing :',
          children: [
            { id: 2, name: 'F-15', children:[
              {
                id: 5,
                name: 'RFQ 000',
                children:[
                  {
                    id: 6,
                    name: 'Part -001'
                  }
                ]
              }
            ] },
            { id: 3, name: 'F-18' },
            { id: 4, name: 'V-22' },
          ],
        },
        {
          id: 7,
          name: 'Northrop :',
          children: [
            { id: 8, name: 'F-18', children:[
              {
                id: 9,
                name: 'RFQ 000',
                children:[
                  {
                    id: 10,
                    name: 'Part -001'
                  }
                ]
              }
            ] },
            { id: 11, name: 'F-35' },
            { id: 12, name: 'Global Hawk' },
          ],
        }
      ]
    }),
  methods: {
    addRow: function() {
      var newRow = [];

      for(var i = 0, length = this.thead.length; i < length; i++) {
        newRow.push('R:' + (this.tbody.length + 1) + ' V:' + (i + 1))
      }

      this.tbody.push(newRow);

    },
    removeRow: function() {
      this.tbody.splice(-1, 1)
    },
    clickTab: function (newtab) {
      console.log(newtab)
      this.tab = newtab
    }
  }
}
