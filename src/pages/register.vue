<template>
  <div>
    <top-title>
      <go-back slot="goBack"></go-back>
    </top-title>
    <div class="form">
      <p>手机号:</p>
      <input type="text" v-model="phone" />
      <p>昵称:</p>
      <input type="text" v-model="nickname" />
      <p>密码:</p>
      <input type="text" v-model="password" />
      <u-btn>
        <button class="btn" @click="setUser({phone, nickname, password})">
          注册
        </button>
      </u-btn>
    </div>
    <u-alert :isShow="isShow">
      {{ msg }}
    </u-alert>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      phone: "",
      nickname: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({
      msg: "msg",
      isShow: "isShow",
    }),
  },
  methods: {
    ...mapActions({
      setUser: "requestRegister",
    }),
  },
  watch: {
    msg() {
      if (this.msg == "注册成功") {
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      }
    },
  },
};
</script>

<style>
.form {
  position: absolute;
  font-size: 0.3rem;
  width: 85%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form p {
  margin-top: 0.5rem;
}
.form input {
  width: 100%;
  padding-left: 0.8rem;
  border-bottom: 0.01rem solid black;
  box-sizing: border-box;
}
</style>