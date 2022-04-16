import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayers from 'vuelayers'
import 'vuelayers/dist/vuelayers.css' // needs css-loader
import axios from 'axios'
Vue.prototype.$http = axios;
import vueresource from "vue-resource"
Vue.use(VueLayers)
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
