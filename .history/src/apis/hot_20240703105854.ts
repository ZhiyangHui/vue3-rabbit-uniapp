import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

type HotParams=PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data: ) => {
  return http({
    method: 'GET',
    url: '',
  })
}
