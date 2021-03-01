<template>
  <div>
    <div class="m-nav">
      <div class="nav">
        <el-row>
          <el-col :span="24">
              <div class="left">
                <!-- <img src="~assets/img/common/logo.png" alt=""> -->
                <!-- <a>网易云音乐</a> -->
                <p v-for="(item ,index) in titles" 
                  :item="item" :key="index"
                  :class="{active: index === currentIndex}"
                  @click="itemClick(index)">{{item}}</p>
                </div>
              <div class="right">
                <!-- input获得焦点清空内容，失去焦点恢复 -->
                <el-input id="searchInput"
                  placeholder="音乐/视频/电台/用户"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='音乐/视频/电台/用户'"
                  prefix-icon="el-icon-search"
                  v-model="message"
                  @keyup.enter.native="search"/>
                <button @click="buttonClick">创作者中心</button>
                <span ref="login" @click="loginClick" v-show="!isLogin">登录</span>
                <!-- <router-link to="/login"><span ref="login">登录</span></router-link> -->
                <span v-show="isLogin" @mouseenter="enterusername">{{this.$store.state.currentUser}}</span>
                <div class="userinfo" v-show="userinfoShow" @mouseleave="leaveusername">
                  <p @click="collectCilck">我的收藏</p>
                  <p @click="logout">退出登录</p>
                </div>
              </div>
          </el-col>
        </el-row> 
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex"
export default {
  name: "Navbar",
  data() {
    return {
      titles: ['发现音乐', '我的音乐', '朋友', '下载客户端'],
      currentIndex: 0,
      message: '',
      userinfoShow: false, //是否显示用户信息面板
      // userName: sessionStorage.name
      // loginUsername: []
    }
  },
  computed: {
    // console.log(this.$store.state.logigUsername);
    // console.log(this.userName);
    // ...mapGetters(["loginUsername"])
    isLogin () {
    // this.sessinoUsername = sessionStorage.getItem('user')
      if(sessionStorage.getItem("userName")) {
        this.$store.commit("userStatus", sessionStorage.getItem("userName"));
      } else {
        this.$store.commit("userStatus", null);
      }
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      switch(index) {
          case 0:
            this.$router.push('/find')
            break
          case 1:
            this.$router.push('/user')
            break
          case 2:
            this.$router.push('/friend')
            break
          case 3:
            this.$router.push('/mall')
            break
          case 4:
            this.$router.push('/musician')
            break
          case 5:
            this.$router.push('/download')
            break
          // case 6:
          //   this.$router.push('/creator')
          //   break
      }       
    },
    // 创作者中心
    buttonClick() {
      this.$router.push('/creator').catch(err => {
        console.log(err);
      })
    },
    // 点击登录
    loginClick() {
      // if(this.$refs.login.innerHTML = '登录') {
      //   this.$bus.$emit('loginClick')
      // }
      this.$router.push({path: '/login'})
    },
    // 鼠标移入移出控制用户信息显示
    enterusername() {
      this.userinfoShow = true
    },
    leaveusername() {
      this.userinfoShow = false
      
    },
    // 退出登录
    logout() {
      this.userinfoShow = false
      this.$store.dispatch("setUser", '')
      // this.$store.commit("userStatus", null)
      this.$router.push('/')
      console.log(this.$store.state.isLogin);
      
    },
    collectCilck() {
      this.$router.push({
        path: '/collection'
      })
    },
    search() {
      this.$router.push({
        path: '/search/m',
        query: { 
          s: this.message,
          type: 1
        }
      })
      // console.log(this.message);
      this.$nextTick(() => {
        this.$bus.$emit('search',this.message)
      })
    },
    // userName() {

    // }
  },
  created() {
    // this.userName = sessionStorage.getItem('user')
    // console.log(this.$store.state.logigUsername);
    // console.log(this.sessinoUsername);
    this.$bus.$on('loginedClick', (value) => {
      // sessionStorage.name = value
      // this.name = sessionStorage.name
      // console.log(this.$store.state.logigUsername);
      // console.log(sessionStorage.getItem('user'));
        // this.loginShow = false
        // this.userNameShow = true
        
    })
  },
  beforeMount() {
    // console.log(this.sessinoUsername);
    // console.log(sessionStorage.getItem('user'));
  }
}
</script>
<style lang="less">
  .el-input__icon  {
    height: 32px;
    line-height: 32px;
    /* height: 10rem / @basefont;  */
    /* line-height: 10rem / @basefont;  */
  }
  .el-input__inner {
    height: 32px;
    border-radius: 20px!important;
    /* margin-top: 2px;
    height: 10rem / @basefont;
    border-radius: 6rem / @basefont; */
  }
    
  .el-input__inner:focus {
      border-color: #fff!important;
  }
</style>
<style lang="less" scoped>
  
  .m-nav {
    position: relative;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    // margin-bottom: 70px;
    background: #242424;
    border-bottom: 3px solid #C20C0C;
  }
  .nav {
    position: relative;
    width: 1100px;
    height: 70px;
    line-height: 70px;
    background: #242424;
    // height: 70px;
    // line-height: 70px;
    // font-size: 18px;
    // height: 16rem / @basefont;
    // line-height: 16rem / @basefont;
    // font-size: 4rem / @basefont;
    text-align: center;
    color: #ccc;
    margin: 0 auto;
    padding: 0;
  }
  .nav .left {
    position: absolute;
    width: 60%;
    height: 70px;
    // height: 16rem / @basefont;
    // line-height: 16rem / @basefont;
    // font-size: 6rem / @basefont;
    color: #fff;
    // left: 50px;
    // left: 50rem / @basefont;
    // bottom: .5rem / @basefont;
  }
  .nav .left img {
    // width: 190px;
    // height: 30px;
    // width: 10rem / @basefont;
    // height: 10rem / @basefont;
    vertical-align: middle;
    margin-right: 8px;
    // padding-right: 3px;
    // padding-right: 2rem / @basefont;
  }
  // .nav .left p {
  //   display: inline-block;
  //   margin: 0;
  //   padding-right: 10px;
  //   font-size: 18px;
  //   // font-size: 6rem / @basefont;
  //   // padding-right: 12rem / @basefont;
  // }
  .nav .left a {
    font-size: 16px;
    margin: 0 3px;
  }
  .nav .left p {
    display: inline-block;
    margin: 0;
    padding: 0 20px;
    // padding: 0 8rem / @basefont;
    // height: 16rem / @basefont;
    // line-height: 16rem / @basefont;
    // font-size: 5rem / @basefont;
    color: #ccc;
  }
  // .nav .left :nth-child(2) {
  //   background: black;
  // }
  .nav .active {
    background: black;
  }
  .nav .left p:hover {
    background:black;
    cursor: pointer;
  }
  .nav .right {
    width: 34%;
    height: 70px;
    position: absolute;
    left: 700px;
    margin: 0;
    padding: 0;
  }
  .el-input {
    width: 160px;
    height: 70px;
    line-height: 70px;
    font-size: 12px;
    // width: 70rem / @basefont;
    // color: #999;
    
  }
  .right button {
    display: inline-block;
    margin: 0 8px;
    width: 90px;
    height: 30px;
    line-height: 30px;
    color: #ccc;
    border: 1px solid #5b5b5b;
    border-radius: 15px;
    background: #272727;
    // margin: 0 5rem / @basefont;
    // width: 36rem / @basefont;
    // height: 8rem / @basefont;
    // line-height: 8rem / @basefont;
    // border: .3rem / @basefont solid #5b5b5b;
    // border-radius: 6rem / @basefont;
  }
  .right button:hover {
    border: 1px solid #fff;
    // border: .3rem / @basefont solid #fff;
    color: #fff;
  }
  button:focus{
    outline:0;
  }
  .right span {
    // position: relative;
    // right: 0px;
    // font-size: 14px;
    // margin-left: 2px;
    
    // min-width: 30px;
    color: #787878;
  }
  .right span:hover {
    // border-bottom: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    // border-bottom: .5rem / @basefont solid #5b5b5b;
  }
  .username {
    display: inline-block;
    // min-width: 30px;
    height: 30px;
    line-height: 30px;
  }
  // .right span:hover {
  //   color: #fff;
  // }
  .userinfo {
    position: absolute;
    padding: 5px;
    left: 270px;
    top: 50px;
    width: 100px;
    height: 56px;
    line-height: 23px;
    color: #777;
    border: 1px solid #777;
    border-radius: 5px;
    background: #fff;
  }
  .userinfo::before {
    content: '';
    position: absolute;
    left: 45px;
    top: -6px;
    // width: 0;
    // height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #fff;
  }
  .userinfo p:hover {
    background: #f0f0f0;
  }
</style>