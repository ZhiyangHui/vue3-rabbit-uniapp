import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

//前台分类
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

//热门
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

//猜你喜欢
export const getHomeGoodsGuessLikeAPI = () => {
  return http({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
