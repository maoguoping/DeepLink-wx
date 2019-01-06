// pages/index/activity-detail/activity-detail.js
import Notify from '../../../miniprogram_npm/vant-weapp/notify/notify';
const app = getApp();
Page({
  data: {
    userNickName:'',
    url:'http://39.104.124.205/wx-activity'
  },
  getMsg(e){
    let data = e.detail;
    console.log(data);
  },
  getLoad(e){
    console.log("加载成功！")
  },
  onLoad(){
    console.log(app.globalData.userInfo);
    let userInfo = app.globalData.userInfo;
    let url = `http://39.104.124.205/wx-activity?nickName=${encodeURIComponent(userInfo.nickName)}&country=${encodeURIComponent(userInfo.country)}`;
    console.log(url);
    this.setData({
      userNickName: userInfo.nickName,
      url
    })
  },
  onHide(){
    console.log("隐藏")
  },
  onShareAppMessage(options) {
    return {
      title: 'title',
      path: this.url,
      success: function (res) {
        // that.web_url = return_url
        // 转发成功
        wx.showToast({
          title: "转发成功",
          icon: 'success',
          duration: 2000
        })

      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})