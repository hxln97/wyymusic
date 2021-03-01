<template>
  <div>
    <el-table :data="songList" style="width: 100%" row-key="id">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column prop="name" label="歌曲标题" width="180">
        <template slot-scope="scope">
          <div @click="itemClick(scope.row)">{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="dt" label="时长" width="60">
        <template slot-scope="scope">
          <div>{{scope.row.dt | showDate}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="140">
      </el-table-column>
      <el-table-column prop="al.name" label="专辑" width="100">
      </el-table-column>
    </el-table>
      <!-- <div v-for="item in songList" :key="item.item">
            <span v-for="songer in item.ar" :key="songer.id">{{songer.name}}</span>
      </div> -->
      
  </div>
</template>

<script>
import { SongList } from "network/playlist"
import {formatDate} from "common/utils"
export default {
  name: "SongList",
  props: {
    songList: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      songerList: []
    }
  },
  methods: {
    // 跳转单曲详情页
    itemClick(row,id) {
      this.$router.push({
        path: '/song',
        query: {
          id: row.id
        }
      })
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value);
      return formatDate(date, 'mm:ss')
    }
  },
  created() {
    
  }
}
</script>

<style lang="less">
  .el-table {
    font-size: 10px;
  }
 .el-table td, .el-table th {
   padding: 0!important;
   height: 30px;
   line-height: 30px;
 }
 .cell {
   overflow: hidden!important;
   white-space: nowrap!important;
   text-overflow: ellipsis!important;
   cursor: pointer;
 }
 tbody .cell:hover {
   text-decoration: underline;
 }
</style>