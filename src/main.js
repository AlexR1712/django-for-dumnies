import Vue from 'vue'
import Slide from './Slide.vue'
import Keynote from 'vue-keynote'
Vue.use(Keynote)

new Vue({
  el: '#app',
  render: h => h(Slide)
})
