<template>
  <div>
    <top-title>
      <span slot="rigister" @click="$router.push('/register')" class="rigister"
        >注册</span
      >
    </top-title>
    <div class="form">
      <p>账号:</p>
      <input type="text" v-model="phone" />
      <p>密码:</p>
      <input type="text" v-model="password" />
      <p class="wjmm"><router-link to="/register">忘记密码</router-link></p>
      <u-btn>
        <button class="btn" @click="getUser()">登录</button>
      </u-btn>
    </div>
    <!-- <transition enter-active-class="animate__animated animate__fadeOut"> -->
    <u-alert :isShow="isShow">
      {{ msg }}
    </u-alert>
    <!-- </transition> -->
  </div>
</template>

<script>
import { reqLogin } from "../utils/request";
export default {
  data() {
    return {
      phone: "",
      password: "",
      msg: "",
      isShow: false,
    };
  },
  methods: {
    getUser() {
      reqLogin(this.phone, this.password).then((res) => {
        if (res.data) {
          this.msg = res.data.msg;
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false;
          }, 1500);
        }
        if (res.data.code == 200) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("uid", res.data.list.uid);
          sessionStorage.setItem("token", res.data.list.token);
          setTimeout(() => {
            this.$router.push("/index");
          }, 2000);
        } else {
          localStorage.setItem("isLogin", "");
        }
      });
    },
  },
};
</script>

<style>
.rigister {
  font-size: 0.35rem;
  position: absolute;
  right: 0.3rem;
  z-index: 1;
  top: 0;
  line-height: 0.7rem;
}

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
.wjmm {
  text-align: right;
}
</style>