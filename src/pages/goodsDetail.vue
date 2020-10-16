<template>
  <div class="wrap">
    <top-title>
      <go-back slot="goBack"></go-back>
    </top-title>
    <top-detail :detail="detail"></top-detail>
    <div class="desc_img" v-html="detail.description"></div>
    <add-shop :detail="detail"></add-shop>
  </div>
</template>

<script>
import topDetail from "../components/topDetail";
import addShop from "../components/addShop";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    topDetail,
    addShop,
  },

  computed: {
    ...mapGetters({
      detail: "goods/detail",
    }),
  },
  methods: {
    ...mapActions({
      aDetail: "goods/aDetail",
    }),
  },
  mounted() {
    var id = this.$route.query.id;
    this.aDetail(id);
  },
};
</script>

<style>
.wrap {
  background: #bbb;
}
.desc_img {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
</style>