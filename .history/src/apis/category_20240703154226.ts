import { http } from '@/utils/http'

export const getCategoryAPI = () => {
  return http({
    method: 'GET',
    url: '/category/top',
  })
}
