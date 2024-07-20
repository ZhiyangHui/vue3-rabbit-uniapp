<script>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <scroll-view scroll-y class="orders">
    <view class="card" v-for="item in 2" :key="item">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">2023-04-14 13:14:20</text>
        <!-- 订单状态文字 -->
        <text>待付款</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text class="icon-delete"></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="sku in 2"
        :key="sku"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=1`"
        hover-class="none"
      >
        <view class="cover">
          <image
            mode="aspectFit"
            src="https://yanxuan-item.nosdn.127.net/c07edde1047fa1bd0b795bed136c2bb2.jpg"
          ></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">ins风小碎花泡泡袖衬110-160cm</view>
          <view class="type">藏青小花 130</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共5件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>99</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="true">
          <view class="button primary">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=id`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view v-if="false" class="button primary">确认收货</view>
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ true ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>
