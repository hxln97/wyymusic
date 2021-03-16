<template>
  <div>
    <subnav/>
    <div class="wrap">
      <div class="header">
        <playlist-header :category="category"
          @select="categorySelect"/>
      </div>
      <div class="content">
        <router-view :key="key"></router-view>
        <playlist-content :playlist="playlist" v-show="isShow"/>
        
    <playlist-category-item :playlist="playlist"/>
        <!-- <playlist-category/> -->
      </div>
    </div>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import PlaylistHeader from './childComps/PlaylistHeader' 
import PlaylistContent from './childComps/PlaylistContent'
import PlaylistCategoryItem from './childComps/PlaylistCategoryItem'
import { getPlaylistCategory,getPlaylistCategoryContent } from "network/playlist"
// import PlaylistCategory from "./childComps/PlaylistCategory"
export default {
  name: "Playlist",
  components: {
    Subnav,
    PlaylistHeader,
    PlaylistContent,
    PlaylistCategoryItem,
  },
  data() {
    return {
      category: [],
      routerAlive: true,
      playlist: [],
      routerAlive: true,
      isShow: false
    }
  },
  created() {
    // 分类信息
    getPlaylistCategory().then(res => {
      this.category = res.data.sub
      // console.log(res);
    })
    // 分类默认全部时的歌单
    const cat = this.$route.query.cat
    getPlaylistCategoryContent('全部').then(res => {
      this.playlist = res.data.playlists
    })

    // this.getPlaylistCategoryContent()
     getPlaylistCategoryContent(cat).then(res => {
      this.playlist = res.data.playlists
      
    })
     
  },
  mounted() {
    
  },
  methods: {
    // getPlaylistCategoryContent() {
    //   const cat = this.$route.query.cat
    // getPlaylistCategoryContent(cat,100).then(res => {
    //   this.playlist = res.data.playlists
      
    // })
    // }
    // ,
    categorySelect(item) {
       this.$router.push({
        path:'/find/playlist/category',
        query: {
          cat: item.name
        }
      })
    // console.log(item);
    },
    isShow() {
      if(this.$route.query.path === '/find/playlist') return this.isShow = true
    }
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
  .wrap {
    width: 980px;
    margin: 0 auto;
    padding: 40px;
    background: #fff;
  }
</style>