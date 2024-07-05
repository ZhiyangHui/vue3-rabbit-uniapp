import { http } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return http({
    method: 'GET',
    url: '/member/profile',
  })
}
