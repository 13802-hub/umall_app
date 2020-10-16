<template>
  <div>
    <div class="title">
      <img class="img" src="../assets/images/logo.jpg" alt="" />
      <input type="text" placeholder="寻找商品" />
    </div>

    <u-banner v-if="swiperList.length>0" :swiperList="swiperList"></u-banner>
    <!-- 轮播图组件 -->
    <cen-nav></cen-nav>
    <!-- 中间静态导航 -->
    <home-list></home-list>
  </div>
</template>

<script>
import uBanner from "../components/banner";
import cenNav from "../components/cenNav";
import homeList from "../components/homeList";
import { reqBanner } from "../utils/request";
export default {
  components: {
    uBanner,
    cenNav,
    homeList,
  },
  data(){
    return {
      swiperList:[]
    }
  },
  mounted(){
     reqBanner().then((res) => {
      this.swiperList = res.data.list;
    });
  }
};
</script>

<style>
.title {
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
  align-items: center;
}
.title .img {
  width: 2rem;
}
.title input {
  width: 1.7rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  margin-right: 1.5rem;
  background: #ccc;
  font-size: 0.15rem;
  text-align: center;
}
</style>