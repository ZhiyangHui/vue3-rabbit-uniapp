import { http } from '@/utils/http'

export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return httpttp({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}
