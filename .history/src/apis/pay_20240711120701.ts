import { http } from '@/utils/http'

export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}
