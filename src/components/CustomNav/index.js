import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '../../store/actionCreator'

// eslint-disable-next-line
import { Menu} from 'antd';
import menuList from './menulist'
import {
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  SmileOutlined,
  FundViewOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  let path = e.item.props.path
  this.props.history.push(path)
  console.log(this.props)
}
class CustomNav extends Component {
  // 渲染图标
  renderIcon(icon){
    switch (icon) {
      case 'home':
        return <HomeOutlined/>
      case 'goods':
        return <ShopOutlined />
      case 'admin':
        return <TeamOutlined />
      case 'visition':
        return <FundViewOutlined />
      default:
        return <SmileOutlined />
    }
  }
  // 渲染侧边栏导航
  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        return (
          <SubMenu  key={item.key} title={
            <span>
              {this.renderIcon(item.icon)}
              <span>{item.title}</span>
            </span>
          }>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else {
        return(
          <Menu.Item  key={item.key} path={item.path}>
            <span>
              {this.renderIcon(item.icon)}
              <span>{item.title}</span>
            </span>
          </Menu.Item>
        )
      }
    })
  }

  render(){
    // let {collapsed} = this.props
    return(
      <Fragment>
          <Menu
            onClick={handleClick.bind(this)}
            style={{ width: 200 }}
            mode="inline"
            theme="dark"
          >
            {this.renderItem(menuList)}
          </Menu>
       </Fragment>
    )
  }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(actionCreator,dispatch)
})(withRouter(CustomNav))