import { http } from '@/utils/http'

//已经在拦截器里自动添加token了
export const getMemberProfileAPI = () => {
  return http({
    method: 'GET',
    url: '/member/profile',
  })
}
