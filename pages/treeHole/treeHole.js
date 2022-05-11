// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  handleAdd() {
    wx.redirectTo({
      url: '../addPage/addPage',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const list = wx.getStorageSync('formDataList');
    const data = list && JSON.parse(list);
    console.log('data', data);
    this.setData({
      list: data
    })
  },
  tapItem: function (val) {
    console.log('val', val);
    const item = JSON.stringify(val.currentTarget.dataset.item);
    wx.navigateTo({
      url: `../addPage/addPage?item=${item}`,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})