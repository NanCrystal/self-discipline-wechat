App({
  onLaunch() {
    const isFirstLoad = true || wx.getStorageSync('isFirst') !== false;
    console.log('isFirstLoad', isFirstLoad);

    wx.navigateTo({
      url: isFirstLoad ? './pages/welcome/welcome' : './pages/index/index',
    })
  },
  globalData: {
    // 是否第一次进来，展示
    isFirst: false,
  },
});
