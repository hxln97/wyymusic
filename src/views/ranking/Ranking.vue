<template>
  <div>
    <subnav/>
    <el-row>
      <el-col :span="6">
        <div>
          <ranking-category :category="category"
            @select="rankingDetail"/>
        </div>
      </el-col>
      <el-col :span="18">
      <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Subnav from 'components/content/Subnav'
import RankingCategory from './RankingCategory'
import {getRanking, getRankingDetail} from "network/ranking";
export default {
  name: "Ranking",
  components: {
    Subnav,
    RankingCategory
  },
  data() {
    return {
      category: [],
    }
  },
  methods: {
     rankingDetail(item) {
       this.$router.push({
         path: '/find/ranking/detail',
         query: {
           id: item.id
         }
       })
       
      // console.log(item.id);
     }
  },
  computed: {
    
  },
  // beforeCreate() {
  //   console.log('---------创建前--------');
    
  // },
  created() {
    
    // 排行榜
    getRanking().then(res => {
      this.category = res.data.list
    })
    
    
  },
  mounted() {
    
  },
}
</script>

<style lang="less" scoped>
  .el-row {
    width: 982px;
    margin: 0 auto;
  }
  .el-col-6 {
    background: #f9f9f9;
  }
  .el-col-18 {
    background: #fff;
  }

</style>