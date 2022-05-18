import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayers from 'vuelayers'
import 'vuelayers/dist/vuelayers.css' // needs css-loader
import axios from 'axios'
import Buefy from 'buefy'
import { DrawInteraction } from 'vuelayers'
Vue.prototype.$http = axios;
import vueresource from "vue-resource"
Vue.use(DrawInteraction)
Vue.use(VueLayers, {})
Vue.use(Buefy, {
  defaultIconPack: 'fa',
})
Vue.config.productionTip = false;
// Vue.use(VueLayers, {
//   dataProjection: 'EPSG:4326',
// })
//cookie
(function() {
	var Cookie = {
		setCookie(key, value, expire_days = 7) {
			var date = new Date();
			date.setDate(date.getDate() + expire_days);
			document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + date.toGMTString() + ";path=/";
		},
		getCookie(key) {
			let reg = RegExp('(?:^| )' + key + '=([^;]+)(?:;|$)'), //直接开头或有空格，中间不含分号，分号结束或是结尾
				arr = document.cookie.match(reg);
			if(arr) {
				return decodeURIComponent(arr[1]);
			}
			return null;
		},
		delCookie(key) {
			var date = new Date();
			date.setDate(date.getDate() - 1);
			document.cookie = key + "=" + encodeURIComponent(this.getCookie(key)) + ";expires=" + date.toGMTString() + ";path=/";
		}
	}
	window.Cookie = Cookie;
})();
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
