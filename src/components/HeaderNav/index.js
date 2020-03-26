import React, { Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import { Menu, Dropdown,Button , Avatar,Badge } from 'antd';
import { UserOutlined,SettingFilled,PoweroffOutlined,GlobalOutlined,BellOutlined,GithubOutlined} from '@ant-design/icons';

import style from './index.module.less'

let userMenu = (
  <Menu style={{width:150}}>
    <Menu.Item key='1' >
      <a target="_blank" rel="noopener noreferrer" href="http://118.178.224.68/#/home">
      <UserOutlined />
        <span className={style.subpullItem}>个人中心</span>
      </a>
    </Menu.Item>
    <Menu.Item key='2'>
      <a target="_blank" rel="noopener noreferrer" href="http://118.178.224.68/#/home">
        <SettingFilled/>
        <span className={style.subpullItem}>个人设置</span>
      </a>
    </Menu.Item>
    <Menu.Divider></Menu.Divider>
    <Menu.Item key='3' onClick={()=>{
        console.log(this)
      }}>
      <a target="_blank" rel="noopener noreferrer"  >
      <PoweroffOutlined />
      <span className={style.subpullItem} >退出登录</span>
      </a>
    </Menu.Item>
  </Menu>
);
let langMenu = (
  <Menu style={{width:150}}>
    <Menu.Item key='1' >
      <a target="_blank" rel="noopener noreferrer" href="http://118.178.224.68/#/home">
        <span>CN</span>
        <span className={style.subpullItem}>简体中文</span>
      </a>
    </Menu.Item>
    <Menu.Item key='2'>
      <a target="_blank" rel="noopener noreferrer" href="http://118.178.224.68/#/home">
        <span>HK</span>
        <span className={style.subpullItem}>繁体中文</span>
      </a>
    </Menu.Item>
    <Menu.Item key='3'>
      <a target="_blank" rel="noopener noreferrer"  >
      <span>US</span>
      <span className={style.subpullItem} >English</span>
      </a>
    </Menu.Item>
  </Menu>
);

class HeaderNav extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Button className={style.subpull} style={{height:`100%`,border:0}}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/The-Avengers-From-China/myapp-piluwa"  >
            <GithubOutlined style={{fontSize:18}}/>
          </a>
        </Button>
        <Button className={style.subpull} style={{height:`100%`,border:0}}>
          <a >
            <Badge count={8}  offset={[0,-4]}>
              <BellOutlined style={{fontSize:18}}/>
            </Badge>
          </a>
        </Button>
        <Dropdown className={style.subpull} overlay={userMenu} placement="bottomRight">
          <Button  style={{height:`100%`,border:0}}>
            <Avatar style={{width:24,height:24}} src="http://img2.imgtn.bdimg.com/it/u=2076373339,2173673275&fm=26&gp=0.jpg" />
            <span style={{marginLeft:7}}>Serati Ma</span>
          </Button>
        </Dropdown>
        <Dropdown className={style.subpull} overlay={langMenu} placement="bottomRight">
          <Button  style={{height:`100%`,border:0}}>
            <GlobalOutlined style={{fontSize:18}} />
          </Button>
        </Dropdown>
      </Fragment>
     );
  }
}
 
export default withRouter(HeaderNav);