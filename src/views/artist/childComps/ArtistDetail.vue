<template>
  <div>
    <subnav/>
    <el-row>
      <el-col :span="18">
        <div class="header">
          <h2>{{artist.name}}</h2>
          <span v-for="item in artist.alias" :key="item.item">{{item}}</span>
          <img :src="artist.picUrl" alt="">
        </div>
        <el-tabs type="border-card">
          <el-tab-pane label="热门作品" @click.native="itemClick(item)">
            <el-table :data="hotSongs" stripe style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"> </el-table-column>
              <el-table-column prop="date" label="日期" width="180"> </el-table-column>
              
            </el-table>
            {{hotSongs}}</el-tab-pane>
          <el-tab-pane label="所有专辑">
            <p v-for="item in hotAlbums" :key="item.item">{{item.name}}</p>
            
            {{hotAlbums}}</el-tab-pane>
          <el-tab-pane label="相关MV">{{mvs}}</el-tab-pane>
          <el-tab-pane label="艺人介绍">{{desc}}{{info}}</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import { getArtists, getArtistAlbum, getArtistMV, getArtistDesc } from "network/artist"
export default {
  name: "ArtistDetail",
  components: {
    Subnav
  },
  data() {
    return {
      artist: {},
      // tab: ['热门作品', '所有专辑', '相关MV', '艺人介绍'],
      hotSongs: [],
      hotAlbums: [],
      mvs: [],
      desc: {},
      info: []
    }
  },
  created() {
    const id = this.$route.query.id
    // 歌手单曲
    getArtists(id).then(res => {
      this.artist = res.data.artist
      this.hotSongs = res.data.hotSongs
      // console.log(res);
      
    })
    // 歌手专辑
    getArtistAlbum(id).then(res => {
      console.log(res);
      this.hotAlbums = res.data.hotAlbums
      
    })
    // 歌手MV
    getArtistMV(id).then(res => {
      // console.log(res);
      this.mvs = res.data.mvs
      
    })
    // 艺人介绍
    getArtistDesc(id).then(res => {
      this.desc = res.data.briefDesc
      this.info = res.data.introduction
      // console.log(res);
      
    })
  },
  methods: {
    itemClick(item) {
      console.log('dj');
      
      this.$router.replace({
        path: '/artist/album',
        query: {
          id: item.id
        }
      })
    }
  }
  
}
</script>

<style lang="less" scoped>
  .el-row {
    width: 980px;
    margin: 0 auto;
    border: 1px solid #bfbfbf;
  }
  .el-col-18 {
    padding: 40px;
    background: #fff;
    border-right: 1px solid #bfbfbf;
  }
  .el-col-6 {
    height: 1000px;
    background: palegoldenrod;
  }
  .header {
    height: 334px;
  }
  .header h2 {
    margin: 0;
    display: inline-block;
    height: 34px;
    font-size: 24px;
    font-weight: 500;
  }
  .header span {
    padding-left: 10px;
    font-size: 14px;
    color: #999;
  }
  .header img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border: 1px solid #bfbfbf;
    box-sizing: border-box;
  }
  .tab {
    display: flex;
    margin: 0;
    height: 40px;
    border: 1px solid #bfbfbf;
    border-top: 0;
    box-sizing: border-box;
  }
  .tab li {
    width: 136px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
</style>