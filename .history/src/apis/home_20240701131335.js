import { http } from '@/utils/http'

const getHomeBannerAPI = () => {
  http({
    method: 'GET',
    url: '/home/banner',
  })
}
