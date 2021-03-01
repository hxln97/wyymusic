<template>
  <div>
    <ul>
      <li>热门1</li>
      <li>热门2</li>
      <li>热门3</li>
      <li>热门4</li>
      <li>热门5</li>
      <li>热门6</li>
      <li>热门7</li>
      <li>热门8</li>
      <li>热门9</li>
      <li>热门10</li>
    </ul>
  </div>
</template>

<script>
import { getPlaylistDetail } from "network/find";
export default {
  name: "RecommendDetail",
  components: {
  },
  created() {
    const id = this.$route.query.id
    getPlaylistDetail(id).then(res => {
      console.log(res);
      
    })
  }
}
</script>

<style>

</style>