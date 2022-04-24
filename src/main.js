import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayers from 'vuelayers'
import 'vuelayers/dist/vuelayers.css' // needs css-loader
import axios from 'axios'
import Buefy from 'buefy'
Vue.prototype.$http = axios;
import vueresource from "vue-resource"
import { DrawInteraction } from 'vuelayers'
Vue.use(DrawInteraction)
Vue.use(VueLayers, {})
Vue.use(Buefy, {
  defaultIconPack: 'fa',
})
Vue.config.productionTip = false
// Vue.use(VueLayers, {
//   dataProjection: 'EPSG:4326',
// })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
