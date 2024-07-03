import { http } from '@/utils/http'

export const getHotRecommendAPI = () => {
  return http({
    method: 'GET',
  })
}
