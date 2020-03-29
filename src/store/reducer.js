import state from './state'
import {CHANGE_COLLAPSED} from './actionTypes'
export default (preState = state, actions)=>{
  let newState = JSON.parse(JSON.stringify(preState))
  let {type,payload} = actions
  switch (type) {
    // 改变侧边栏的开合状态
    case CHANGE_COLLAPSED:  
      newState.collapsed = payload
      break;
  
    default:
      break;
  }
  return newState
}