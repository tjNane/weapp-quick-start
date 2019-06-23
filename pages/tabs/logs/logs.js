//logs.js
const util = require('../../../utils/util.js')

Page({
  data: {
    logs: []
  },

  onLoad: function () {
  },

  toList() {
    wx.navigateTo({
      url: '../../activity/list/list',
    })
  }
})
