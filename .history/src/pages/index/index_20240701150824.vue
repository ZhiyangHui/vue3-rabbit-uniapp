<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/apis/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CategoryPanel></CategoryPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
