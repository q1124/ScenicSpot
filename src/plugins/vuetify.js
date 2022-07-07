import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2e71c5',
        secondary: '#494d61',
        accent: '#82B1FF',
        pacific: '#3c92ff',
        error: '#fe5a39',
        info: '#7be0e7',
        maxBlueGreen: '#23b5c0',
        success: '#28a745',
        warning: '#ffc107',
        codGrey: '#30363b',
        muted: '#9fa2a5',
        shamrock: '#20c997',
        paleGrey: '#F5F7FB'
      }
    }
  }
})
