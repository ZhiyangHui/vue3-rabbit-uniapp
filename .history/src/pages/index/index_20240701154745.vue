<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/apis/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])

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

onLoad(() => {
  getHomeBannerData(), getHomeCategoryData()
})
</script>

<template>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <HotPanel></HotPanel>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
