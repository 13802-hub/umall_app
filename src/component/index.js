import Vue from 'vue'

import addShop from './addShop.vue'
import uAlert from './alert.vue'
import topTitle from './topTitle.vue'
import goBack from './goBack.vue'
import uBtn from './uBtn.vue'

let obj ={
    addShop,
    uAlert,
    topTitle,
    goBack,
    uBtn,
}

for(let i in obj){
    Vue.component(i,obj[i]);
}