// pages/index/activity-detail/activity-detail.js
import Notify from '../../../miniprogram_npm/vant-weapp/notify/notify';
Page({
  data: {

  },
  getMsg(e){
    let data = e.detail;
    console.log(data);
    Notify('报名成功！');
  }
})