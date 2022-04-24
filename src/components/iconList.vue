<template>
        <div class="iconList">

          <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="icon-rili"></use>
            </svg>
            <span>每日推荐</span>
          </div>
          <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="icon-shouyinji"></use>
            </svg>
            <span>私人FM</span>
          </div>
          <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="icon-gedan"></use>
            </svg>
            <span>歌单</span>
          </div>
          <div class="iconItem">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
          </div>
        </div>
</template>

<script>
export default {
  name: "iconList"
}
</script>

<style scoped>
.icon{
  width: 0.5rem;
  height: 0.5rem;
}
</style>
