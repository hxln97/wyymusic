<template>
  <div>
    <div class="info">
          <img :src="detail.picUrl" alt="">
          <p>{{detail.name}}</p>
          <div class="btn">
            <div class="btn-content">
              <div class="play">
                <button>
                  <img src="~assets/img/common/play.png" alt="">
                  <button>
                    <span>播放</span>
                  </button>
                </button>
              </div>
              <div class="collect">
                <button>
                  <img src="~assets/img/common/subscribed.png" alt="">
                  <button>订阅 ({{detail.subCount}})</button>
                </button>
              </div>
              <div class="share">
                <button>
                  <img src="~assets/img/common/share.png" alt="">
                  <button>分享 ({{detail.shareCount}})</button>
                </button>
              </div>
            </div>
          </div>
          <h2>{{detail.rcmdText}}</h2>
        </div>
  </div>
</template>

<script>
export default {
  name: "DjDetailTop",
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.info {
    position: relative;
    height: 148px;
  }
  .info img {
    width: 140px;
    height: 140px;
    padding: 4px;
    border: 1px solid #ccc;
  }
  .info p {
    position: absolute;
    top: 10px;
    left: 180px;
    margin: 0;
    color: #272727;
    font-size: 20px;
  }
  .info .btn {
    position: absolute;
    top: 60px;
    left: 0;
    width: 593px;
  }
  .btn-content {
    position: relative;
    top: 0;
    left: 180px;
    height: 30px;
    line-height: 30px;
  }
  .btn img  {
    padding: 0;
    width: 16px;
    height: 16px;
    border: 0;
    vertical-align: middle;
  }
  .btn button {
    padding: 0 3px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    vertical-align: middle;
  }
  .btn .play button {
    background: #4291da;
  }
  .btn .collect {
    position: absolute;
    top: 0;
    left: 90px;
  }
  .btn .share {
    position: absolute;
    top: 0;
    left: 230px;
  }
  .info h2 {
    position: absolute;
    top: 100px;
    left: 178px;
    font-size: 16px;
    color: #6c6c6c;
    font-weight: normal;
  }
</style>