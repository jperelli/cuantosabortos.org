import Vue from 'vue'
import App from './App.vue'
import Muertes from './Muertes.vue'

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/muertes': Muertes
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App
    }
  },
  render (h) { return h(this.ViewComponent) }
})
