class Api {
  constructor(){
    
  }
  
  get(url,params){
    return new Promise((resolve,reject) => {
        wx.request({
          url: url,
          method:'get',
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