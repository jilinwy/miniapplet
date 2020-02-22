// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'mentos',
    age:15,
    people:[
      {id:1,name:"momo",age:25},
      {id:2,name:"nini",age:26},
      {id:3,name:"bubu",age:27},
      {id:4,name:"vyvy",age:29}
    ],
    counts:0
  },
  backspacejia(){
    this.setData({
      counts:this.data.counts + 5
    })
  },
  backspacejian(){
    this.setData({
      counts:this.data.counts - 5
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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