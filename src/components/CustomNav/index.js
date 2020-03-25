import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// eslint-disable-next-line
import { Menu, Icon } from 'antd';
import menuList from './menulist'

const { SubMenu } = Menu;

function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  console.log(e.item)
  let path = e.item.props.path
  this.props.history.push(path)
}
class CustomNav extends Component {
  // 渲染侧边栏导航
  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return (
          <SubMenu key={item.key} title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else {
        return(
          <Menu.Item key={item.key} path={item.path}>
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          </Menu.Item>
        )
      }
    })
  }
  render(){
    return(
      <Menu onClick={handleClick.bind(this)} style={{ width: 200 }} mode="vertical" theme='dark'>
        {this.renderItem(menuList)}
      </Menu>
    )
  }
}
export default withRouter(CustomNav)