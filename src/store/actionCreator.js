import {CHANGE_COLLAPSED} from './actionTypes'

export default{
  [CHANGE_COLLAPSED](boolean){
    return {
      type:CHANGE_COLLAPSED,
      payload:boolean
    }
  }
}