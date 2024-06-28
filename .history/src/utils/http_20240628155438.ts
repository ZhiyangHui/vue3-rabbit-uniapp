const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    //拼接地址
    if(options.url.startWith('http'))
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
