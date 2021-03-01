<template>
  <div class="wrap">
   <div class="login">
      <div class="header">
        <span>登录</span>
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
        <button @click="loginedClick">确 认 登 录</button>
        <button class="reg" @click="regClick">免 费 注 册</button>
      </div>
    </div> 
  </div>
</template>

<script>
// import { mapGetters } from "vuex"
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  created() {
    // this.$bus.$on('loginClick', () => {
    //   // this.isShow = true
    // })
  },
  // beforeDestroy() {
  //   this.$bus.$off('loginClick')
  // },
  comuted: {
    // ...mapGetters(["loginUsername"])
  },
  methods: {
    // 确认登录
    loginedClick() {
      // this.$bus.$emit('loginedClick')
      // 将用户名保存到sessionStorage中
      sessionStorage.setItem("userName", this.username)
      // 将用户名传入vuex中
      this.$store.dispatch("setUser", this.username)
      // 登陆成功跳转首页
      this.$router.push('/find')
      
      // if(this.$store.user.username = this.username) {
        //  if(this.$store.username = this.username) {
        //    this.$store.commit("isLogin", 1);
        //    this.isShow = false
        //    this.$bus.$emit('loginedClick', this.username)
        //  } else {
        //    console.log("用户名或密码错误");
           
        //  }
        //  this.$store.commit("getToken", 'zxc123')
      //   if(this.$store.user.password = this.password) {
      //     this.isShow = false
      //     this.$bus.$emit('loginedClick', this.username)
      //   } else {
      //     alert('用户名或密码输入密码错误，请重新输入')
      //     this.password = ''
      //   }
      // } else{
      //   alert('用户名或密码输入错误，请重新输入')
      //   this.username = ''
      // }
      
      // console.log('dl');
      // console.log(this.username);
    },
    regClick() {
      this.$router.push('/register')
    }
  },
  beforeRouterEnter: (to, from, next) => {
    next()
    
    // next(vm => {
    //   vm.$store.dispatch("setUser", null)
    // })
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
    .reg {
      // margin-top: 20px;
      background: #fff;
      border: 0;
      color: #2c7dca;
    }
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