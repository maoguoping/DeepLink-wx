const computedBehavior = require('miniprogram-computed');
module.exports = Behavior({
  behaviors: [computedBehavior],
  properties: {

  },
  data: {
    $form: {}
  },
  attached() {},
  methods: {
    $validate(callback) {
      let $validator = this.data.$validator;
      let $form = this.data.$form;
      let totalFlag = true;
      let promiseArr = [];
      $validator.$list.forEach((item, index) => {
        let formName = $validator.$model;
        let value = this.data[formName][item.name];
        console.log(this.data)
        let res = new Promise((resolve, reject) => {
          item.cb(value, (valid, msg) => {
            console.log(valid, msg)
            if (!valid) {
              $form[item.name].error = true;
              $form[item.name].msg = msg;
              totalFlag = false;
            }
            resolve();
          });
        })
        promiseArr.push(res);
      });
      Promise.all(promiseArr).then(() => {
        console.log(totalFlag);
        this.setData({
          $form
        }, () => {
          console.log(this.data.$form);
          callback(totalFlag);
        });
      }).catch((e) => {
        console.log(e);
      })


    },
    $reset() {
      let $form = this.data.$form;
      Object.keys($form).forEach((item) => {
        $form[item].error = false;
        $form[item].msg = '';
      });
      this.setData({
        $form
      });
    }
  },
  lifetimes: {
    created() {
      console.log('validate-behavior:Created');
    }
  },
  definitionFilter(defFields, definitionFilterArr) {
    console.log('definitionFilter:defFields', defFields);
    console.log('definitionFilter:definitionFilterArr', definitionFilterArr);
    let data = defFields.data;
    let $validator = data.$validator;
    let form = {};
    $validator.$list.forEach((item, index) => {
      Object.defineProperty(form, item.name, {
        configurable: false,
        enumerable: true,
        get(){
          return {
            error: !!item.error,
            msg: item.msg || ''
          };
        }
      })
    });
    data.$form = form;
  }
})