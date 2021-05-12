//app.js
const request = require('./utils/request.js')
import { initInterfaceList } from './utils/interface'
App({
  onLaunch: function () {
    this.$api = request.api;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.initToken()
    const accountInfo = wx.getAccountInfoSync()
    this.globalData.envVersion = accountInfo.miniProgram.envVersion
    this.globalData.$urls = initInterfaceList(this.globalData.envVersion)
    console.log('getAccountInfoSync', accountInfo)
    // 登录
    wx.login({
      success: res => {
        console.log('登陆成功', res)
        this.globalData.loginCode = res.code
        // this.wxMiniProLogin(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('用户信息', res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    this.getEntryOption()
  },
  wxMiniProLogin(code) {
    request.api.post(this.globalData.$urls.wxMiniProLogin, {
      code
    }).then((res) => {
      console.log('服务器返回', res)
      this.globalData.token = res.token
      if (res.token !== '') {
        this.globalData.needLogin = false
      } else {
        this.globalData.needLogin = true
      }
    })
  },
  // 初始化登录token
  initToken() {
    const token = wx.getStorageSync('token') || ''
    this.globalData.token = token
  },
  // 设置登录场景
  getEntryOption() {
    let entryRes = wx.getLaunchOptionsSync()
    console.log('entryRes', entryRes)
    this.globalData.scene = entryRes.scene
  },
  // 退出登录
  logout() {
    this.globalData.token = ''
    wx.setStorageSync('token', '')
    wx.redirectTo({
      url: "/pages/login/login"
    });
  },
  globalData: {
    userInfo: null,
    token: '',
    scene: '',
    needLogin: true
  }
})