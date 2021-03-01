import Vue from 'vue'
import Vuex from 'vuex'


import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
// import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        // 当前用户
        currentUser: '',
        // 判断当前用户是否登录
        isLogin: false,
        // 收藏列表
        collectList: [],
        te: ["ceshi", "csfg"]
    },
    mutations,
    actions,
    // 数据经过变化才能拿到一般定义在getters
    getters,

})

export default store