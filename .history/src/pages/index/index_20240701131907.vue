<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/apis/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
const bannerList = ref([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <XtxSwiper></XtxSwiper>
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
