<template>
  <div class="wrap">
    <div class="login">
      <div class="header">
        <span>注册</span>
        <!-- <img src="~assets/img/common/close.png" alt="" @click="closeClick"> -->
      </div>
      <div class="content">
        <div class="phone">
          <el-input placeholder="请输入用户名"
            v-model="username"></el-input>
        </div>
        <div class="password">
          <el-input placeholder="请输入登录密码"
            v-model="password"></el-input>
        </div>
        <button @change="regedClick">确 认 注 册</button>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    regedClick() {
      sessionStorage.setItem("setUser", this.username)
      sessionStorage.setItem("setUser", this.password)
    }
  }
}
</script>

<style>
  .login .el-input__inner {
    border-radius: 2px!important;
  }
  .login .el-input__inner:focus {
    border-color: #DCDFE6!important;
  }
</style>

<style lang="less" scoped>
  .wrap {
    position: relative;
  }
  .login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 340px;
    transform: translate(-50%, 50%);
    background: #fff;
    border: 1px solid #000;
    // z-index: 9999;
    box-sizing: border-box;
  }
  .login .header {
    position: relative;
    width: 500px;
    padding: 0 20px;
    height: 38px;
    line-height: 38px;
    color: #fff;
    background: #2d2d2d;
  }
  .login .content {
    padding: 40px;
    width: 500px;
    text-align: center;
  }
  .login .content .el-input, .login .content button {
    margin: 10px 0;
    width: 260px;
  }
  .login .content button {
    height: 40px;
    color: #fff;
    border: 1px solid #666;
    border-radius: 2px;
    background: #2c7dca;
  }

</style>