<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.item"
         class="recommend-item" 
         @click="itemClick(item)">
      <img :src="item.picUrl" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('select', item)
      
    }
  }
}
</script>

<style lang="less" scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;
  }
  .recommend-item {
    position: relative;
  }
  .recommend-item img {
    width: 140px;
    height: 140px;
    cursor: pointer;
  }
  .recommend-item p {
    margin: 0;
    position: absolute;
    left: 0;
    top: 150px;
    width: 140px;
    height: 38px;
    line-height: 19px;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  } 

</style>