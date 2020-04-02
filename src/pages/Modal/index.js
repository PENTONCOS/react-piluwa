import React, { Component } from 'react';
import style from './index.module.less'
import {withRouter} from 'react-router-dom'
import { Result, Button } from 'antd';
class Modal extends Component {
  render() { 
    console.log(this)
    return (  
      <Result
        style={{hieght:`100vh`}}
        status="error"
        title="请登陆获取权限"
        extra={
          <Button type="primary" key="console" onClick={()=>{
            this.props.history.replace('/login')
          }}>
            返回登录页面
          </Button>
      }
      />
    )
  }
}
//用withrouter 处理帮助获取路由对象实现编程式导航
export default withRouter(Modal);