import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

export const getHotRecommendAPI = (url: string, data: PageParams & { subType: string }) => {
  return http({
    method: 'GET',
    url: '',
  })
}
