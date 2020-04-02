import {CHANGE_COLLAPSED, CHANGE_ADMINNAME} from './actionTypes'

export default{
  // 控制侧边控制栏的开合状态
  [CHANGE_COLLAPSED](boolean){
    return {
      type:CHANGE_COLLAPSED,
      payload:boolean
    }
  },
  // 根据接口取到的值来取到用户名
  [CHANGE_ADMINNAME](username){
    return {
      type:CHANGE_ADMINNAME,
      payload:username
    }
  }
}