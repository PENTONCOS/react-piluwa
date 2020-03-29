import axios from '../pages/utils/axios'

// 上传图片
let uploadImg = (payload)=>{
  let url = 'jpd/admin/upload/img';
  return axios.post(url,payload)
}


export {
  uploadImg
}