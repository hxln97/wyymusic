<template>
  <div>
    <div class="top">
      <h2>云音乐特色榜</h2>
      <div class="top-item" 
           v-for="(item, index) in category.slice(0, 4)"
           :item="item" :key="index"
           :toplist-item= "item"
           @click="itemClick(item)"
           :class="{active: item.id === currentId}">
        <span><img :src="item.coverImgUrl" alt=""></span>
        <p>{{item.name}}</p>
        <h3>{{item.updateFrequency}}</h3>
      </div>
    </div>
    <div class="bottom">
      <h2>云音乐特色榜</h2>
      <div class="bottom-item"
           v-for="(item, index) in category.slice(4)"
           :item="item" :key="index"
           :toplist-item= "item"
           @click="itemClick(item)"
           :class="{active: item.id === currentId}">
        <span><img :src="item.coverImgUrl" alt=""></span>
        <p>{{item.name}}</p>
        <h3>{{item.updateFrequency}}</h3>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "RankingCategory",
  props: {
    category: {
      type: Array,
      default() {
        return[]
      }
    }
  },
  data() {
    return {
      currentId: 0
    }
  },
  methods: {
    itemClick(item) {
      this.currentId = item.id;
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="less" scoped>
  .top-item, .bottom-item {
    position: relative;
    height: 62px;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    box-sizing: border-box;
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  } 
  p {
    position: absolute;
    top: 8px;
    margin: 0;
    display: inline-block;
    color: #272727;
    padding-left: 10px;
  }
  
  h3 {
    position: absolute;
    top: 22px;
    left: 70px;
    font-weight: normal;
    font-size: 12px;
    color: #9d9d9d;
  }
  .active {
    background: #e6e6e6;
  }
  .top-item:hover, .bottom-item:hover {
    background: #e6e6e6;
  }
</style>