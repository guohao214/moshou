//app.js
App({
  onLaunch: function() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				this.globalData.ScreenHeight = e.windowHeight;
      }
    })
  },
  globalData: {
    userInfo: {},
    StatusBar: 0,
    Custom: 0,
    CustomBar: 0,
		ScreenHeight: 0,
  }
})