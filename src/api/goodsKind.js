import axios from '@pages/utils/axios'

// 显示所有的物品
let getAllKind = ()=>{
  let url = 'jpd/admin/goodskind/infos';
  return axios.get(url)
}
// 添加物品的种类
let addGoodsKind = (kindName)=>{
  let url = 'jpd/admin/goodskind/add';
  return axios.post(url,{kindName})
}
// 删除物品的种类
let delGoodsKind = (_id) =>{
  let url = 'jpd/admin/goodskind/del'
  return axios.post(url,{_id})
}

export {
  getAllKind,
  addGoodsKind,
  delGoodsKind
}