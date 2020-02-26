// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ["/image/美樱.jpg", "/image/美樱1.jpg"]
  },

  handlechooseAlbum (){
    //系统API，让用户选择图片
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths;
        if (path.length>0){
          console.log(path)
          for (var i = 0; i<this.data.imagePath.length;i++){
            path.push(this.data.imagePath[i])
          }
          this.setData({
            imagePath: path
          })
        } 
      },
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