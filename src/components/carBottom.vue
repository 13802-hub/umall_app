<template>
  <div class="footer">
    <div @click="checkAll()">
      <img :src="check_all ? img.all_hig : img.all_nor" alt="" />
      <p>全选</p> 
    </div>
    <div @click="edit">
      <img :src="isEdit ? img.hig : img.nor" alt="" />
      <p>编辑</p>
    </div>
    <div>
      <p class="footer_price">合计: {{ price | filterPrice }}</p>
      <p class="footer_text">(不含运费)</p>
    </div>

    <button class="footer_btn">去结算</button>
  </div>
</template>

<script>

import hig from "../assets/images/editor_hig.png";
import nor from "../assets/images/editor_nor.png";
import all_hig from "../assets/images/radio_hig.png";
import all_nor from "../assets/images/radio_nor.png";

import { mapGetters } from "vuex";
export default {
  props: ["all"],
  computed: {
    ...mapGetters({
      price: "shopCar/price",
    }),
  },
  data() {
    return {
      isEdit: false,
      check_all: false,
      img: {
        hig,
        nor,
        all_hig,
        all_nor,
      },
    };
  },
  methods: {
    edit() {
      this.isEdit = !this.isEdit;
      this.$emit("edit", this.isEdit);
    },
    checkAll() {
      this.check_all = !this.check_all;
      this.$emit("checkAll", this.check_all);
    },
  },
  watch: {
    all() {
      this.check_all = this.all;
    },
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 1rem;
  height: 1.3rem;
  width: 100%;
  background: #fff;
  border-top: 0.01rem solid #ddd;
}
.footer div {
  float: left;
  margin-left: 0.4rem;
  margin-top: 0.3rem;
  text-align: center;
  font-size: 0.3rem;
}
.footer img {
  width: 0.4rem;
  height: 0.4rem;
}
.footer_text {
  color: #bbb;
  margin-top: 0.1rem;
  text-align: left;
}
.footer_btn {
  float: right;
  height: 100%;
  width: 2.5rem;
  background: orange;
  color: #fff;
  font-size: 0.4rem;
}
</style>