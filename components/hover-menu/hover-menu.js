// components/hover-menu/hover-menu.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: true,
      observer: (newVal) => {
       
      }
    }
  },
  data: {

  },
  methods: {

  },
  relations: {
    './hover-menu-btn': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target){
        // 每次有hover-menu-btn被插入时执行，target是hover-menu-btn实例对象，触发在该节点attached生命周期之后
        console.log('[hover-menu] a child is linked: ', target)
      },
      linkChanged(target) {
        // 每次有hover-menu-btn被移动后执行，target是hover-menu-btn实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        // 每次有hover-menu-btn被移除时执行，target是hover-menu-btn实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  lifetimes:{
    created(){
      console.log("悬浮菜单：created");
    },
    attached(){
      console.log("悬浮菜单：attached");
    },
    ready() {
      console.log("悬浮菜单：ready");
    },
    detached() {
      console.log("悬浮菜单：detached");
    }
  }
})
