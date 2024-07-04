import { http } from '@/utils/http'

export const postLoginWxMinAPI = () => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
