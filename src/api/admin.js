import axios from '@pages/utils/axios'

class admin {
  // 显示所有管理员
  getAllAdmins = ()=>{
    let url = 'jpd/admin/user/infos';
    return axios.post(url)
  }
  // 删除管理员
  delAdmin = (_id)=>{
    let url = 'jpd/admin/user/del';
    return axios.post(url,{_id})
  }
  // 增加管理员
  addAdmin = ({user, pass})=>{
    let url = 'jpd/admin/user/reg';
    return axios.post(url,{user,pass})
  }
}

export default new admin()