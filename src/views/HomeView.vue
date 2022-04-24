<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom'
import iconList from "@/components/iconList"
import musicList from "@/components/musicList";
import MusicList from "@/components/musicList";

export default {
  components: {
    MusicList,
    iconList,
    topNav,
    swiperCom
  },
  setup () {

  }
}
</script>
<style lang="less" scoped>
#d1{
  width: 3.75rem;
  height: 3.75rem;
  background: skyblue;
}

</style>
