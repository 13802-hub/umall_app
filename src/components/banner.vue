<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img class="swp-img" :src="global.http + item.img" alt="图片" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { reqBanner } from "../utils/request";
import "swiper/css/swiper.css";
import Swiper from 'swiper';   
export default {
  props: ["swiperList"],

  data() {
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      observer: true,
      observeParents: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: true,
    })
  },
};
</script>

<style >
.swiper-container {
  width: 100%;
  height: 3.5rem;
}

.swiper-container .swp-img {
  width: 100%;
  height: 100%;
}
</style>