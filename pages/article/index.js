const app = getApp()
const http = require('../../utils/http.js')
const isText = (key) => /_t$/.test(key)
const isImage = (key) => /_i$/.test(key)
const isVideo = (key) => /_v$/.test(key)

Page({
	data: {
		article: {},
		backHome: false
	},
	onLoad: function (options) {
		if (options.share) {
			this.setData({
				backHome: true
			})
		}
		
		http.get('http://yapi.demo.qunar.com/mock/92770/moshou/article').then(data => {
			const item = data.data || {}
			data.data = Object.keys(item).map(key => {

				const value = item[key]
				let type = 'image'
				if (isText(key))
					type = 'text'

				if (isVideo(key))
					type = 'video'

				return {
					type,
					value
				}
			})

			this.setData({
				article: data || {}
			})
		})
	},
	onShareAppMessage: function () {
		return {
			title: '魔兽PVP',
			path: `/pages/article/index?id=1&share=1`
		}
	},
})