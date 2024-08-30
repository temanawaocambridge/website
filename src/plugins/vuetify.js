/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#28425B',
          secondary: '#2C7673',
          accent: '#9F3DA4',
        },
      },
    },
  },
})


/*
color of tree: #2e4259
lighter purple: '#aa82b9

// palette
{"Myrtle Green":"2C7673","Purpureus":"9F3DA4","White":"FDFCFB","Off Red (RGB)":"FA0117","Indigo dye":"28425B"}
*/