<template>
  <div class="goBack">
    <span class="go_back" @click="$router.go(-1)">返回</span>
  </div>
</template>

<script>
export default {};
</script>

<style spoced>
.goBack {
  z-index: 1;
  position: absolute;
  line-height: 0.7rem;
  margin-left: 0.3rem;
}
.go_back {
  font-size: 0.35rem;
  color: #fff;
}
</style>