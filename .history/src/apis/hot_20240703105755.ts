import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

export const getHotRecommendAPI = (url: string, data: PageParams) => {
  return http({
    method: 'GET',
    url,
  })
}
