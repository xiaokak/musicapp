<template>
  <swiper
      :scrollbar="{
      hide: true,
    }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="(item,i) in imgs" :key="i"><img :src="item.pic" alt=""></swiper-slide>

  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
// import required modules
import { Scrollbar } from 'swiper'
import axios from "axios"
import {getBanner} from "@/api";

export default {
  data: function () {
    return{
      imgs:[
        {pic:require('../assets/img/swiper1.jpg')},
        {pic:require('../assets/img/swiper2.jpg')},
        {pic:require('../assets/img/swiper3.jpg')},
        {pic:require('../assets/img/swiper4.jpg')},
        {pic:require('../assets/img/swiper5.jpg')},
        {pic:require('../assets/img/swiper6.jpg')},
        {pic:require('../assets/img/swiper7.jpg')},
        {pic:require('../assets/img/swiper8.jpg')},
        {pic:require('../assets/img/swiper9.jpg')},
        {pic:require('../assets/img/swiper10.jpg')},
      ]
    }

  },
  components: {
    Swiper,
    SwiperSlide
  },
  async mounted() {
    let res = await getBanner(1)
    this.imgs = res.data.banners
  },
  setup () {
    return {
      modules: [Scrollbar]
    }
  }
}
</script>

<style lang="less" scoped>
.mySwiper{
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.3rem;

}
.swiper-slide img{
  width: 100%;
}
:deep(.swiper-scrollbar) {
  border-radius: 10px;
  position: relative;
  top:2.7rem;
  -ms-touch-action: none;
  background: rgba(0,0,0,.1);
}
</style>
