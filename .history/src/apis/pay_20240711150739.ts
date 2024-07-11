import { http } from '@/utils/http'

export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}
