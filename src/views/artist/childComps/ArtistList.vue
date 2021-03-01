<template>
  <div>
    <div class="title">
      
    </div>
    <ul class="char">
      <li><a href="">热门</a></li>
      <li v-for="item in char" :key="item.item"><a href="">{{item}}</a></li>
      <li><a href="">其他</a></li>
    </ul>
    <div>
      <ul class="list" v-if="artist.length">
        <li v-for="item in artist.slice(0,10)" :key="item.item" @click="artistClick(item)">
          <img :src="item.img1v1Url" alt="">
          <a href="">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="artists">
      <ul class="artist">
        <li v-for="item in artist.slice(10)" :key="item.item" @click="artistClick(item)">
          <a href="">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getArtistList } from "network/artist"
export default {
  name: "ArtistList",
  data() {
    return {
      category: [],
      artist: [''],
      char: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','K','R','S','T','U','V','W','X','Y','Z'],
      type: Number,
      area: Number
    }
  },
  created() {
    this.$bus.$on('catclick',(category) => {
    this.category = category
      const type = this.category.item.type
      const area = this.category.item.area
      const initial = this.category.item.initial
      // 每个分类中的歌手数据
      getArtistList(type, area, initial).then(res => {
        // console.log(res);
        this.artist = res.data.artists
      })
    })   
  },
  beforeDestroy() {
    this.$bus.$off('catclick')
  },
  methods: {
    artistClick(item) {
      this.$router.push({
        path: '/artist',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #c20c0c;;
  }
  .title span {
    font-size: 24px;
    font-weight: normal;
  }
  .title a {
    float: right;
    font-size: 10px;
  }
  .char {
    display: flex;
    flex-wrap: wrap;
    height: 24px;
    line-height: 24px;
    text-align: justify; //两端对齐
    justify-content: space-around;
  }
  .char li:first-child a {
    width: 40px;
    color: #fff;
    background: #c20c0c;
  }
  .char li a {
    display: block;
    width: 20px;
    text-align: center;
  }
  .char li:last-child a {
    width: 45px;
  }
  .list  {
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    justify-content: space-around;
  }
  .list li {
    width: 130px;
    height: 170px;
  }
  img {
    width: 120px;
    height: 120px;
    border: 1px solid #bfbfbf;
  }
  a {
    color: #333;
  }
  .artists {
    border-top: 1px dashed #d3d3d3;
  }
  .artist {
    display: flex;
    flex-wrap: wrap;
  }
  .artist li {
    width: 130px;
    height: 30px;
  }
</style>