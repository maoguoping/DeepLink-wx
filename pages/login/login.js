// pages/login/login.js
import md5 from 'md5'
const app = getApp()
const urls = app.globalData.$urls
const $api = app.$api
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
  onNameChange(e) {
    this.setData({
      username: e.detail
    })
  },
  onPasswordChange(e) {
    this.setData({
      password: e.detail
    })
  },
  login() {
    console.log('密码')
    $api.post(urls.wxLogin, {
      username: this.data.username,
      password: md5(this.data.password)
    }).then(res => {
      console.log('登录成功')
      app.globalData.token = res.token
      $api.setToken(res.token)
      wx.switchTab({
        url: '/pages/index/index'
      })
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