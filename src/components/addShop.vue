<template>
  <div class="addShop_wrap">
    <div class="addShop">
      <button class="show_btn" @click="show = true">加入购物车</button>
    </div>
    <div class="mask" v-if="show" @click.self="show = false">
      <div class="specs">
        <div class="top_desc">
          <div class="img_wrap">
            <img :src="global.http + detail.img" alt="图片" />
          </div>
          <p>{{ detail.goodsname }}</p>
        </div>
        <div class="bottom_desc">
          <p class="specsname">{{ detail.specsname }}</p>
          <ul class="list" ref="ul">
            <li
              v-for="(item, index) in specsattr()"
              :key="index"
              :class="{ active: index === cardid }"
              @click="card(index)"
            >
              {{ item }}
            </li>
          </ul>
          <button class="add_btn" @click="addShop()">加入购物车</button>
        </div>
      </div>
      <u-alert :isShow="isShow"> 添加成功</u-alert>
    </div>
  </div>
</template> 


<script>
import { mapActions } from "vuex";
export default {
  props: ["detail"],
  data() {
    return {
      show: false,
      isShow: false,
      cardid: 0,
      id: this.$route.query.id,
      uid: localStorage.getItem("uid"),
      num: 1,
    };
  },
  methods: {
    specsattr() {
      return eval(this.detail.specsattr);
    },
    card(index) {
      this.cardid = index;
    },
    ...mapActions({
      aAddShop: "shopCar/aAddShop",
    }),
    addShop() {
      let json = {
        uid: this.uid,
        goodsid: this.id,
        num: this.num,
      };
      this.aAddShop(json);
      this.isShow = true;
      setTimeout(() => {
        this.isShow = this.show = false;
      }, 1000);
    },
  },
};
</script>

<style>
.addShop {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  background: #fff;
}
.addShop .show_btn {
  background: orange;
  color: #fff;
  width: 2.3rem;
  height: 100%;
  float: right;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.specs {
  width: 100%;
  min-height: 5rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.3rem;
  box-sizing: border-box;
}
.top_desc {
  width: 100%;
  display: flex;
  padding-bottom: 0.3rem;
}
.top_desc .img_wrap {
  display: inline-block;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-right: 0.5rem;
}
.top_desc img {
  height: 2rem;
}
.bottom_desc .specsname {
  font-weight: bold;
}
.bottom_desc .list {
  margin-top: 0.25rem;
  min-height: 1rem;
}
.bottom_desc .list li {
  float: left;
  min-width: 1rem;
  height: 0.6rem;
  border: 0.02rem solid black;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
  border-radius: 0.1rem;
  margin: 0 0.3rem 0.3rem 0.3rem;
}
.bottom_desc .add_btn {
  background: orange;
  color: #fff;
  width: 1.8rem;
  height: 0.8rem;
  border-radius: 0.2rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.bottom_desc .list .active {
  border-color: orange;
  color: orange;
}
</style>