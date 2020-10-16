import { addShop, reqCarList, editCar, delCar } from '../../utils/request'

const state = {
    carList: [],
    goodsid: [],
    price: 0,

}

const mutations = {
    mCarList(state, arr) {
        state.carList = arr;
    },
    mGoodsid(state, num) {
        state.goodsid.push(num);
    },
    mPrice(state, num) {
        state.price = num;
    }
}

const actions = {
    aAddShop(context, json) {
        let uid = json.uid;
        let goodsid = json.goodsid;
        let num = json.num
        addShop(uid, goodsid, num)
    },
    aCarList(context, uid) {
        reqCarList(uid).then(res => {
            context.commit('mCarList', res.data.list)
        })
    },
    aEditCar(context, json) {
        let id = json.id;
        let type = json.type;
        let uid = json.uid;
        editCar(id, type)
        reqCarList(uid).then(res => {
            context.commit('mCarList', res.data.list)
        })
    },
    aDelCar(context, id) {
        delCar(id)
    },
    aPrice(context, price) {
        if(price==undefined) return;
        context.commit('mPrice', price)

    }
}

const getters = {
    carList(state) {
        return state.carList;
    },
    price(state) {
        return state.price
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}