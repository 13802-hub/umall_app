<template>
  <div>
    <top-title>
      <go-back slot="goBack"></go-back>
      <p slot="name">{{ $route.query.name }}</p>
    </top-title>

    <div
      class="goods_wrap"
      v-for="item in sortGoods"
      :key="item.id"
      @click="$router.push('/goodsDetail?id='+item.id)"
    >
      <div class="img_wrap">
        <img :src="global.http + item.img" alt="图片" />
      </div>
      <div class="right_text">
        <p class="name">{{ item.goodsname }}</p>
        <p class="price_wrap">
          <span class="price">${{ item.price | filterPrice }}</span>
          <del class="del">${{ item.market_price | filterPrice }}</del>
        </p>
        <button class="btn">立即抢购</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sortGoods: "goods/sortGoods",
    }),
  },
  methods: {
    ...mapActions({
      aSortGoods: "goods/aSortGoods",
    }),
  },
  mounted() {
    var id = this.$route.query.id;
    this.aSortGoods(id);
  },
};
</script>

<style>
.goods_wrap {
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
  display: flex;
}
.goods_wrap .img_wrap {
  display: inline-block;
  border-radius: 0.2rem;
  overflow: hidden;
}
.goods_wrap img {
  width: 2rem;
  height: 2rem;
}
.right_text {
  margin-left: 0.3rem;
}
.right_text .name {
  margin-bottom: 0.4rem;
}
.right_text .price_wrap {
  font-size: 0.3rem;
}
.right_text .price {
  color: red;
  margin-right: 0.2rem;
}
.right_text .del {
  color: #bbb;
}
.btn {
  margin-top: 0.3rem;
  width: 1.6rem;
  height: 0.5rem;
  background: orange;
  color: #fff;
  border-radius: 0.2rem;
}
</style>