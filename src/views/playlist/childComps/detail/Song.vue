<template>
  <div>
    <subnav/>
    <el-row>
      <el-col :span="16">
        <!-- <p>{{$store.state.collectList}}</p> -->
        <div v-for="item in song" :key="item.item">
          <div class="cover">
              <img :src="item.al.picUrl" alt="">
          </div>
          <div class="introduce">
            <div class="header">
              <span class="sign">单曲</span>
              <span class="title">{{item.name}}</span>
              <p v-for="item in item.alia" :key="item.item">{{item}}</p>
            </div>
            <div class="info">
              <p>歌手：
                <span v-for="item in item.ar" :key="item.item">
                  <span>{{item.name}} </span>
                </span>
              </p>
              <p>所属专辑：<span>{{item.al.name}}</span></p>
            </div>
            <!-- 按钮 -->
            <div class="btns">
              <div class="play">
                <button>
                  <img src="~assets/img/common/play.png" alt="">
                    <span> 播放</span>
                </button>
              </div>
              <div class="subscribed">
                <button @click="collectClick">
                  <img src="~assets/img/common/subscribed.png" alt="">
                  收藏
                </button>
              </div>
              <div class="share">
                <button>
                  <img src="~assets/img/common/share.png" alt="">
                    分享
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul id="lyric" ref="lyric">
        </ul>
          <button ref="btn" class="btn" @click="btnClick" v-show="isShow">展开</button>
     </el-col>
      <el-col :span="8"></el-col>
      <div v-for="item in songUrl" :key="item.item">
        <audio :src="item.url" 
          controls="controls"
          ref="audio">
        </audio>
      </div>
    </el-row>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import {  getSongDetail, getLyric, getSongUrl } from "network/playlist"
export default {
  name: "Song",
  components: {
    Subnav,
  },
  data() {
    return {
      song: [],
      lyric: [],
      lrc: [],
      songUrl: [],
      isShow: true,
      audio: {
        currentTime: 0,
        maxTime: 0,
        playing: false, //是否自动播放
        muted: false, //是否静音
        speed: 1,
        waiting: true,
        preload: 'auto'
      },
      // songList: {}
    }
  },
  methods: {
    btnClick() {
      var obj = document.getElementById('lyric');
      var li = obj.getElementsByTagName('li');
      var total_height = obj.scrollHeight;//文章总高度
      // console.log(li.length);
      if(this.$refs.btn.innerHTML == "展开") {
        this.$refs.lyric.style.height = total_height + 'px';
        this.$refs.btn.innerHTML = "收起";
        delete this.$refs.lyric.style.height;
      } else {
        this.$refs.lyric.style.height = 290 + 'px';
        this.$refs.btn.innerHTML = "展开"
      }
    },
    getLyric() {
      const id = this.$route.query.id
      getLyric(id).then(res=> {
        this.lyric = res.data.lrc.lyric;
        // 解析歌词
        const lrcs = this.lyric.split('\n') //用换行符将字符串拆分成数组
        // 定义一个数组来分别保存数据和歌词
        const lyrics = {
          t: [],
          c: [],
        };
        for(var i in lrcs) {
          var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//  取[]间的内容
          var c = lrcs[i].substring(lrcs[i].lastIndexOf("]") + 1) //截取]后面的歌词
          if(c == '') { // 筛选掉没有内容的歌词
          } 
          else if(isNaN(t)) { // 判断[]的内容是否为数字，筛选掉没有时间的歌词
            lyrics.t.push(t); //将时间的数据全部放入到lyrics.t中
            lyrics.c.push(c);// 将歌词的数据全部放入到lyrics.c中
          }
        }; 
        // 渲染歌词
        lyrics.c.forEach(function (arg) {
          var li = document.createElement('li');
          li.innerHTML = arg
          document.getElementById("lyric").appendChild(li)
        })
        // 展开按钮是否显示
        var obj = document.getElementById('lyric');
        var li = obj.getElementsByTagName('li');
        if(li.length < 13) {
          this.isShow = false;
        }
      })
     },
    //  收藏
     collectClick() {
       const songList = {}
      //  let a = []
       songList.id = this.$route.query.id
       songList.name = this.song[0].name
       songList.artist = this.song[0].ar
       songList.img = this.song[0].al.picUrl
      //  sessionStorage.setItem("songList", songList)
       this.$store.dispatch("setCollect", songList)
       alert("已加入收藏夹")
      //  console.log(a);
      console.log(songList);
      
       
    }
  },
  computed: {
  },
  created() {
    // 歌曲详情
    
    const id = this.$route.query.id
    const ids = this.$route.query.id
    getSongDetail(ids).then(res => {
      this.song = res.data.songs
    })

    // 歌词
    this.getLyric()

    // 音乐url
    getSongUrl(id).then(res => {
      this.songUrl = res.data.data
    })
    function $(Nid){
      return document.getElementById(Nid);
    }
  },
}
</script>

<style lang="less" scoped>
  .el-row {
    position: relative;
    margin: 0 auto 60px;
    padding: 30px;
    width: 980px;
  }
  .el-col-8 {
    height: 500px;
  }
  .cover {
    float: left;
    padding: 30px;
    width: 180px;
    height: 180px;
    background: #232323;
    border-radius: 50%;
  }
  .cover  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .introduce {
    margin-top: 20px;
    position: relative;
    top: 0;
    margin: 0 0 30px 210px;
    width: 372px;
  }
  .introduce .header {
    margin: 10px 0;
    height: 50px;
  }
  .introduce .header .title {
    font-size: 18px;
  }
  .introduce .header p {
    color: #bababa;
    margin: 5px 0;
    padding-left: 64px;
  }
  .introduce .info p {
    color: #999;
    height: 26px;
  }
  .introduce .info span {
    color: #0c73c2;
  }
  .introduce .header .sign {
    margin-right: 10px;
    padding: 4px 14px;
    font-size: 12px;
    font-weight: normal;
    border-radius: 5px;
    color: #fff;
    background: #cf1717;
  }
  .introduce .btns {
    margin: 10px 0;
    position: relative;
    top: 10px;
    height: 30px;
    line-height: 30px;
  }
  .btns img  {
    padding: 0;
    width: 16px;
    height: 16px;
    border: 0;
    vertical-align: middle;
  }
  .btns button {
    height: 30px;
    border: 0;
    border-radius: 5px;
    vertical-align: middle;
  }
  button:focus {
    outline: 0;
  }
  .btns .play button {
    background: #4291da;
  }
  .btns .play button:hover {
    background: #47a0f4;
  }
  .btns .subscribed {
    position: absolute;
    top: 0;
    left: 80px;
  }
  .btns .share {
    position: absolute;
    top: 0;
    left: 160px;
  }
  #lyric {
    height: 290px;
    line-height: 23px;
    padding-left: 210px;
    overflow: hidden;
  }
  .btn {
    margin: 5px 0 0 205px;
    color: #0c73c2;;
    background: #f5f5f5;
    border: 0;
  }
  audio {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    // background: #3a3a3a;
  }
</style>