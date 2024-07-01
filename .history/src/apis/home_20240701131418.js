import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
