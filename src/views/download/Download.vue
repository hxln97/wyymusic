<template>
  <div class="download">
    <div class="top">
        <el-row>
        <el-col :span="24">
          <div class="left">
            <p>在电脑上听</p>
            <img src="~assets/img/download/pc.png" alt="">
            <button>下载电脑端</button>
          </div>
          <div class="right">
            <p>在手机上听</p>
            <img src="~assets/img/download/phone.png" alt="">
            <button>下载手机端</button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <div class="container1">
        <el-row>
          <el-col :span="24">
            <div class="container1">
              <h3>千万曲库 首首CD音质</h3>
              <img src="~assets/img/download/container1.jpg" alt="">
              <div class="text1">
                <p>囊括百万无损SQ音乐，你在用手机听歌时，</p>
                <p>也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="container2">
        <el-row>
          <el-col :span="24">
            <div>
              <h3>千位明星 亲自推荐音乐</h3>
              <img src="~assets/img/download/container2.jpg" alt="">
              <div class="text2">
                <p>韩红，戴佩妮等<span>千位明星已入驻</span>，亲自创建私房歌单，录制独</p>
                <p>家DJ节目，推荐他们心中的好音乐</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="container3">
        <el-row>
          <el-col :span="24">
            <div>
              <h3>社交关系 发现全新音乐</h3>
              <img src="~assets/img/download/container3.jpg" alt="">
              <div class="text3">
                <p>你可以<span>关注明星</span>、DJ和好友，通过浏览他们的动态、收藏和</p>
                <p>分享，发现更多全新好音乐</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download"
}
</script>

<style lang="less" scoped>
  .download{
    height: 1000px;
  }
  .top {
    // width: 1100px;
    height: 660px;
    margin: 0 auto;
    background: #000;
  }
  .top .el-row {
    width: 1100px;
    height: 660px;
    margin: 0 auto;
  }
  .top .el-col {
    position: relative;
    height: 660px;
  }
  .left img {
    position: absolute;
    left: 50px;
    top: 150px;
    width: 557px;
    height: 328px;
  }
  .left p {
    position: absolute;
    left: 278px;
    top: 70px;
  }
  .left button {
    position: absolute;
    left: 214px;
    top: 510px;
  }
  .right img {
    position: absolute;
    right: 100px;
    top: 150px;
  }
  .right p {
    position: absolute;
    right: 206px;
    top: 70px;
  }
  .right button {
    position: absolute;
    right: 126px;
    top: 510px;
  }
  .left p, .right p {
    color: #ccc;
    font-size: 20px;
  }
  button {
    color: #d10000;
    font-size: 20px;
    padding: 15px 70px;
    border: 0;
    border-radius: 28px;
    background: #fff;
    outline: 0;
  }
  .right img {
    width: 299px;
    height: 331px;
  }
  .el-row {
    width: 982px;
    height: 312px;
    margin: 0 auto;
  }
  .container h3 {
    font-size: 34px;
    color: #3c3c3c;
  }
  .container p {
    font-size: 14px;
    color: #6c6c6c;
  }
  .container span {
    font-size: 14px;
    color: #d10000;
  }
  .container1 {
    background-color: #fff;}
  .container1 .el-col {
    position: relative;
    width: 982px;
    height: 312px;
  }
  .container1 img {
    position: absolute;
    top: 61px;
    right: 46px;
  }
  .container1 h3 {
    position: absolute;
    top: 50px;
  }
  .container1 .text1 {
    position: absolute;
    top: 120px;
    height: 26px;
    line-height: 13px;
  }
  .container2 {
    background-color: #f8f8f8;}
  .container2 .el-col {
    position: relative;
    width: 982px;
    height: 312px;
  }
  .container2 img {
    position: absolute;
    top: 30px;
  }
  .container2 h3 {
    position: absolute;
    left: 520px;
    top: 50px;
  }
  .container2 .text2 {
    position: absolute;
    top: 120px;
    left: 520px;
    height: 26px;
    line-height: 13px;
  }
  .container3 {
    background-color: #fff;}
  .container3 .el-col {
    width: 982px;
    height: 312px;
  }
  .container3 img {
    position: absolute;
    right: 46px;
  }
  .container3 h3 {
    position: absolute;
    top: 35px;
  }
  .container3 .text3 {
    position: absolute;
    top: 120px;
    height: 26px;
    line-height: 13px;
  }
</style>