<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

defineProps<{
  list: CategoryItem[]
}>()

const categoryMap = [
  { index: 0, name: '居家' },
  { index: 1, name: '美食' },
  { index: 2, name: '服饰' },
  { index: 3, name: '母婴' },
  { index: 4, name: '个护' },
  { index: 5, name: '严选' },
  { index: 6, name: '数码' },
  { index: 7, name: '运动' },
  { index: 8, name: '杂项' },
]

//跳转到category页面
const onSwitch = (categoryName: string) => {
  const category = categoryMap.find((item) => item.name === categoryName)

  if (category) {
    const index = category.index

    // 设置缓存
    wx.setStorageSync('selectedCategoryIndex', index)

    uni.switchTab({
      url: '/pages/category/category',
    })
  } else {
    console.error(`Category with name ${categoryName} not found`)
  }
}
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in list"
      :key="item.id"
    >
      <image @tap="onSwitch(item.name)" class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
