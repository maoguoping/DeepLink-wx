// pages/data-center/data-center.js
Page({
  onShareAppMessage: function (res) {

    return {

      title: 'ECharts 可以在微信小程序中使用啦！',

      path: '/pages/index/index',

      success: function () { },

      fail: function () { }

    }

  },

  data: {


  },



  onReady() {

  },

  viewDetail(){
    wx.navigateTo({url:'./data-detail/data-detail'});
  }

});