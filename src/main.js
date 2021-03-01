import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入rem自适应
import 'lib-flexible'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'swiper/css/swiper.css'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI);

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
    loading: require('./assets/img/common/placeholder.png')
})

new Vue({
    render: h => h(App),
    router, //把路由注入到根实例中，启动路由
    store,
}).$mount('#app')