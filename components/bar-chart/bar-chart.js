// components/bar-chart/bar-chart.js
const chartBehavior = require('../../libs/echart-behavior.js')
Component({
  behaviors: [chartBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes:{
    ready(){
      let chart = this.selectComponent('#mychart-dom-bar');
      console.log(chart);
    } 
  }
})
