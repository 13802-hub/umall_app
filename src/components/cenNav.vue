<template>
  <div>
    <ul class="cen-nav">
      <li v-for="item in json" :key="item.id">
        <a href="javascript:0;">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import buy from "../assets/images/buy.png";
import category from "../assets/images/category.png";
import contact from "../assets/images/contact.png";
import jifen from "../assets/images/jifen.png";
export default {
  data() {
    return {
      json: [
        {
          id: 1001,
          name: "限时抢购",
          img: buy,
        },
        {
          id: 1002,
          name: "积分商场",
          img: jifen,
        },
        {
          id: 1003,
          name: "联系我们",
          img: contact,
        },
        {
          id: 1004,
          name: "商品分类",
          img: category,
        },
      ],
    };
  },
};
</script>

<style>
.cen-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.25rem;
  margin-bottom:.3rem ;

}
.cen-nav img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.3rem 0;
}
</style>