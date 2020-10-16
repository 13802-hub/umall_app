<template>
  <div>
    <ul class="goods-list">
      <li v-for="item in goods" :key="item.id">
        <router-link :to="'/goodsDetail?id=' + item.id">
          <img :src="global.http + item.img" alt="" />
          <div class="right-text">
            <p class="name">{{ item.goodsname }}</p>
            <p class="price">${{ item.price | filterPrice }}</p>
            <button>立即抢购</button>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      goods: "goods/goods",
    }),
  },
  methods: {
    ...mapActions({
      aGoods: "goods/aGoods",
    }),
  },
  created() {
    this.aGoods();
  },
};
</script>

<style>
.goods-list {
  margin-bottom: 1rem;
}
.goods-list li {
  width: 100%;
  margin: 0.3rem 0;
}
.goods-list li a {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.goods-list img {
  width: 2rem;
  height: 2rem;
}
.goods-list .right-text {
  margin-left: 0.3rem;
}
.goods-list .name {
  margin: 0.2rem 0;
}
.goods-list .price {
  color: red;
  margin: 0.3rem 0 0.2rem 0.06rem;
}
.goods-list button {
  background: orange;
  color: #fff;
  width: 1.5rem;
  height: 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.2rem;
}
</style>