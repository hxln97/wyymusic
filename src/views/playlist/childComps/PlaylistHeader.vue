<template>
  <div class="header">
    <span>{{this.$route.query.cat || '全部'}}</span>
     <el-dropdown trigger="click" :router="true" :default-active="this.$route.path"> 
      <el-button type="primary">
        选择分类<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><div class="all"><button><a href="/find/playlist">全部风格</a></button></div></el-dropdown-item>
        <el-container>
          <el-aside width="100px">语种</el-aside>
          <el-main>
            <el-dropdown-item v-for="item in language" 
                               :key="item.item" @click.native="itemClick(item) "
                               index="item.name">
              <span>{{item.name}}</span>
            </el-dropdown-item>
          </el-main>
        </el-container>
        <el-container>
          <el-aside width="100px">风格</el-aside>
          <el-main>
            <el-dropdown-item v-for="item in style" 
                               :key="item.item" @click.native="itemClick(item) "
                               index="item.name">
              <span>{{item.name}}</span>
            </el-dropdown-item>
          </el-main>
        </el-container>
        <el-container>
          <el-aside width="100px">场景</el-aside>
          <el-main>
            <el-dropdown-item v-for="item in scene" 
              :key="item.item" @click.native="itemClick(item) "
              index="item.name">
              <span>{{item.name}}</span>
            </el-dropdown-item>
          </el-main>
        </el-container>
        <el-container>
          <el-aside width="100px">情感</el-aside>
          <el-main>
            <el-dropdown-item v-for="item in emotional" 
              :key="item.item" @click.native="itemClick(item) "
              index="item.name">
              <span>{{item.name}}</span>
            </el-dropdown-item>
          </el-main>
        </el-container>
        <el-container>
          <el-aside width="100px" class="last">主题</el-aside>
          <el-main>
            <el-dropdown-item v-for="item in theme" 
              :key="item.item" @click.native="itemClick(item) "
              index="item.name">
              <span>{{item.name}}</span>
            </el-dropdown-item>
          </el-main>
        </el-container>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import eventBus from "common/eventBus"
export default {
  name: "PlaylistHeader",
  props: {
    category: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    // 语种
    language:function() {
      return this.category.filter(item => {
        if(item.category === 0) {
          return item
        }
      })
    },
    // 风格
    style:function() {
      return this.category.filter(item => {
        if(item.category === 1) {
          return item
        }
      })
    },
    // 场景
    scene:function() {
      return this.category.filter(item => {
        if(item.category === 2) {
          return item
        }
      })
    },
    // 情感
    emotional:function() {
      return this.category.filter(item => {
        if(item.category === 3) {
          return item
        }
      })
    },
    // 主题
    theme:function() {
      return this.category.filter(item => {
        if(item.category === 4) {
          return item
        }
      })
    },
  },
  methods: {
    itemClick(item) {
      this.$emit('select',item)
    }
  },
}
</script>

<style lang="less" scoped>
  .header {
    padding-bottom: 5px;
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #9B0909;
  }
  .header span {
    font-size: 26px;
    color: #272727;
    padding-right: 20px;
  }
  .el-dropdown {
    width: 90px;
    height: 30px;
    vertical-align: top;
  }
  .el-button--primary {
    color: #0c73c2;
    background: #f3f3f3;
    border-color: #ccc;
  }
  .el-button {
    width: 90px;
    height: 30px;
    padding: 0 5px;
  }
  .el-dropdown-menu {
    height: 426px;
  }
  .el-dropdown-menu .all {
    padding: 15px 0;
    width: 700px;
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .el-dropdown-menu .all button {
    margin-left: 16px;
    width: 75px;
    height: 26px;
    background: #f7f7f7;
    border: 1px solid #ccc;
  }
  ul li {
    display: inline-block;
    padding: 0;
  }
  .el-dropdown-menu .el-aside {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    border-right: 1px solid #ccc;
  }
  .el-dropdown-menu .last {
    height: 120px;
  }
  .el-dropdown-menu .el-main {
    padding: 0;
    line-height: 50px;
  }
  .el-dropdown-menu .el-main span {
    padding: 0 10px;
    font-size: 12px;
    border-right: 1px solid #ccc;
  }
  .el-container {
    width: 700px;
  }
</style>