<template>
  <div class="btn-nav">
    <router-link v-for="item in json" :key="item.name" :to="item.to" active-class="active">
      <img
        :src="$route.path == item.to ? item.activeImg : item.noActive"
        alt=""
      />
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["json"],
};
</script>

<style scoped >
.btn-nav {
  width: 100%;
  height: 1rem;
  background: #fff;
  border: 0.01rem solid #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.btn-nav img {
  width: 0.35rem;
  margin-top: .15rem;
}
.btn-nav p{
    font-size: .30rem;
}
.active{
  color: orange;
}
</style>