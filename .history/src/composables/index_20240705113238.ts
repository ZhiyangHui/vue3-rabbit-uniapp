import type { XtxGuessInstance } from '@/types/component'

export const useGuessList = () => {
  //获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstancestance>()

  //滚动触底
  const onScrollTolower = () => {
    guessRef?.value.getMore()
  }

  //返回
  return {
    guessRef,
    onScrollTolower,
  }
}
