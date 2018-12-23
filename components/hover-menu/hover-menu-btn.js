// components/hover-menu/hover-menu-btn.js
const plusIcoPath = '../../images/plus-circle.png';
const infoIcoPath = '../../images/info-circle.png';
Component({
  properties: {
    type: {
      type: String,
      value: 'plus'
    }
  },
  data: {
    icoPath: plusIcoPath
  },
  methods: {
    btnTap() {
      this.triggerEvent('btnTap', this.data.type, { bubbles: false, composed: false })
    }
  },
  lifetimes: {
    attached() {
      let path = plusIcoPath;
      switch (this.data.type) {
        case 'plus':
          path = plusIcoPath;
          break;
        case 'info':
          path = infoIcoPath;
          break;
      }
      this.setData({
        icoPath: path
      });
    }
  },
  relations: {
    './hover-menu': {
      type: 'parent', // 关联的目标节点应为父节点
      linked(target) {
        // 每次被插入到hover-menu时执行，target是hover-menu实例对象，触发在attached生命周期之后
        console.log('hover-menu-btn linked to ', target)
      },
      linkChanged(target) {
        // 每次被移动后执行，target是hover-menu实例对象，触发在moved生命周期之后
      },
      unlinked(target) {
        // 每次被移除时执行，target是hover-menu实例对象，触发在detached生命周期之后
      }
    }
  }
})