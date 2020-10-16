<template>
  <div class="btn-wrap">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.btn-wrap{
    width: 100%;
    text-align: center;
}
.btn{
  text-align: center;
  width: 90%;
  height: 0.7rem;
  background: orange;
  color: #fff;
  border-radius: 0.15rem;
  margin: 0.5rem 0;

}   
</style>