class Api {
  constructor(){
    
  }
  
  get(url,params){
    return new Promise((resolve,reject)=>{
        wx.request({
          url: url,
          method:'get',
          data:params,
          success:(result)=>{
            resolve(result.data);
          },
          fail:(reject)=>{
            reject(reject.errMsg);
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
        fail: (reject) => {
          reject(reject.errMsg);
        }
      })
    })
  }
}
const api = new Api();
module.exports.api = api;