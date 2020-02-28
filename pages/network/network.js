// pages/network/network.js
import request from '../../network-request/network/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uuid : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 1.微信自己封装的网络请求
    // wx.request({
    //   url: 'https://httpbin.org/uuid',
    //   method: 'GET',
    //   dataType: 'json',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    // 2.我们自己封装的
    request ({
      url: 'https://httpbin.org/uuid',
    }).then(res => {
      console.log(res)
      this.setData({
        uuid : res.data.uuid
      })
    }).catch(err => {
      console.log(err)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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