<template>
  <div class="search">
    <el-input class="searchInput"  v-model="message" ref="input" @click="searchClick" @keyup.enter.native="searchEnter">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="content">
        <!-- <h3>搜索找到{{result}}</h3> -->
        <!-- <h3>搜索找到{{this.$route.query.type}}</h3> -->
        <!-- <h3 v-show="this.$route.query.type=1">搜索找到单曲</h3>
        <h3 v-show="this.$route.query.type=10">搜索找到歌手</h3> -->
        <ul class="tab">
          <li v-for="item in tab.slice(0,6)" :key="item.item" 
            :class="{active: item.type === currentType}"
            @click="tabClick(item)">
            {{item.name}}</li>
        </ul>
    </div>
    <router-view :key="Math.random()"></router-view>
  </div>
</template>

<script>
import { getSearch } from "network/search"
export default {
  name: "Search",
  data() {
    return {
      song: [],
      songCount: Number,
      message: this.$route.query.s,
      currentType: 1,
      tab: [
        {type: 1, name: '单曲'},
        {type: 100, name: '歌手'},
        {type: 10, name: '专辑'},
        {type: 1014, name: '视频'},
        // {type: 1006, name: '歌词'},
        {type: 1000, name: '歌单'},
        {type: 1009, name: '主播电台'},
        {type: 1002, name: '用户'},
        // {type: 1018, name: '综合'},
        // {type: 1004, name: 'MV'},
      ]
    }
  },
  created() {
    // this.$bus.$on('search', (value) => {
    //   this.value = value
    //   // const keywords = this.value
    //   // const type = this.$route.query.type
    //   // getSearch(keywords, type).then(res => {
    //   //   // this.song = res.data.result.songs
    //   //   // this.songCount = res.data.result.songCount
    //   //   // console.log(res);
    //   // })
    // })
    
  },
  beforeDestroy() {
    this.$bus.$off('search')
  },
  methods: {
    searchEnter() {
      this.getSearch()
    },
    searchClick() {
      this.getSearch()
    },
    getSearch() {
        const keywords = this.message
        // const type = this.$route.query.type
        // getSearch(keywords, type).then(res => {
        //   // console.log(res);
          
        // this.song = res.data.result
        // this.artists = res.data.result
        // this.albums = res.data.result
        // this.songCount = res.data.result.songCount
        // console.log(keywords);
        this.$router.push({
          path: '/search/m',
          query: {
            s: keywords,
            type: this.$route.query.type
          }
        // })
      })
      },
      // 搜索结果，跳转不同的分类
    tabClick(item) {
      this.currentType = item.type;
      // this.$bus.$emit('select',item)
      // console.log(this.$route.query.type);
      // console.log(item.type);
      
      
      // result
      // this.$refs.result.innerhtml = item.name
      // var obj = document.getElementsByTagName('em')
      // var obj = document.createElement('em')
      // obj.innerHTML = item.name
      // document.getElementsByTagName('h2').appendChild('em')
      // console.log(obj.innerHTML);
      
      this.$router.push({
        path: '/search/m',
        query: {
          s: this.$route.query.s,
          type: item.type
        }
      })
    }
  },
  computed: {
    result() {
      
      // this.$bus.$emit('typename', this.result)
      // console.log(this.currentType);
      
      // let showMessage = '';
      // switch(this.$route.query.type) {
      //   case 1: 
      //     showMessage = '单曲' ;
      //     break
      //   case 100:
      //     showMessage = '歌手'
      //     break
      // }
      // let showMessage = '';
      // if(this.$route.query.type = 1) {
      //   showMessage = '单曲' ;
      // } else if(this.$route.query.type = 100) {
      //   showMessage = '歌手' ;
      // } else {
      //   showMessage = '歌' ;
      // }
      // return showMessage
      // console.log(showMessage);
      // console.log(this.$route.query.type);
      
    }
    
  },
  //  跳转相同路由不同参数，解决页面数据不自动刷新
  // watch: {   
  //   '$route' (to, from) {   
  //     this.$router.go(0);  
  //   }
  // }
}
</script>

<style>
  .searchInput .el-input__inner {
    border-radius: 0!important;
  }
  .searchInput .el-input__inner:focus {
    border-color: #DCDFE6!important;
  }
</style>
<style lang="less" scoped>
  .search {
    margin: 0 auto;
    padding: 40px;
    width: 980px;
    // height: 1000px;
    background: #fff;
    border: 1px solid #bfbfbf;
  }
  .searchInput {
    position: relative;
    left: 50%;
    width: 420px;
    height: 40px;
    font-size: 12px;
    transform: translate(-50%);
  }
  h2 {
    margin: 15px 0; 
    font-size: 12px;
    font-weight: normal;
    color: #999;
  }
  h2 span {
    color: #c20c0c;
  }
  [v-cloak] {
    display: none;
  }
  // .tab-m {
  //   height: 72px;
  // }
  .tab {
    margin: 50px 0 10px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-top: 2px solid #ccc;
  }
  .tab li {
    padding: 0 20px;
    text-align: center;
  }
  // .tab li:first-child {
  //   margin-top: -2px;
  //   border-top: 2px solid #c20c0c;
  //   background: #fcfcfc;
  // }
  .active {
    margin-top: -2px;
    border-top: 2px solid #c20c0c;
    background: #fcfcfc;
  }
</style>