// components/setting-block/setting-block.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeContent(e) {
      console.log(e);
      this.setData({
        value:e.detail
      });
    }
  }
})