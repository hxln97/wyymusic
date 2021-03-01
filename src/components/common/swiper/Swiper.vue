<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="banner.length">
        <swiper-slide v-for="item in banner" :key="item.id">
          <img v-lazy="item.imageUrl" alt="">
          <!-- <img :src="item.imageUrl" alt=""> -->
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination"  slot="pagination" ref="pagination"></div>
        <!-- 前进后退 -->
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    </div>
</template>
 
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {  getBanner } from "network/find"
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      show: false,
      banner: [],
      swiperOption: {
        notNextTick: true,
        // 是否循环轮播
        loop: true,
        // 自动播放
        autoplay:true,
        autoplay:{
          delay: 2000,
          // 用户操作之后是否停止自动切换
          disableOnInteraction: false
        },
        // 切换速度
        speed: 2000,
        // slide的切换效果，默认为"slide"（位移切换）
        // 可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
        effect : 'fade',
        //小手掌抓取滑动
        // grabCursor : true,
        //前进后退
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //分页器设置
        pagination: {
          el: '.swiper-pagination',
          //点击分页器的指示点分页器会控制Swiper切换
          clickable :true, 
        },
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheel: false, 
      },
    }
  },
 created() {
    getBanner().then(res => {
      this.banner = res.data.banners
    })
  }
 }
</script>
<style lang="less">
  /* 修改分页器颜色 */
  .swiper-pagination-bullet-active {
    background: #9B0909;
  }

  .wrapper img {
    width: 100%;
    height: 285px;
  }
  .wrapper img:hover {
    cursor: pointer;
  }
</style>
