<template>
  <div class="detail">
    <el-row>
      <el-col :span="16">
        <dj-detail-top :detail="detail"/>
      </el-col>
      <el-col :span="8"><div></div></el-col>
    </el-row>
    <ul>
      <li>dj详情1</li>
      <li>dj详情2</li>
      <li>dj详情3</li>
      <li>dj详情4</li>
      <li>dj详情5</li>
      <li>dj详情6</li>
      <li>dj详情7</li>
      <li>dj详情8</li>
      <li>dj详情9</li>
      <li>dj详情10</li>
    </ul>
  </div>
</template>

<script>
import DjDetailTop from './childComps/DjDetailTop'
// import DjProgram from './childComps/DjProgram'
import { getDjDetail, getDjProgram } from "network/dj"
export default {
  name: "DjDetail",
  components: {
    DjDetailTop,
    // DjProgram
  },
  data() {
    return {
      detail: {},
      program: []
    }
  },
  created() {
    // 保存传入的id
    const id = this.$route.query.id
    // 对应电台的详情介绍
    getDjDetail(id).then(res => {
      this.detail = res.data.djRadio
      
      
    }) 
    // 对应电台的电台节目
    // getDjProgram(id).then(res => {
    //   this.program = res.data.programs
    //   // this.program = res.data.programs
      
    // })
  }
}
</script>

<style lang="less" scoped>
  .el-row {
    width: 980px;
    height: 1000px;
    margin: 0 auto;
    background: #fff;
  }
  .el-col-16 {
    padding: 50px 30px;
    height: 1000px;
  }
  .el-col-8 {
    height: 1000px;
    background: palegoldenrod;
  }
  
</style>