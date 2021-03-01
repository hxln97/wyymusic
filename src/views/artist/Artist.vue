<template>
  <div>
    <subnav/>
    <el-row>
      <el-col :span="5"><artist-category :category="category" @select="artistList"/></el-col>
      <el-col :span="19">
        <router-view :key="Math.random()"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import ArtistCategory from './childComps/ArtistCategory'
import { getHotArtist } from "network/artist"
export default {
  name: "Artist",
  components: {
    Subnav,
    ArtistCategory,
  },
  data() {
    return {
      artist: [],
      category: [
          {id:1001,name:'华语男歌手',type:1,area:7},
          {id:1002,name:'华语女歌手',type:2,area:7},
          {id:1003,name:'华语组合/乐队',type:3,area:7},
          {id:2001,name:'欧洲男歌手',type:1,area:96},
          {id:2002,name:'欧洲女歌手',type:2,area:96},
          {id:2003,name:'欧洲组合/乐队',type:3,area:96},
          {id:6001,name:'日本男歌手',type:1,area:8},
          {id:6002,name:'日本女歌手',type:2,area:8},
          {id:6003,name:'日本组合/乐队',type:3,area:8},
          {id:7001,name:'韩国男歌手',type:1,area:16},
          {id:7002,name:'韩国女歌手',type:2,area:16},
          {id:7003,name:'韩国组合/乐队',type:3,area:16},
          {id:4001,name:'其他男歌手',type:1,area:0},
          {id:4002,name:'其他女歌手',type:2,area:0},
          {id:4003,name:'其他组合/乐队',type:3,area:0},
      ]
    }
  },
  created() {
    this.getHotArtist()
  },
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // },
  methods: {
    getHotArtist() {
      getHotArtist().then(res=> {
        this.artist = res.data.artists
        
      })
    },
    artistList(item) {
      this.$router.push({
        path: '/find/artist/cat',
        query: {
          id: item.id
        }
      })
    },
    // reload() {
    //   this.routerAlive = false
    //   this.$nextTick(() => {
    //     this.routerAlive = true
    //   })
    // }
  },
  // computed: {
  //   // 路由切换页面不刷新
  //   key() {
  //     return this.$route.path + Math.random();
  //   }
  // }
  // mounted() {
  //   
  // }
}
</script>

<style lang="less" scoped>
  .el-row {
    width: 982px;
    margin: 0 auto;
  }
  .el-col-5 {
    padding: 20px 10px 40px;
    border: 1px solid #d3d3d3;
    background: #f9f9f9;
  }
  .el-col-19 {
    padding: 40px;
    // background: #fff;
  }
</style>