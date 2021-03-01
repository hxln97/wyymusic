<template>
  <div>
    <subnav/>
    <div class="wrap">
      <el-row>
        <el-col :span="12" class="recommend">
          <div>
            <div class="title">
              <h3>推荐节目</h3>
              <span>更多</span>
            </div>
            <dj-category :recommend="recommend"
                            @select="djDetail"/>
          </div>
        </el-col>
        <el-col :span="12" class="ranking">
          <div>
            <div class="title">
              <h3>节目排行榜</h3>
              <span>更多</span>
            </div>
            <dj-category :toplist="toplist"
                        @select="djDetail"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import DjCategory from './DjCategory'
import { getDjRecommend, getProgramToplist } from "network/dj"
export default {
  name: "Dj",
  components: {
    Subnav,
    DjCategory,
    // DjToplist
  },
  data() {
    return {
      recommend: [],
      toplist: [],
    }
  },
  methods: {
    djDetail(item) {
      // this.$router.push('/dj/detail' + item.id)
      this.$router.push({
        path: '/dj/detail',
        query: {
          id: item.id
        }
      })
    }
  },
  created() {
    // 推荐节目
    getDjRecommend(this.id).then(res => {
      this.recommend = res.data.djRadios.slice(0,10)
      // console.log(this.recommend);
      
    })
    // 节目排行榜
    getProgramToplist(this.id).then(res => {
      // console.log(this.toplist);
      this.toplist = res.data.toplist.slice(0,10)
      
    })
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    width: 980px;
    margin: 0 auto;
    background: #fff;
  }
  .el-row {
    width: 900px;
    margin: 0 auto;
    background: #fff;
  }
  .el-col {
    width: 426px;
  }
  .recommend {
    margin-right: 24px;
  }
  .ranking {
    margin-left: 24px;
  }
  h3 {
    font-size: 22px;
    font-weight: normal;
    color: #272727;
    margin: 20px 0 0 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #9B0909;
  }
  .title {
    position: relative;
  }
  .title span {
    position: absolute;
    right: 5px;
    top: 10px;
    color: #5b5b5b;
  }
</style>