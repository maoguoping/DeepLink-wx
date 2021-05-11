const devBasePath = `http://localhost:3000`
const preBasePath = `http://39.104.124.205`
let basePath = ''
export const initInterfaceList = function(envVersion) {
  console.log('api环境1', envVersion)
  if (envVersion === 'develop') {
    basePath = devBasePath
  } else {
    basePath = preBasePath
  }
  console.log('api环境2', basePath)
  return {
    wxLogin: `${basePath}/users/wxLogin`,
    wxMiniProLogin: `${basePath}/users/wxMiniProLogin`,
    getViewDataByPathId: `${basePath}/manageCenter/getViewDataByPathId`
  }
}