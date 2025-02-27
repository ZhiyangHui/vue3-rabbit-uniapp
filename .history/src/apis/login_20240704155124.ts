import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
}
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
