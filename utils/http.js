const http = {}
const env = require('../env.js');
let token = '';


http.get = function (url, data, options = {}) {
  return http._request(url, 'get', data, options)
}

http.post = function (url, data, options = {}) {
  return http._request(url, 'post', data, options)
}

http._request = function (url, method, data, options = {}) {
  wx.showLoading({
    title: '加载中...'
  })

  // 随时拿到 token
  try {
    token = wx.getStorageSync('token');
  } catch (e) { }

  const opts = Object.assign({}, {
    url,
    data,
    method,
    header: {
      'content-Type': 'application/json',
      'Authorization': token
    },
    dataType: 'json',
    responseType: 'text'
  }, options)

  const complete = opts.complete = opts.complete || function () { }
  opts.complete = function () {
    wx.hideLoading()
    complete()
  }

  return new Promise((res, rej) => {
    const _res = function (data) {

      if (data.statusCode !== 200) {
        return rej(data)
      }

      return res(data.data)
    }

    Object.assign(opts, {
      success: _res,
      fail: rej
    })

    wx.request(opts)
  })
}

module.exports = http