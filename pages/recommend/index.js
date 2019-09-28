const app = getApp()
const screenHeight = app.globalData.ScreenHeight
const customBar = app.globalData.CustomBar
const bodyHeight = screenHeight - customBar
const http = require('../../utils/http.js')

Page({
	data: {
		bodyHeight,
		articles: []
	},
	onLoad: function () {
		http.get('http://yapi.demo.qunar.com/mock/92770/moshou/recommend').then(data => {
			this.setData({
				articles: data.data || []
			})
		})
	},
	goArticle() {
		wx.navigateTo({
			url: '/pages/article/index',
		})
	},
	onShareAppMessage: function () {
		return {
			title: '魔兽PVP',
			path: '/pages/recommend/index'
		}
	},
	loadData: function () { }
})