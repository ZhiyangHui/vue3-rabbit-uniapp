import { http } from '@/utils/http'

export const getHomeBannerAPI = () => {
  http({
    method: 'GET',
    url: '/home/banner',
  })
}
