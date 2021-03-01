<template>
  <div class="category">
    <!-- <div class="recommend">
      <h2>推荐</h2>
      <ul>
        <li><a href="">推荐歌手</a></li>
        <li><a href="">入驻歌手</a></li>
      </ul>
    </div> -->
    <div class="chinese">
      <h2>华语</h2>
      <ul>
        <li v-for="item in category.slice(0, 3)" :key="item.item" :class="{active:currentId == item.id}" @click="catClick(item)">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="europe">
      <h2>欧美</h2>
      <ul>
        <li v-for="item in category.slice(3, 6)" :key="item.item" :class="{active:currentId == item.id}" @click="catClick(item)"><span>{{item.name}}</span></li>
      </ul>
    </div>
    <div class="japan">
      <h2>日本</h2>
      <ul>
        <li v-for="item in category.slice(6, 9)" :key="item.item" :class="{active:currentId == item.id}" @click="catClick(item)"><span>{{item.name}}</span></li>
      </ul>
    </div>
    <div class="korea">
      <h2>韩国</h2>
      <ul>
        <li v-for="item in category.slice(9, 12)" :key="item.item" :class="{active:currentId == item.id}" @click="catClick(item)"><span>{{item.name}}</span></li>
      </ul>
    </div>
    <div class="other">
      <h2>其他</h2>
      <ul>
        <li v-for="item in category.slice(12)" :key="item.item" :class="{active:currentId == item.id}" @click="catClick(item)"><span>{{item.name}}</span></li>
      </ul>
    </div>
    
</div>
</template>

<script>
export default {
  name: "ArtistCategory",
  props: {
    category: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentId: 0,
    }
  },
  methods: {
    catClick(item) {
      this.currentId = item.id;
      this.$emit('select', item)
      this.$nextTick(() => {
        this.$bus.$emit('catclick', {item})
      })
    },
  },
}
</script>

<style lang="less" scoped>
  h2 {
    font-size: 16px;
  }
  ul li {
    height: 30px;
    margin-left: 20px;
    list-style: square;
    color: #333;
   font-size: 10px;
  }

  ul li span {
    line-height: 30px;
  }
  ul li span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .category div {
    padding: 0 20px;
    border-bottom: 1px solid #d3d3d3;
  }
  .category div:last-child {
    border: 0;
  }
  .active {
    color: #c20c0c;
  }
</style>