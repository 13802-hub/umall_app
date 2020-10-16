<template>
  <div>
    <router-view></router-view>
    <btn-nav :json="json"></btn-nav>
  </div>
</template>

<script>
import tab_home_hig from "../assets/images/icon/tab_home_hig.png";
import tab_home_nor from "../assets/images/icon/tab_home_nor.png";
import tab_me_hig from "../assets/images/icon/tab_me_hig.png";
import tab_me_nor from "../assets/images/icon/tab_me_nor.png";
import tab_menu_hig from "../assets/images/icon/tab_menu_hig.png";
import tab_menu_nor from "../assets/images/icon/tab_menu_nor.png";
import tab_shopping_hig from "../assets/images/icon/tab_shopping_hig.png";
import tab_shopping_nor from "../assets/images/icon/tab_shopping_nor.png";

import btnNav from "../components/btnNav";
export default {
  data() {
    return {
      img: {
        tab_home_hig,
        tab_home_nor,
        tab_me_hig,
        tab_me_nor,
        tab_menu_hig,
        tab_menu_nor,
        tab_shopping_hig,
        tab_shopping_nor,
      },
      json: [
        {
          name: "首页",
          to: "/index/home",
          activeImg: tab_home_hig,
          noActive: tab_home_nor,
        },
        {
          name: "分类",
          to: "/index/sort",
          activeImg: tab_menu_hig,
          noActive: tab_menu_nor,
        },
        {
          name: "购物车",
          to: "/index/shopCar",
          activeImg: tab_shopping_hig,
          noActive: tab_shopping_nor,
        },
        {
          name: "我的",
          to: "/index/mine",
          activeImg: tab_me_hig,
          noActive: tab_me_nor,
        },
      ],
    };
  },
  components: {
    btnNav,
  },
};
</script>

<style scoped>
</style>