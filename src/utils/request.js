import axios from 'axios';
axios.interceptors.request.use(config => {

    return config
})


axios.interceptors.request.use(req => {
    if (req.url != '/api/login' || req.url != '/api/register') {
        req.headers.authorization = sessionStorage.getItem('token')
    }
    return req
})
axios.interceptors.response.use(res => {
    console.log(res);
    console.log(res.config.url);
    return res;
})

let baseUrl = '/api';


//登录接口
export const reqLogin = (phone, password) => {
    return axios({
        url: baseUrl + '/api/login',
        method: 'post',
        data: {
            phone,
            password,
        }
    })
}

//注册接口

export const reqRegister = (phone, nickname, password) => {
    return axios({
        url: baseUrl + '/api/register',
        method: 'post',
        data: {
            phone,
            nickname,
            password,

        }
    })
}

// 首页轮播图接口

export const reqBanner = () => {
    return axios({
        url: baseUrl + "/api/getbanner"
    })
}

//首页商品接口

export const reqHomeList = () => {
    return axios({
        url: baseUrl + '/api/getindexgoods'
    })
}

//获取商品详情

export const reqDetail = (id) => {
    return axios({
        url: baseUrl + '/api/getgoodsinfo',
        params: {
            id,
        }
    })
}

//添加购物车

export const addShop = (uid, goodsid, num) => {
    return axios({
        url: baseUrl + '/api/cartadd',
        method: 'post',
        data: {
            uid,
            goodsid,
            num,
        }
    })
}


//获取分类
export const reqSort = () => {
    return axios({
        url: baseUrl + '/api/getcatetree'
    })
}

// 获取分类商品

export const reqGoods = (fid) => {
    return axios({
        url: baseUrl + '/api/getgoods',
        params: {
            fid,
        }
    })
}

//获取购物车列表

export const reqCarList = (uid) => {
    return axios({
        url: baseUrl + '/api/cartlist',
        params: {
            uid,
        }
    })
}

//修改购物车 

export const editCar = (id, type) => {
    return axios({
        url: baseUrl + '/api/cartedit',
        method: 'post',
        data: {
            id,
            type,
        }
    })
}

//删除购物车 

export const delCar = (id) => {
    return axios({
        url: baseUrl + '/api/cartdelete',
        method: 'post',
        data: {
            id,
        }
    })
}