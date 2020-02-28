export default function request (options) {
  return new Promise((resolve,reason) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      method: options.method || 'get',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reason(res)
      },
    })
  })
  
}