<template>
  <div>
    <div class="p">
      <subnav/>
      <el-row>
      <el-col :span="16">
        <playlist-info :playlist= "playlist"/>
        <song-list :songList="songList"/>
      </el-col>
      <el-col :span="8"><div></div></el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import PlaylistInfo from './PlaylistInfo'
import SongList from './SongList'
import {  getPlaylistDetail } from "network/playlist"
export default {
  name: "PlaylistDetai",
  components: {
    Subnav,
    PlaylistInfo,
    SongList
  },
  data() {
    return {
      playlist: {
        creator: {}
      },
      songList: [],
    }
  },
  created() {
    // 获取歌单详情
    const id = this.$route.query.id
    getPlaylistDetail(id).then(res => {
      this.playlist = res.data.playlist
      this.songList = res.data.playlist.tracks
    })
  },
}
</script>

<style lang="less" scoped>
  .el-row {
    width: 980px;
    margin: 0 auto;
    background: #fff;
  }
  .el-col-16 {
    padding: 30px;
  }
  .el-col-8 {
    background: palegoldenrod;
  }
</style>