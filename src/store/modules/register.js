import { reqRegister } from '../../utils/request';

const state = {
    msg: '',
    isShow: false,
};

const mutations = {
    getMsg(state, msg) {
        state.msg = msg;
    },
    setisShow(state, isShow) {
        state.isShow = isShow

    }
}
const actions = {
    async requestRegister(context,json) {
        let phone=json.phone;
        let nickname=json.nickname;
        let password=json.password;
        await context.commit('getPhone', phone, nickname, password);
        let res = await reqRegister(phone,nickname, password);
        context.commit('getMsg', res.data.msg);
        context.commit('setisShow', true);
        setTimeout(() => {
            context.commit('setisShow', false)
        }, 2500);
        if (res.data.code == 200) {
            sessionStorage.setItem('registerOk',true)
        }else{
            sessionStorage.setItem('registerOk',false)
        }
    }
}
const getters = {
    msg(state) {
        return state.msg;
    },
    isShow(state) {
        return state.isShow;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    // namespaced: true,
}