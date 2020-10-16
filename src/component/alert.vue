<template>
  <!-- <transition enter-active-class="animate__animated animate__backOutDown"> -->
  <div class="uAlert" v-if="show">
    <p><slot></slot></p>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: ["isShow"],
  watch: {
    isShow() {
      this.show = this.isShow;
    },
  },
};
</script>

<style scoped>
.uAlert {
  min-width: 40%;
  height: 0.8rem;
  border-radius: 0.15rem;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
}
.uAlert p {
  text-align: center;
  line-height: 0.8rem;
  color: #fff;
  font-size: 0.3rem;
}
</style>