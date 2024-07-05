import type { ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

//已经在拦截器里自动添加token了
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

//修改个人信息
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
