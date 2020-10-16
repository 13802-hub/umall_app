<template>
  <div class="topTitle_wrap">
    <div class="topTitle">
      <slot name="goBack"></slot>
      <h2>
        {{ $route.name }}
        <slot name="name"></slot>
      </h2>
      <slot name="rigister"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topTitle_wrap{
  position: relative;
  top: 0;
  height: 0.7rem;
  z-index: 99;
}
.topTitle {
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
h2 {
  font-size: 0.35rem;
  text-align: center;
  height: 0.7rem;
  background: orange;
  line-height: 0.7rem;
}
</style>