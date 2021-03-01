<template>
  <div class="container">
    <!-- <playlist-category-item :playlist="playlist"/> -->
  </div>
</template>

<script>
import PlaylistCategoryItem from './PlaylistCategoryItem'
import { getPlaylistCategoryContent } from "network/playlist.js"
export default {
  name: "PlaylistCategory",
  components: {
    PlaylistCategoryItem 
  },
  data() {
    return {
      playlist: []
    }
  },
  created() {
    const cat = this.$route.query.cat
    getPlaylistCategoryContent(cat).then(res => {
      this.playlist = res.data.playlists
      
    })
  }
}
</script>

<style lang="less" scoped>
</style>