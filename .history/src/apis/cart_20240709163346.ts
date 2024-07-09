import { http } from '@/utils/http'

export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

export const getMemberCartAPI = () => {
  return http({
    method: 'GET',
    url: '/member/cart',
  })
}
