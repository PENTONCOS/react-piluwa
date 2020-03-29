import axios from '../pages/utils/axios'

// 显示所有的物品
let getAllKind = ()=>{
  let url = 'jpd/admin/goodskind/infos';
  return axios.get(url)
}


export {
  getAllKind,
}