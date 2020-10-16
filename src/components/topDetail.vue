<template>
  <div class="topDetail">
    <div class="img">
      <img :src="'http://localhost:3000' + detail.img" alt="图片" />
    </div>
    <div class="bottomText">
      <p class="name">{{ detail.goodsname }}</p>
      <p class="price" v-if="detail.price">${{ detail.price | filterPrice }}</p>
      <del class="old_price"  v-if="detail.price">${{ detail.market_price | filterPrice }}</del>
      <div class="desc">
        <i v-if="detail.ishot">热卖</i>
        <i v-if="detail.isnew">新品</i>
      </div>
      <p class="collect">
        <img src="../assets/images/keep.png" alt="" />
        <i>收藏</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detail"],
};
</script>

<style>
.topDetail {
  width: 100%;
  height: 7rem;
  background: #fff;
}
.topDetail .img,
.topDetail .img img {
  width: 100%;
  height: 4.7rem;
}
.bottomText {
  box-sizing: border-box;
  padding: 0.3rem 0.35rem;
  position: relative;
}
.price,
.old_price {
  font-size: 0.3rem;
}
.price {
  margin: 0.5rem 0 0.2rem 0;
  color: red;
}
.old_price {
  color: #aaa;
  margin-left: -0.1rem;
}
.desc {
  position: absolute;
  left: 1.9rem;
  top: 1rem;
}
.bottomText .desc i {
  display: inline-block;
  width: 0.6rem;
  height: 0.3rem;
  margin-right: 0.05rem;
  color: orange;
  border: 0.02rem solid orange;
  font-size: 0.2rem;
  line-height: 0.3rem;
  text-align: center;
}
.collect {
  position: absolute;
  right: 0.35rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  top: 20%;
}
.collect img {
  width: 0.3rem;
  margin: auto;
}
.collect i {
  margin: 0.1rem 0;
  font-size: 0.2rem;
  color: red;
}
</style>