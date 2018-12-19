// components/manage-list/manage-list.js
Component({
  behaviors: ['wx://component-export'],
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
  data: {
    listData:[]
  },
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
