import {CHANGE_COLLAPSED, CHANGE_ADMINNAME} from './actionTypes'
// import {} from 

export default{
  // 控制侧边控制栏的开合状态
  [CHANGE_COLLAPSED](boolean){
    return {
      type:CHANGE_COLLAPSED,
      payload:boolean
    }
  },
  // 根据接口取到的值来取到用户名
  // [CHANGE_ADMINNAME](){
  //   return (dispatch)=>{
  //     // let 
  //     dispatch(action)
  //   }
  // }
}