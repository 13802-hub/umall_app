import { reqHomeList, reqDetail,  reqSort, reqGoods } from "../../utils/request";

const state = {
    goods: [],
    detail: {},
    sort: [],
    children: [],
    sortGoods: [],
}

const mutations = {
    mGoods(state, arr) {
        state.goods = arr;
    },
    mDetail(state, json) {
        state.detail = json;
    },
    mSort(state, arr) {
        state.sort = arr;
    },
    mChildren(state, arr) {
        state.children = arr;
    },
    mSortGoods(state, arr) {
        state.sortGoods = arr;
    },
}

const actions = {
    aGoods(context) {
        if (context.state.goods.length > 0) {
            return;
        } else {
            reqHomeList().then(res => {
                context.commit('mGoods', res.data.list[0].content)
            })
        }
    },
    aDetail(context, id) {
        if (id == context.state.detail.id) {
            return;
        } else {
            context.commit('mDetail', {})
        }
        reqDetail(id).then(res => {
            context.commit('mDetail', res.data.list[0])
        })
    },
    aSort(context) {
        reqSort().then(res => {
            // context.state.sort = res.data.list
            context.commit('mSort',res.data.list)
        })
    },
    aChildren(context, arr) {
        context.commit("mChildren", arr)
    },
    aSortGoods(context, id) {
        if (context.state.sortGoods != null) {
            if (id == context.state.sortGoods.id) {
                return;
            } else {
                // context.state.sortGoods = []
                context.commit('mSortGoods', [])
            }
        }
        reqGoods(id).then(res => {
            context.commit('mSortGoods', res.data.list)
        })
    },
}

const getters = {
    goods(state) {
        return state.goods
    },
    detail(state) {
        return state.detail
    },
    sort(state) {
        return state.sort
    },
    sortGoods(state) {
        return state.sortGoods
    },
    children(state) {
        return state.children
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}