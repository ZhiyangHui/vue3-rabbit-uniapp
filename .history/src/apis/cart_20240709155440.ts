import { http } from '@/utils/http'

export const postMemberCartAPI = () => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
