// components/swiper-page/swiper-page.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 页面总高度将会放在这里
    windowHeight: 0,
    // navbar的高度
    navbarHeight: 0,
    // header的高度
    headerHeight: 0,
    // 内容的高度
    contentHeight: 0,
    banner_url: [{
      id: 0,
      url: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg'
    }, {
      id: 1,
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=630943954,1317318926&fm=11&gp=0.jpg'
    }],
    open: false,
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否开启自动切换
    interval: 3000, //自动切换时间间隔
    duration: 500, //滑动动画时长,
    list:[{
      id:0
    },{
        id: 1
    },{
        id: 2
      }, {
        id: 3
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delete(event){
      let id = event.currentTarget.dataset.id;
      let list = this.data.list.filter((item)=>{
        return item.id!= id;
      })
      this.setData({
        list
      })
    }
  },
  lifetimes: {
    attached(option) {
      // 先取出页面高度 windowHeight
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowHeight: res.windowHeight
          });
          let top = this.data.top;
          // 然后就是做个减法
          let contentHeight = this.data.windowHeight - top;

          // 算出来之后存到data对象里面
          this.setData({
            contentHeight: contentHeight
          });
        }
      });

    }
  },
  relations: {
    '../pic-list/pic-list': {
      type: 'descendant', // 关联的目标节点应为子节点
      linked(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        console.log('in');
      },
      linkChanged(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        console.log('delete');
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  }
})