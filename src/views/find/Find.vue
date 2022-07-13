<template>
  <div>
    <subnav/>
      <div class="banner">
        <el-row>
          <el-col :span="16"><swiper></swiper></el-col>
          <el-col :span="8">
            <div class="top"><a href="/download"><img src="../../assets/img/common/download.png" alt=""></a></div>
            <div class="bottom"><p>PC 安卓 iPhone iPad Mac 六大客户端</p></div>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="16">
            <el-container>
              <el-header class="recommend-header">
                <a href="/find/playlist" class="hot">热门推荐</a>
                <div class="recommend-category">
                  <a href="/find/playlist/category?cat=华语">华语</a>
                  <a href="/find/playlist/category?cat=流行">流行</a>
                  <a href="/find/playlist/category?cat=摇滚">摇滚</a>
                  <a href="/find/playlist/category?cat=民谣">民谣</a>
                  <a href="/find/playlist/category?cat=电子">电子</a>
                </div>
                <!-- <div class="recommend-category"><recommend-category :playlist="playlist"/></div> -->
                <a href="/find/playlist" class="more">更多</a>
              </el-header>
              <el-main>
                <div class="personalized">
                  <recommend-item :recommend="recommend"
                                     @select="recommendDetail"/>
                </div>
              </el-main>
            </el-container>
            
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import Swiper from 'components/common/swiper/Swiper' 
import RecommendItem from './childComps/RecommendItem'
import { getBanner, getPersonalCategory, getPersonalized } from "network/find";
export default {
  name: "Find",
  components: {
    Subnav,
    Swiper,
    RecommendItem
  },
  data() {
    return {
      banner: [],
      playlist: [],
      recommend: [],
      result: null
    }
  },
  beforeCreate() {
    // console.log('---------创建前--------');
    
  },
  created() {
    this.getPersonalized(this.id)
    this.getBanner()
    // console.log(this.$options.data);
    
    // console.log('---------创建后--------');
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    // 热门推荐歌单
    getPersonalized() {
      getPersonalized(this.id).then(res => {
      // Status Code:200 请求成功走这里
      this.recommend = res.data.result.slice(0, 8)
    }).catch(err => {
      // Status Code:404等等 捕捉异常，请求失败走这里
    })
    },
    getBanner() {
      getBanner().then(res => {
        this.banner = res.data.banners
        
      })
    },
    /**
     * 事件监听相关的方法
     */
    // 跳转热门推荐详情页面
    recommendDetail(item) {
      // this.$router.push('/playlist/detail' + item.id)
      this.$router.push({
        path: '/recommend/detail',
        query: {
          id: item.id
        }
      })
    },
    
  },
  // beforeMount() {
  //   console.log('--------挂载前---------');
    
  // },
  // mounted() {
  //   console.log('--------挂载后---------');
    
  // },
  // beforeUpdate() {
  //   console.log('---------更新前---------');
    
  // },
  // updated() {
  //   console.log('---------更新后--------');
    
  // },
  // beforeDestroy() {
  //   console.log('---------销毁前---------');
    
  // },
  // destroyed() {
  //   console.log('-------销毁后---------');
    
  // }
}
</script>
<style lang="less" scoped>
  // 轮播图
  .banner {
    position: relative;
    height: 285px;
  }
  .banner .el-row {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 980px;
    height: 285px;
  }
  .banner .el-col-16 {
    width: 730px;
  }
  .banner .el-col-8 {
    width: 250px;
    line-height: 285px;
    background: #3c3c3c;
  }
  .banner .el-col-8 .top {
    position: relative;
    width: 250px;
    height: 200px;
  }
  .banner .el-col-8 .top a img {
    position: absolute;
    bottom: 50px;
    left: 26px;
    width: 200px;
    padding: 5px 0;
    background: #4c8aee;
  }
  .banner .el-col-8 a img:hover {
    background: #2263bc;
  }
  .banner .el-col-8 .bottom {
    width: 250px;
    height: 85px;
  }
  .banner .el-col-8 .bottom p {
    margin: 0;
    font-size: 14px;
    text-align: center;
    color: #ccc;
    height: 60px;
    line-height: 60px;
  }
  .content {
    width: 980px;
    margin: 0 auto;
  }
  .content .el-col-16 {
    padding: 0 20px 40px;
    width: 730px;
    background: #fff;
    box-sizing: border-box;
  }
  .content .el-col-8 {
    width: 250px;
    height: 573px;
    background: #d3dce6;
  }

 .el-header {
    position: relative;
    background-color: #fff;
    color: #333;
    border-bottom: 2px solid #9B0909;
  }
  .el-header .hot {
    padding-left: 10px;
    font-size: 20px;
    line-height: 70px;
    color: #000;
  }
  .el-header .recommend-category {
    position: absolute;
    left: 120px;
    bottom: 14px;
  }
  .el-header .recommend-category a {
    padding: 0 10px;
    border-right: 1px solid #ccc;
  }
  .el-header .recommend-category a:hover {
    text-decoration: underline;
  }
  .el-header .recommend-category a:last-child {
    border: 0;
  }
  .el-header .more {
    float: right;
    line-height: 70px;
  }
  .el-header .more:hover {
    text-decoration: underline;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
