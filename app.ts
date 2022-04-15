// app.ts
App<IAppOption>({
  globalData: {
    // 是否第一次进来，展示
    isFirst: false,
  },
  onLaunch() {
    const isFirstLoad = true || wx.getStorageSync('isFirst') !== false;
    console.log('isFirstLoad',isFirstLoad);
    
    wx.navigateTo({
      url: isFirstLoad ? './pages/welcome/welcome' : './pages/index/index',
    })
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
})