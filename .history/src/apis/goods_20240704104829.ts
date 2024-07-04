import { http } from '@/utils/http'

export const getGoodsByIdAPI = () => {
  return http({
    method: 'GET',
    url: '/goods',
  })
}
