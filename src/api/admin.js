import axios from '../pages/utils/axios'

// 显示所有管理员
let getAllAdmins = ()=>{
  let url = 'jpd/admin/user/infos';
  return axios.post(url)
}
// 删除管理员
let delAdmin = (_id)=>{
  let url = 'jpd/admin/user/del';
  return axios.post(url,{_id})
}
// 增加管理员
let addAdmin = ({user, pass})=>{
  let url = 'jpd/admin/user/reg';
  return axios.post(url,{user,pass})
}

<<<<<<< HEAD

export {
=======
export default {
>>>>>>> bbb
  getAllAdmins,
  delAdmin,
  addAdmin,


}