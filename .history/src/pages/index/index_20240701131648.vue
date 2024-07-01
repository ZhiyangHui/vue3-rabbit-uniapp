<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/apis/home'

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
}
</script>

<template>
  <XtxSwiper></XtxSwiper>
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
