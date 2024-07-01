import { http } from '@/utils/http'
import {BannerItem} from '@types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<> ({
      method: 'GET',
      url: '/home/banner',
      data: {
        distributionSite,
      },
    }
  )
}
