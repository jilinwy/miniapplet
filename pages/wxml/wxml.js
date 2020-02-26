// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name :  "旺旺",
    cope :  "旺仔",
    nowtime : new Date().toLocaleString(),
    age : 38,
    color : "",
    isShow : false,
    score : '',
    inHidden : true,
    list : ['钢铁侠',"雷神","黑寡妇","绿巨人","鹰眼","美国队长"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    setInterval( () =>{
      this.setData({
        nowtime : new Date().toLocaleString()
      })
    },1000)
  },
  /**
   * 点击改变颜色
   */
  changeColor(){
    if (this.data.color === "blue"){
      this.setData({
        color : "red"
      })
    }else{
      this.setData({
        color : "blue"
      })
    }
  },
  showFont() {
    this.setData({
      isShow : !this.data.isShow
    })
  },
  scoreInput(e){
    this.setData({
      score: e.detail.value
    })
  },
  scoreTap(){
    this.setData({
      inHidden : !this.data.inHidden
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
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