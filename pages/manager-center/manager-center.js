// pages/manager-center/manager-center.js
const _this = getApp()
const urls = _this.globalData.$urls
const $api = _this.$api
const $listjson = require('../../data/manage-list-data').data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    showEditProject:false,
    showHoverMenu:true,
    pathId: '',
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("管理中心:onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("管理中心:onReady");
    this.loadData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("管理中心:onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("管理中心:onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("管理中心:onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    if (!this.isLoading) {
    //  this.loadData().then(()=>{
    //    // 处理完成后，终止下拉刷新
    //    wx.stopPullDownRefresh();
    //  });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('update');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  loadData(){
    this.isLoading = true;
    return $api.post(urls.getViewDataByPathId, {
      pathId: this.data.pathId,
      currentPage: 1,
      pageSize: 10,
      sortBy: 'modifyTime',
      order: 'DESC'
    }).then(res => {
      this.setData({
        listData: res.data.list,
        isLoading: false
      });
    }).catch(err =>{
      this.setData({
        listData: [],
        isLoading: false
      });
      console.log(err)
    })
  },
  /**
   * 用户点击列表
   */
  tapItem(e){
    let manageList = this.selectComponent('#manageList');
    console.log('列表点击事件', e)
    let pathId = e.detail.pathId
    this.setData({
      pathId
    }, () => {
      this.loadData()
    })
  },
   /**
   * 用户点击新增按钮
   */
  add(){
    this.setData({
      showHoverMenu:false,
      showEditProject:true
    },()=>{
      console.log(this.data.showEditProject);
    })
  },
   /**
   * 用户点击返回按钮
   */
  back() {
    let pathId = this.data.pathId
    console.log('back', pathId)
    if (pathId !== '') {
      let pathArr = pathId.split('/')
      let newPathId = pathArr.slice(0, pathArr.length - 1).join('/')
      console.log('newPathId', newPathId)
      this.setData({
        pathId: newPathId
      }, () => {
        this.loadData()
      })
    }
  },
  closeDialog(event){
    let data = event.detail;
    this.setData({
      showHoverMenu:true
    },()=>{
      if(data.update){
        this.loadData();
      }
    });
  }
})