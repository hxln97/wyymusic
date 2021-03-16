<template>
  <div>
    <!-- <div class="test"><h2>搜索找到{{this.$route.query.type}}</h2></div> -->
    <!-- <h2>搜索"{{this.$route.query.s}}"，找到 <span>{{song.songCount}}</span> 首
      <em ref="result">{{result}}</em>
      <em v-if="this.$route.query.type = 1">单曲</em>
      <em v-if="this.$route.query.type = 100">歌手</em>
    </h2> -->
    <!-- <h2 v-cloak>找到{{songsCount || artistsCount}}首<span></span></h2> -->
    <ul class="song">
      <table>
        <tr v-for="item in songs" :key="item.item">
          <td>{{item.name}}</td>
          <td><span v-for="items in item.artists" :key="items.items">{{items.name}} </span></td>
          <td> 《{{item.album.name}}》</td>
          <td>{{item.duration | showDate}}</td>
        </tr>
      </table>
      <ul>
        <li></li>
      </ul>
      <!-- <li v-for="item in songs" :key="item.item">{{item.name}}</li> -->
    </ul>
    <ul class="artist">
      <li v-for="item in artists" :key="item.item">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </li>
      <!-- <li v-for="item in artists" :key="item.item">{{item.name}}</li> -->
    </ul>
    <ul class="album">
      <li v-for="item in albums" :key="item.item">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
        <p class="artist">{{item.artist.name}}</p>
      </li>
      <!-- <li v-for="item in albums" :key="item.item">{{item.name}}</li> -->
    </ul>
    <ul class="video">
      <li v-for="item in videos" :key="item.item">
        <img :src="item.coverUrl" alt="">
        <p>{{item.title}}</p>
        <p class="creator">by <span v-for="items in item.creator" :key="items.items" >{{items.userName}} </span></p>
      </li>
    </ul>
    <!-- <ul class="lyric">
      <li v-for="item in lrc" :key="item.item">{{item.lyrics.txt}}</li>
    </ul> -->
    <ul class="playlist">
      <!-- <li v-for="item in playlists" :key="item.item"> -->
        <table>
          <tr v-for="item in playlists" :key="item.item">
            <td><img :src="item.coverImgUrl" alt=""></td>
            <td>{{item.name}}</td>
            <td>{{item.trackCount}}</td>
          </tr>
        </table>
      <!-- </li> -->
    </ul>
    <ul class="radio">
      <li v-for="item in radio" :key="item.item">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
        <p class="artist">{{item.dj.nickname}}</p>
      </li>
      <!-- <li v-for="item in albums" :key="item.item">{{item.name}}</li> -->
    </ul>
  </div>
</template>

<script>
import { getSearch } from "network/search"
import {formatDate} from "common/utils"
export default {
  name: "SearchDetail",
  data() {
    return {
      songs: [],
      artists: [],
      albums: [],
      videos: [],
      lrc: [],
      playlists: [],
      radio: [],
      user: [],
      // show: false,
      // songsCount: Number,
      // artistsCount: Number
      // showS: false,
      // showA: false,
      // showB: false,
      // singleShow: false
    }
  },
  created() {
    const keywords = this.$route.query.s
    const type = this.$route.query.type
    getSearch(keywords, type, 100).then(res => {
    // getSearch(keywords, type, offset).then(res => {
      this.songs = res.data.result.songs
      this.songsCount = res.data.result.songCount
      let songPages = this.songsCount / 30
      this.artists = res.data.result.artists
      this.artistsCount = res.data.result.artistCount
      this.albums = res.data.result.albums
      this.videos = res.data.result.videos
      // this.lrc = res.data.result.songs
      this.playlists = res.data.result.playlists
      this.radio = res.data.result.djRadios
      this.user = res.data.result.userprofiles
      console.log(res);
      // console.log(songPages);
      
      // console.log(this.songsCount);
      
      // console.log(type);
      // console.log(this.$route.query.type);
      
      
      
    })
  },
  mounted() {
    // this.$bus.$on('typename',(value) => {
    //     const name = this.value
    //   console.log(name);
    //   })
    // console.log(item.type);
    
  },
  filters: {
    showDate(value) {
      const date = new Date(value)
      return formatDate(date, 'mm:ss')
    }

  },
  methods: {
    // change() {
    //   if(this.$route.query.type = 1) {
    //     this.showA = true
    //   }
    // }
    // show() {
    //   let Show = ''
    //   if(this.$route.query.type = 1) {
    //     Show = true
    //   } else {
    //     Show = false
    //   }
    //   return Show
    // },
    // showt() {
    //   let Showt = ''
    //   if(this.$route.query.type = '单曲') {
    //     Showt = true
    //   } else {
    //     Showt = false
    //   }
    //   return Showt
    // }
  },
  computed: {
    
  }
}
</script>

<style lang="less" scoped>
  // .h2 {
  //   position: relative;
  //   top: -100px;
  // }
  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    justify-content: space-between;
  }
  img {
    width: 130px;
    height: 130px;
    border: 1px solid #bfbfbf;
    box-sizing: border-box;
  }
  .song table {
    width: 100%;
  }
  .song table tr {
    padding: 10px;
    height: 40px;
  }
  .song table tr:nth-child(2n) {
    background: #f7f7f7;
  }
  .artist li, .album li, .radio li {
    height: 184px;
  }
  .artist p, .album p, .video p, .radio p {
    margin-top: 3px;
    width: 130px;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .video li {
    height: 180px;
  }
  .video img {
    width: 160px;
    height: 90px;
  }
  .video p {
    margin-top: 3px;
    width: 160px;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .album .artist ,.video .creator, .radio {
    font-size: 10px;
    color: #666;
  }
  [v-cloak] {
    display: none;
  }
  .playlist img {
    width: 50px;
    height: 50px;
  }
</style>