import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



const login = () => import('../pages/login.vue')
const register = () => import('../pages/register.vue')
const index = () => import('../pages/index.vue')
const home = () => import('../pages/home.vue')
const sort = () => import('../pages/sort.vue')
const sortGoods = () => import('../pages/sortGoods.vue')
const shopCar = () => import('../pages/shopCar.vue')
const mine = () => import('../pages/mine.vue')
const goodsDetail = () => import('../pages/goodsDetail.vue')
const router = new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login,
    },

    {
      path: '/register',
      name: '注册',
      component: register,

    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          name: '首页',
          component: home,
        },
        {
          path: 'sort',
          name: '分类',
          component: sort,
        },
        {
          path: 'shopCar',
          name: '购物车',
          component: shopCar,
        },
        {
          path: 'mine',
          name: '个人中心',
          component: mine,
        },
        {
          path: "",
          redirect: 'home'
        }
      ],
    },
    {
      path: '/sortGoods',
      name: '',
      component: sortGoods,
    },
    {
      path: '/goodsDetail',
      name: '商品详情',
      component: goodsDetail,
    },
    {
      path: '*',
      redirect: '/login',
    }
  ]
})
export default router;

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || (to.path === '/register') ){
    next();
    return;
  };
  var isLogin = localStorage.getItem('isLogin');
  if (isLogin) {
    next();
    return;
  };
  next('/login');
})