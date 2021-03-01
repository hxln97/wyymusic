<template>
  <div class="wrap">
    <subnav/>
    <div class="collectList">
    <p class="title">我的收藏</p>
      <ul>
        <li v-for="item in collectList" :key="item.id">
          <img :src="item.img" alt="">
          <p v-for="i in item.artist" :key="i.id">
            {{item.name}}-<span>{{i.name}}</span>
          </p>
        </li>
    </ul>
    </div>
    
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import { mapGetters } from 'vuex' 
export default {
  name: "Collection",
  computed: {
    ...mapGetters(['collectList'])
  },
  data() {
    return {
      
    }
  },
  components: {
    Subnav
  },
  
}
</script>

<style lang="less" scoped>
  .title {
    margin: 10px 0;
    padding-bottom: 5px;
    font-size: 22px;
    border-bottom:  2px solid #9B0909;
  }
  .collectList {
    margin: 0 auto;
    padding: 0 40px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } 
  // 解决flex最后一行数量不够自动向两端对齐
  ul::after {
    content: "";
    flex: auto;
  }
  ul li {
    width: 1rem;
    height: 1rem;
    padding: 20px .025rem;
  }
  ul li img {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
  ul li p {
    width: 1rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  ul li p span {
    color: #666;
  }
</style>