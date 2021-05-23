//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'passjava-learn-1g8c11523610c04a',
        traceUser: true,
      })
    }

    this.globalData = {}
  },

  // 引入`towxml3.0`解析方法
  towxml: require('/towxml/index')
})
