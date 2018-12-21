// components/edit-project/edit-project.js
const validate = require('../../libs/validate-behavior.js')
Component({
  behaviors: [validate],
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: (newVal) => {
        console.log(newVal)
      }
    }
  },
  data: {
    name: null,
    description: null,
    formData: {
      name: '',
      description: ''
    },
    $validator: {
      $model: "formData",
      $list: [{
        name: 'name',
        cb: (newVal, next) => {
          console.log(newVal);
          if (newVal == '') {
            next(false, '项目名称不能为空！');
          } else {
            next(true);
          }

        }
      }, {
        name: 'description',
        cb: (newVal, next) => {
          return next(true);
        }
      }]
    }
  },
  methods: {
    cancleFun(){
      this.setData({
          show: false
      },()=>{
        this.$reset();
        this.setData({
          formData: {
            name: '',
            description: ''
          }
        },()=>{
          this.triggerEvent('close', { update: false }, { bubbles: false, composed: false })
        })
      });
    },
    confirmFun() {
      this.$validate((valid) => {
        if (valid) {
          //异步关闭弹窗
          setTimeout(() => {
            this.setData({
              show: false
            },()=>{
              this.triggerEvent('close', {update:true}, { bubbles: false, composed: false })
            });
          }, 1000);
        }
      });
    },
    onNameChange(event){
      let value = event.detail;
      this.setData({
        'formData.name': value
      });
    },
    onDescriptionChange(event) {
      let value = event.detail;
      this.setData({
        'formData.description': value
      });
    }
  },
  lifetimes:{
    created(){
      console.log('edit-project:Created');
    }
  }
})