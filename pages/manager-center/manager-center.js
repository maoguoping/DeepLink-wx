// pages/manager-center/manager-center.js
const _this = getApp();
const $api = _this.$api
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    showEditProject:false,
    showHoverMenu:true
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
    this.loadData();
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
    if (!this.loading) {
     this.loadData().then(()=>{
       // 处理完成后，终止下拉刷新
       wx.stopPullDownRefresh();
     });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('update');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadData(){
    this.loading = true;
    return $api.post('http://39.104.124.205/manageCenter/getViewDataByPathId', {
      pathId: '',
      pageInfo: JSON.stringify({
        currentPage: 1,
        pageSize: 10,
        sortBy: 'modifyTime',
        order: 'descending'
      })
    }).then(res => {
      this.setData({
        listData: res.data.list
      });
    }).catch(err =>{
      console.log(err)
    }).then(()=>{
      this.loading = false;
    });
  },
  /**
   * 用户点击列表
   */
  tapItem(e){
    let manageList = this.selectComponent('#manageList');
    console.log(e);
    console.log(manageList )
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