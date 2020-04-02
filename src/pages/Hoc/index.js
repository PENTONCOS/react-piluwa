import React, { Component, Fragment } from 'react'
import Modal from '../Modal'

export default (TempComponet)=>{
  
  class NewComponent extends Component{
    constructor(){
      super()
      this.state={
        hasAccount:false
      }
    }
    componentDidMount(){
      let hasAccount = localStorage.getItem('user')
      this.setState({hasAccount})
    }
    render(){
      let {hasAccount} = this.state 
      return(
        <Fragment>
          {hasAccount===null?<Modal/>:<TempComponet/>}
        </Fragment>
      )
    }
  }
  
  return NewComponent
}
