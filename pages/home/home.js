// pages/home/home.js
//getApp()可以获取App（）的实例对象
const app = getApp()

const name = app.globalData.name
const age = app.globalData.age


Page({

  /**
   * 页面的初始数据
   */
  data: {
    home:"这里是首页",
    clothes:[
      {id:1,brand:"jake",size:34},
      {id:2,brand:"joen",size:36}
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[]
  },

  /* 监听页面的生命周期函数 */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
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
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data
        this.setData(
          {list:data}
        )
      }
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