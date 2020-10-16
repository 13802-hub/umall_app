import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import register from './modules/register'
import goods from './modules/goods'
import shopCar from './modules/shopCar'

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        register,
        goods,
        shopCar,
    }
})
