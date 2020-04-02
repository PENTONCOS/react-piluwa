import state from './state'
import {CHANGE_COLLAPSED,CHANGE_ADMINNAME} from './actionTypes'
export default (preState = state, actions)=>{
  let newState = JSON.parse(JSON.stringify(preState))
  let {type,payload} = actions
  switch (type) {
    // 改变侧边栏的开合状态
    case CHANGE_COLLAPSED:  
      newState.collapsed = payload
      break;
    // 接受登录成功后的昵称
    case CHANGE_ADMINNAME:  
      newState.adminName = payload
      break;
  
    default:
      break;
  }
  return newState
}