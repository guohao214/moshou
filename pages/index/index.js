const app = getApp()
const screenHeight = app.globalData.ScreenHeight
const customBar = app.globalData.CustomBar
const bodyHeight = screenHeight - customBar
const http = require('../../utils/http.js')
// http://yapi.demo.qunar.com/mock/92770/moshou/list

Page({
  data: {
		bodyHeight,
		articles: []
  },
  onLoad: function () {
		http.get('http://yapi.demo.qunar.com/mock/92770/moshou/list').then(data=> {
			this.setData({
				articles: data.data || []
			})
		})
		
		// 在没有 open-type=getUserInfo 版本的兼容处理
		// wx.getUserInfo({
		//   success: res => {
		//     app.globalData.userInfo = res.userInfo
		//     this.setData({
		//       userInfo: res.userInfo,
		//       hasUserInfo: true
		//     })
		//   }
		// })
  },
	goArticle() {
		wx.navigateTo({
			url: '/pages/article/index',
		})
	},
	onShareAppMessage: function () {
		return {
			title: '魔兽PVP',
			path: '/pages/index/index'
		}
	},
  loadData:function() {
  }
})
