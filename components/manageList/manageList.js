// components/manageList/manageList.js
Component({
  behaviors: ['wx://component-export'],
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
      observer(newVal, oldVal, changedPath) {
        this.setData({
          listData:newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemTap(e){
      let data = e.currentTarget.dataset.data;
      this.triggerEvent('listTap', data, { bubbles: false, composed: false })
    }
  },

  lifetimes:{
    created() {
      console.log('组件create');
      console.log('list', this.data.list);
      console.log('listData', this.data.list);
    }
  }
})
