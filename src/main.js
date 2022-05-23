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
// 为什么传这三个参数，官网有详细介绍
router.beforeEach((to,from,next) => {
    // 这里的meta就是我们刚刚在路由里面配置的meta
    if(to.meta.requireAuth){
        // 下面这个判断是自行实现到底是否有没有登录
        if (store.getters.isLogin){
        // 登录就继续
            next();
        }else {
        // 没有登录跳转到登录页面，登录成功之后再返回到之前请求的页面
            next({
                path : '/login',
                query : {redirect : to.fullPath}
            })
        }
    }else {
    // 不需要登录的，可以继续访问
        next()
    }
});
axios.interceptors.request.use(function (config) {
    if (localStorage.token) {
        config.headers.Authorization = `token ${localStorage.token}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});
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
