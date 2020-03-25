import React, { Component, Fragment } from 'react'
import Modal from '../Modal'

export default (TempComponet)=>{
  
  class NewComponent extends Component{
    constructor(){
      super()
      this.state={
        isLogin:false
      }
    }
    componentDidMount(){
      let isLogin = localStorage.getItem('isLogin')
      this.setState({isLogin})
    }
    render(){
      let {isLogin} = this.state 
      return(
        <Fragment>
          {isLogin==='null'?<Modal/>:<TempComponet/>}
        </Fragment>
      )
    }
  }
  
  return NewComponent
}
