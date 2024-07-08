import { http } from '@/utils/http'

export const postMemberAddressAPI = (data) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
