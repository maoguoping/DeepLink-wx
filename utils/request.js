class Api {
  constructor(){
    this.token = ''
  }
  setToken(token) {
    this.token = token
  }
  get(url,params){
    return new Promise((resolve,reject) => {
        wx.request({
          url: url,
          method:'get',
          header: {
            token: this.token
          },
          data:params,
          success:(result)=>{
            resolve(result.data);
          },
          fail:(err)=>{
            reject(err.errMsg);
          }
        })
    })
  }
  post(url, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'post',
        header: {
          token: this.token
        },
        data: params,
        success: (result) => {
          resolve(result.data);
        },
        fail: (err) => {
          reject(err.errMsg);
        }
      })
    })
  }
}
const api = new Api();
module.exports.api = api;