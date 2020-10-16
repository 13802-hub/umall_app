<template>
  <div>
    <top-title></top-title>
    <div class="sort_list">
      <div class="sort_parent">
        <span
          v-for="(item, index) in sort"
          :key="item.catename"
          @click="card(index)"
          :class="{ active: index === cardid }"
          >{{ item.catename }}</span
        >
      </div>
      <div class="sort_children">
        <div
          v-for="(item, index) in children"
          :key="index"
          @click="
            $router.push('/sortGoods?id=' + item.id + '&name=' + item.catename)
          "
        >
          <img :src="global.http + item.img" alt="" />
          <p>{{ item.catename }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      cardid: 0,
    };
  },
  computed: {
    ...mapGetters({
      sort: "goods/sort",
      children: "goods/children",
    }),
  },
  methods: {
    ...mapActions({
      aSort: "goods/aSort",
      aChildren: "goods/aChildren",
    }),
    card(index) {
      this.cardid = index;
      this.aChildren(this.sort[this.cardid].children);
    },
  },
  mounted() {
    this.aSort();
  },
  watch: {
    sort() {
      this.card(this.cardid);
    },
  },
};
</script>

<style scoped>
.sort_list {
  display: flex;
}
.sort_parent {
  display: flex;
  flex-direction: column;
  width: 2.5rem;
}
.sort_parent span {
  line-height: 0.8rem;
  font-size: 0.26rem;
  text-align: center;
  border-left: 0.1rem solid transparent;
  color: black;
}
.sort_parent .active {
  border-left: 0.1rem solid mediumturquoise;
  color: orange;
}
.sort_children {
  flex: 1;
}
.sort_children div {
  float: left;
  margin: 0.05rem;
  border: 0.01rem solid mediumturquoise;
  position: relative;
  border-radius: 0.2rem;
  overflow: hidden;
}
.sort_children img {
  width: 2.2rem;
  height: 2.2rem;
}
.sort_children p {
  position: absolute;
  bottom: 0;
  background: mediumturquoise;
  width: 100%;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 0.25rem;
}
</style>