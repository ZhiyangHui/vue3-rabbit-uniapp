import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

export const getMemberOrderPreNowAPI = () => {
  return http({
    method: 'GET',
    url: '/member/order/pre/now',
  })
}
