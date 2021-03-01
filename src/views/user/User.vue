<template>
  <div>
    <div class="user">
      <span>登陆网易云音乐</span>
      <div class="text">
        <p>查看并管理你收藏的私房音乐，</p>
        <p>方便随时地收听</p>
      </div>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'  
export default {
  name: "User",
  components: {
    Swiper
  }
}
</script>


<style lang="less" scoped>
  .user {
    position: relative;
    width: 982px;
    height: 700px;
    margin: 0 auto;
    background: url('~assets/img/user/user-bg.png');
  }
  .user span {
    position: absolute;
    left: 558px;
    top: 95px;
    margin: 0;
    font-size: 30px;
    color: #272727;
  }
  .user .text {
    position: absolute;
    left: 560px;
    top: 140px;
  }
  .user p {
    font-size: 14px;
    color: #4f4f4f;
  }
  .user button {
    position: absolute;
    left: 560px;
    top: 300px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    color: #eee;
    font-size: 18px;
    border: 0;
    border-radius: 6px;
    background: #3786d1;
  }
  .user button:hover {
    background: #529be0;
  }
  .user button:focus {
    outline: none;
  }
</style>