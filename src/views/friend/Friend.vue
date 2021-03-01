<template>
  <div>
    <div class="friend">
      <span>关注明星 发现精彩</span>
      <div class="text">
        <p>你可以关注明星和好友品味他们的私房歌单</p>
        <p>通过他们的动态发现更多精彩音乐</p>
      </div>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'  
export default {
  name: "Friend",
  components: {
    Swiper
  }
}
</script>


<style lang="less" scoped>
  .friend {
    position: relative;
    width: 982px;
    height: 700px;
    margin: 0 auto;
    background: url('~assets/img/friend/friend-bg.png');
  }
  .friend span {
    position: absolute;
    left: 558px;
    top: 160px;
    margin: 0;
    font-size: 26px;
    color: #272727;
  }
  .friend .text {
    position: absolute;
    left: 560px;
    top: 220px;
  }
  .friend p {
    font-size: 14px;
    color: #4f4f4f;
  }
  .friend button {
    position: absolute;
    left: 560px;
    top: 320px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    color: #eee;
    font-size: 18px;
    border: 0;
    border-radius: 6px;
    background: #3786d1;
  }
  .friend button:hover {
    background: #529be0;
  }
  .friend button:focus {
    outline: none;
  }
</style>