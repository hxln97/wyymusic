<template>
  <div>
    <div class="info">
      <div class="cover">
        <img :src="playlist.coverImgUrl" alt="">
      </div>
      <div class="introduce">
        <div class="header">
          <span class="sign">歌单</span>
          <span>{{playlist.name}}</span>
        </div>
        <div class="user">
          <img :src="playlist.creator.avatarUrl" alt="">
          <div class="user-info">
            <span class="creator">{{playlist.creator.nickname}}</span>
            <span class="time">{{playlist.createTime | showDate}} 创建</span>    
          </div>
        </div>
        <div class="btns">
          <div class="play">
            <button>
              <img src="~assets/img/common/play.png" alt="">
                <span> 播放</span>
            </button>
          </div>
          <div class="subscribed">
            <button>
              <img src="~assets/img/common/subscribed.png" alt="">
                订阅 ({{playlist.subscribedCount}})
            </button>
          </div>
          <div class="share">
            <button>
              <img src="~assets/img/common/share.png" alt="">
                分享 ({{playlist.shareCount}})
            </button>
          </div>
        </div>
        <div class="desc" ref="desc">
          <p>介绍：{{playlist.description}}</p>
        </div>
        <button @click="btnClick" ref="btn" class="btn" v-show="btnShow">展开</button>
      </div>
    </div>
    <div class="songtitle">
      <span class="title">歌曲列表</span>
      <span>{{playlist.trackCount}}首歌</span>
      <span class="play">播放：
        <span class="play-count">{{playlist.playCount}}</span>次
      </span>
    </div>
  </div>
  
</template>



<script>
import {formatDate} from "common/utils"
export default {
  name: "PlaylistInfo",
  props: {
    playlist: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      btnShow: true
    }
  },
  methods: {
     btnClick() {
      //  var desc = document.getElementsByClassName('.desc');
      //  var obj = desc.getElementsByTagName('p');
      //  var total_height = obj.scrollHeight;
      //  console.log(total_height);
       if(this.$refs.btn.innerHTML == "展开") {
         this.$refs.desc.classList.remove("hidden");
         this.$refs.desc.classList.add("expansion");
         this.$refs.btn.innerHTML = "收起"
       }
       else {
         this.$refs.desc.classList.remove("expansion");
         this.$refs.desc.classList.add("hidden");
         this.$refs.btn.innerHTML = "展开"
       }
       
     },
     description() {
       
       
     }
  },
  filters: {
    showDate(value) {
      const date = new Date(value);
      return formatDate(date, 'yyyy/MM/dd')
    }
  }
}
</script>

<style lang="less" scoped>
  .cover  img {
    position: absolute;
    width: 180px;
    height: 180px;
    padding: 4px;
    border: 1px solid #ccc;
  }
  .introduce {
    position: relative;
    top: 0;
    margin: 0 0 30px 210px;
    width: 372px;
  }
  .introduce .header {
    line-height: 30px;
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
  .introduce .header span {
    font-size: 18px;
  }
  .introduce .user {
    position: relative;
    margin: 10px 0;
    height: 35px;
  }
  .introduce .user img {
    width: 35px;
    height: 35px;
  }
  .introduce .user .user-info {
    position: absolute;
    top: 0;
    left: 45px;
    line-height: 35px;
  }
  
  .introduce .user .creator {
    margin-right: 10px;
    color: #0c73c2;
  }
  .introduce .user time {
    color: #999;
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
    left: 200px;
  }
  .introduce .desc {
    margin-top: 30px;
    font-size: 10px;
    line-height: 20px;
    color: #666;
    white-space: pre-line;
  }
  .introduce .btn {
    float: right;
    color: #0c73c2;;
    background: #fff;
    border: 0;
  }
  .desc, .hidden {
    overflow: hidden;//超出部分隐藏
    -webkit-line-clamp: 5;//限制行数
    text-overflow: ellipsis;//超过部分用省略号显示
    display: -webkit-box;//盒子模型
    -webkit-box-orient: vertical;//从顶部向底部垂直布置子元素
  }
  .expansion {
    overflow : hidden;
    -webkit-line-clamp: 100;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .songtitle {
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #c20c0c;
  }
  .songtitle .title {
    font-size: 18px;
    color: #333;
    margin-right: 20px;
  }
  .songtitle span {
    color: #666;
    font-size: 12px;
  }
  .songtitle .play {
    float: right;
  }
  .songtitle .play-count {
    color: #c20c0c;
  }
</style>