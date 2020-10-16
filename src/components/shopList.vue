<template>
  <div class="box_wrap">
    <div class="shop_wrap" v-for="(item, index) in json" :key="item.id">
      <div class="shop_title">
        <img src="../assets/images/store.png" alt="" /> 杭州保税仓库
      </div>
      <div class="content" ref="content" v-if="arr.length > 0">
        <div class="checkbox" @click="checkOne(index)">
          <img :src="arr[index].ischeck ? img.hig : img.nor" alt="" />
        </div>
        <div class="img_wrap">
          <img :src="global.http + item.img" alt="" />
        </div>
        <div class="cen_wrap">
          <p class="name">{{ item.goodsname }}</p>
          <p class="num_wrap">
            <span @click="sub(item.id)">-</span
            ><i>{{ (item.num = Math.max((l = item.num), 1)) }}</i
            ><span @click="add(item.id)">+</span>
          </p>
          <p class="all_price">
            总价: ${{ (item.num * item.price) | filterPrice }}
          </p>
        </div>
        <div class="car_price_wrap">
          <span class="car_price">${{ item.price | filterPrice }}</span>
        </div>
        <div class="del_btn" @click="delCar(item.id, index)">删除</div>
      </div>
    </div>

    <div class="no_list" v-if="this.json == null">
      <p>暂无商品</p>
      <p>赶快去购物吧</p>
    </div>
  </div>
</template>

<script>
import hig from "../assets/images/radio_hig.png";
import nor from "../assets/images/radio_nor.png";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["json", "isEdit", "check_all"],
  data() {
    return {
      arr: [],
      uid: localStorage.getItem("uid"),
      all: false,
      img: {
        hig,
        nor,
      },
    };
  },
  computed: {
    all_price() {
      let sum = 0;
      this.arr.filter((item, index) => {
        return item.ischeck === true
          ? (sum += this.json[index].price * this.json[index].num)
          : 0;
      });
      return sum;
    },
  },
  methods: {
    getArr() {
      if (this.json !== null) {
        for (let i = 0; i < this.json.length; i++) {
          this.arr.push({ ischeck: false });
        }
      } else {
        this.arr = [];
      }
    },
    fn() {
      if (this.isEdit) {
        for (let item of this.$refs.content) {
          item.classList.add("lateLeft");
        }
      } else {
        for (let item of this.$refs.content) {
          item.classList.remove("lateLeft");
        }
      }
    },
    checkOne(index) {
      this.arr.splice(index, 1, { ischeck: !this.arr[index].ischeck });
      this.all = this.arr.every((item) => {
        return item.ischeck == true;
      });
      this.$emit("all", this.all);
    },
    ...mapActions({
      aEditCar: "shopCar/aEditCar",
      aDelCar: "shopCar/aDelCar",
      aCarList: "shopCar/aCarList",
      aPrice: "shopCar/aPrice",
    }),
    add(id) {
      let json = {
        id,
        type: 2,
        uid: this.uid,
      };
      this.aEditCar(json);
    },
    sub(id) {
      let json = {
        id,
        type: 1,
        uid: this.uid,
      };
      this.aEditCar(json);
    },
    delCar(id, index) {
      this.getArr();
      this.aDelCar(id);
      this.aCarList(this.uid);
      this.arr.splice(index, 1);
    },
  },
  watch: {
    isEdit() {
      if (this.json) {
        this.fn();
      }
    },
    json() {
      this.getArr();
    },
    check_all() {
      this.$nextTick(() => {
        this.arr.forEach((item) => {
          item.ischeck = this.check_all;
        });
      });
    },
    all_price() {
      this.aPrice(this.all_price);
    },
  },
};
</script>

<style>
.lateLeft {
  transform: translateX(-1rem);
}

.box_wrap {
  margin-bottom: 2rem;
  overflow: hidden;
}
.shop_title {
  margin-left: 0.3rem;
  font-size: 0.3rem;
  color: #bbb;
}
.shop_title img {
  vertical-align: middle;
  margin-right: 0.15rem;
}
.shop_wrap {
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
}
.content {
  display: flex;
  min-height: 2.5rem;
  margin: 0.1rem 0;
  position: relative;
  transition: all 0.3s;
}
.checkbox {
  width: 1rem;
}
.checkbox img {
  width: 0.4rem;
  height: 0.4rem;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img_wrap img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
}
.cen_wrap {
  margin-left: 0.2rem;
}
.cen_wrap .name {
  margin: 0.3rem 0 0.4rem 0;
}
.cen_wrap .num_wrap {
  display: inline-block;
  border: 0.01rem solid #ddd;
}
.num_wrap span,
.num_wrap i {
  float: left;
  width: 0.8rem;
  height: 100%;
  text-align: center;
  line-height: 0.5rem;
}

.all_price {
  font-size: 0.28rem;
  margin-top: 0.3rem;
}
.car_price_wrap {
  width: 2rem;
  position: absolute;
  right: 0;
  box-sizing: border-box;
  font-size: 0.28rem;
  padding: 1rem 0 0 0.2rem;
}

.del_btn {
  position: absolute;
  background: orange;
  width: 1rem;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  font-size: 0.28rem;
  right: -1rem;
}

.no_list {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>