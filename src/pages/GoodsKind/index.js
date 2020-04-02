import React, { Component } from 'react'
import style from './index.module.less'
import {getAllKind,addGoodsKind,delGoodsKind} from '@api/goodsKind'
import { Tabs, Button, Input, notification } from 'antd';
const { TabPane } = Tabs;

class GoodsKind extends Component{
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      activeKey: '10',
      panes:[],
      inputKind:''
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  // 点击标签删除后的动作
  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    // 调用接口 删除数据库的数据
    delGoodsKind(targetKey).then((data)=>{
      // console.log(data)
    })
    this.setState({ panes, activeKey });
  };
  
  // 通知提醒框
  openNotificationWithIcon=(type,msg)=>{
    notification[type]({
      message: '操作失败',
      description: msg,
      duration: 2,
    })
  }
  // 得到所有的物品种类
  getGoodsKind=async()=>{
    let {err, list, msg} = await getAllKind()
    let {panes} = this.state
    // 先把panes里原来的值去掉
    panes.splice(0,panes.length)
    this.setState({panes},()=>{
      if(err){return this.openNotificationWithIcon('error',msg) }
      list.map((item)=>{
        return (
          panes.push({title:item.kindName,content:`我是${item.kindName}分类`,key:item._id,closable: false})
        )
      })
      this.setState({panes},()=>{
        this.activeKey=panes[0].key
      })
    })
  }
  componentDidMount(){
    this.getGoodsKind()
  }
  render() {
    let {panes,inputKind} = this.state
    return (
      <div className={style.wrapper}>
        <div className={style.box} >
          <div style={{ marginBottom: 16 }}>
            <Button type='primary' onClick={()=>{
              // 点击按钮添加物品种类
              addGoodsKind(inputKind).then((data)=>{
                let {err,msg} = data
                // 当添加失败的时候，报错
                if(err){return this.openNotificationWithIcon('error',msg) }
                // 添加成功就再取一遍所有种类
                this.getGoodsKind()
                // 点击添加后 清楚输入框的内容
                this.setState({inputKind:''})
              })
            }}>添加种类
            </Button>
            <Input 
              value = {inputKind}
              onChange={(e)=>{
                this.setState({inputKind:e.target.value})
              }}
              placeholder="请输入添加的种类名"
              style={{width:150}}
            />
          </div>
          <Tabs
            hideAdd
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
            defaultActiveKey='0'
          >
            {/* 按照得到的实际种类渲染tab标签 */}
            {panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default GoodsKind