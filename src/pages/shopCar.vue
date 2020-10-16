<template>
  <div>
    <top-title></top-title>
    <shop-list
      :json="carList"
      :isEdit="isEdit"
      :check_all="check_all"
      @all="all"
    ></shop-list>
    <car-footer @edit="edit" @checkAll="checkAll" :all="all_1"></car-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import shopList from "../components/shopList";
import carFooter from "../components/carBottom";
export default {
  data() {
    return {
      isEdit: false,
      check_all: false,
      all_1:false,
      uid: localStorage.getItem("uid"),
    };
  },
  components: {
    shopList,
    carFooter,
  },
  computed: {
    ...mapGetters({
      carList: "shopCar/carList",
    }),
  },
  methods: {
    ...mapActions({
      aCarList: "shopCar/aCarList",
    }),
    edit(e) {
      this.isEdit = e;
    },
    checkAll(e) {
      this.check_all = e;
    },
    all(e) {
      this.all_1 = e;
    },
  },
  mounted() {
    this.aCarList(this.uid);
  },

  watch: {
    shopList() {
      this.aCarList(this.uid);
    },
  },
};
</script>

<style>
</style>