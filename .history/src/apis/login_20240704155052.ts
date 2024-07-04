import { http } from '@/utils/http'

export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
