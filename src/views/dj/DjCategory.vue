<template>
  <div>
    <ul>
      <li v-for="(item, index) in recommend" 
          :item="item" :key="index">
        <img :src="item.picUrl" alt="">
        <a href="" @click="itemClick(item)">{{item.name}}</a>
        <span class="desc">{{item.rcmdtext}}</span>
        <span class="category">{{item.category}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in toplist" 
          :item="item" :key="index">
        <img :src="item.picUrl" alt="">
        <a href="" @click="itemClick(item)">{{item.name}}</a>
        <span class="desc">{{item.rcmdtext}}</span>
        <span class="category">{{item.category}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DjCategory",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    },
    toplist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('select',item)
    }
  }
}
</script>

<style lang="less" scoped>
  ul {
    margin: 0;
    padding: 0;
    border: 1px solid #ccc;
    border-top: 0;
  }
  ul li {
    position: relative;
    margin: 0;
    padding: 0;
    width: 424px;
    height: 60px;
    line-height: 60px;
  }
  ul li:nth-child(2n) {
    background: #f7f7f7;
  }
  img {
    position: absolute;
    left: 20px;
    top: 12px;
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  a {
    position: absolute;
    left: 70px;
    top: 10px;
    // width: 50px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #272727;
  }
  ul li .desc {
    position: absolute;
    left: 70px;
    top: 32px;
    height: 20px;
    line-height: 20px;
    margin: 0;
    color: #7b7b7b;
  }
  ul li .category {
    position: absolute;
    right: 20px;
    top: 18px;
    padding: 4px 4px;
    height: 24px;
    line-height: 16px;
    color: #7b7b7b;
    border: 1px solid #9d9d9d;
  }
</style>