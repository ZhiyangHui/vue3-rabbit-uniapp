import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return (
    http <
    BannerItem >
    {
      method: 'GET',
      url: '/home/banner',
      data: {
        distributionSite,
      },
    }
  )
}
