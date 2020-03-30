import axios from '@pages/utils/axios'

// 显示所有的物品(分页查询)
let getAllGoods = (page,pageSize)=>{
  let url = 'jpd/admin/goods/getInfos';
  return axios.post(url,{page,pageSize})
}
// 删除商品
let delGoods = (_id)=>{
  let url = 'jpd/admin/goods/del';
  return axios.post(url,{_id})
}
// 增加商品
let addGoods = ({name,stock,price,path,desc,unit,putaway,kind})=>{
  let url = 'jpd/admin/goods/add'
  return axios.post(url,{name,stock,price,path,desc,unit,putaway,kind})
}
// 根据id修改上架信息
let updataPutaway = (_id,putaway)=>{
  let url = 'jpd/admin/goods/updatePutaway'
  return axios.post(url,{_id,putaway})
}
// 根据id查询物品
let getGoodsById = (_id)=>{
  let url = 'jpd/admin/goods/getInfoById'
  return axios.post(url,{_id})
}
// 根据id更新物品信息
let updataGoodsInfoById = (_id,obj)=>{
  let url = 'jpd/admin/goods/update'
  return axios.post(url,obj)
}
// 模糊查询
let getGoodsByKw = (page,pageSize,keyword)=>{
  let url = 'jpd/admin/goods/getInfosByKw'
  return axios.post(url,{page,pageSize,keyword})
}

export {
  getAllGoods,
  delGoods,
  addGoods,
  updataPutaway,
  getGoodsById,
  updataGoodsInfoById,
  getGoodsByKw
}