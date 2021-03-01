<template>
  <div id="app">
    <navbar></navbar>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view :key="key"></router-view>
    <!-- <login/> -->
  </div>
</template>

<script>
import Navbar from 'components/content/Navbar'
// import Login from 'views/login/Login'
export default {
  name: 'App',
  components: {
    Navbar,
    // Login
  },
    mounted() {
    // console.log('--------app挂载后---------');
    
  },
  computed: {
    // 路由切换页面不刷新
    key() {
      return this.$route.path + Math.random();
    }
  }

}
</script>
<style lang="less" scoped>
  @import "./assets/css/base.css";  
  
</style>