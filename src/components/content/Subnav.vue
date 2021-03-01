<template>
  <div>
      <div class="subnav">
    <el-menu :default-active="this.$route.path" router mode="horizontal">
      <el-menu-item v-for="(item,index) in subnavList" :key="index" :index="item.name">
        {{ item.subnavItem }}
      </el-menu-item>
    </el-menu>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  data() {
    return {
      subnavList:[
        {name:'/find',subnavItem:'推荐'},
        {name:'/find/ranking',subnavItem:'排行榜'},
        {name:'/find/playlist',subnavItem:'歌单'},
        {name:'/find/dj',subnavItem:'主播电台'},
        // {name:'/find/artist',subnavItem:'歌手'},
        // {name:'/find/album',subnavItem:'新碟上架'},
      ]
    }
  },
    
}
</script>

<style lang="less">
  .subnav {
    // margin-top: 70px;
    background: #C20C0C;
  }
  .subnav ul li {
    display: inline-block;
    margin: 0 10px!important;
    height: 20px!important;
    line-height: 20px!important;
  }
  .subnav .el-menu {
    width: 744px;
    margin: 0 auto;
    height: 34px;
    line-height: 34px;
    background: #C20C0C;
    border: 0!important;
  }
  .subnav .el-menu--horizontal>.el-menu-item {
    font-size: 12px;
    color: #fff;
    margin-top: 8px!important;
    padding: 0 12px;
    transition: none;
    box-sizing: border-box;
  }
  .subnav .el-menu-item.is-active {
    color: #fff!important;
    background: #9B0909 !important;
    border: 0 !important;
    border-radius: 12px;
  }
  .subnav .el-menu-item:hover {
    color: #fff!important;
    background-color: #9B0909!important;
    border-radius: 12px;
  }
</style>