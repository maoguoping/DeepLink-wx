module.exports = Behavior({
  behaviors: [],
  properties: {

  },
  data: {
    
  },
  attached() { },
  methods: {
    $validate(callback) {
      let $validator = this.data.$validator;
      let totalFlag = true;
      let promiseArr = [];
      $validator.$list.forEach((item,index)=>{
        let formName = $validator.$model;
        let value = this.data[formName][item.name];
        console.log(this.data)
        let res = new Promise((resolve,reject)=>{
          item.cb(value, (valid, msg) => {
            if (!valid) {
              $validator.$list[index].error = true;
              $validator.$list[index].msg = msg;
              totalFlag = false;
            }
            resolve();
          });
        })
        promiseArr.push(res);
      });
      Promise.all(promiseArr).then(()=>{
        this.setData({
          $validator
        },()=>{
          callback(totalFlag);
        });
      }).catch((e)=>{
        console.log(e);
      }) 
    },
    $reset(){
      let $validator = this.data.$validator;
      $validator.$list.forEach((item, index) => {
        item.error = false;
        item.msg = '';
      });
      this.setData({
        $validator
      });
    }
  },
  lifetimes:{
    created(){
      console.log('validate-behavior:Created');
      let $validator = this.data.$validator;
      $validator.$list.forEach((item,index) => {
        Object.defineProperty($validator, item.name, {
          configurable: false,
          enumerable: true,
          get: function proxyGetter() {
            return {
              error:!!item.error,
              msg: item.msg ||''
            };
          }
        })
      });
      this.$validator = $validator;
    }
  }
})