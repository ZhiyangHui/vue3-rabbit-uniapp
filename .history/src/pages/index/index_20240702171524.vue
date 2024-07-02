<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/apis/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import PageSkeleton from './components/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

//获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//获取热门推荐数据
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
//滚动触底
const onScrollTolower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref(false)
//自定义下拉刷新触发
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isTriggered.value = false
  guessRef.value?.getMore()
}

onLoad(() => {
  getHomeBannerData(), getHomeCategoryData(), getHomeHotData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view
    refresher-enabled="true"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrollTolower"
    class="scroll-view"
    scroll-y
  >
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <CategoryPanel :list="categoryList"></CategoryPanel>
    <HotPanel :list="hotList"></HotPanel>
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
