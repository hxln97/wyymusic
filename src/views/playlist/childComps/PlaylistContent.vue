<template>
  <div>
    <ul>
      <li v-for="item in playlist" :key="item.item"
          @click="itemClick(item)">
        <img :src="item.coverImgUrl" alt="">
        <p>{{item.name}}</p>
        <span class="creator"><span>by</span> {{item.creator.nickname}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlaylistContent",
  props: {
    playlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(item) {
      this.$router.push({
        path: '/playlist/detail',
        query: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    justify-content: space-between;
  } 
  ul li {
    width: 140px;
    height: 210px;
    padding: 0 6px;
  }
  ul img {
    width: 140px;
    height: 140px;
    cursor: pointer;
  }
  ul li p {
    width: 140px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  ul li p:hover {
    text-decoration: underline;
  }
  ul li p span {
    font-size: 10px;
    color: #999;
  }
  ul li .creator {
    font-size: 10px;
    color: #666;
  }
</style>