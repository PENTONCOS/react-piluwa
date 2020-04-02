import React, { Component } from 'react';
import style from './index.module.less';
import {Card ,Table,Button,Modal,notification,Spin,Popconfirm,message} from 'antd';
import {PlusOutlined ,CloseCircleOutlined } from '@ant-design/icons';
import api from '../../../api/admin';


// let columns =;
class Normaluser extends Component {
  state={dataSource:[],
  visible:false,
  spinning:false,
  columns: [
 
  
    {
      title: '账号',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title:'操作',
      key:'action',
      render:(h)=>{
       
        return( <Popconfirm
          title="你确定要删除么？"
          onConfirm={()=>{
            this.del(h._id);
          }}
          onCancel={()=>{
            message.error('取消删除');
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger size='small' ><CloseCircleOutlined />
          删除</Button>
        </Popconfirm>
         
        )
      }
    }
   
  ]
}
del=async (_id)=>{
console.log('删除',_id);
let result=await api.delAdmin(_id);
console.log(result)
this.freshlList()


}
  handleOk= async ()=>{
    let user=this.refs.us.value;
    let pass=this.refs.ps.value;
    let result=await api.addAdmin({user,pass})
   
   
    if(result.err!==0){
     
      return (notification.error({ description:'用户添加失败',message:'添加失败',duration:1.5}, this.refs.us.value='',
      this.refs.ps.value=''))
     
      }
  
    notification.success({ description:'用户添加成功',message:'添加成功',duration:1.5})
    this.refs.us.value=''
    this.refs.ps.value=''
    this.setState({visible:false})
    this.freshlList()
    
  }
  handleCancel=()=>{
    console.log('点击取消');
    this.setState({visible:false})
  }
  freshlList=async()=>{
    this.setState({spinning:true})
    let result=await api.getAllAdmins()
    console.log(result)
   
    this.setState({dataSource:result.list,spinning:false})
  }
   componentDidMount(){
   this.freshlList()
  }
  render() { 
    let {dataSource,visible,spinning,columns}=this.state
    return ( 
      <div className={style.administrator}>
       <Card title='用户列表'>
         <Button type="primary" onClick={()=>{this.setState({visible:true})}}><PlusOutlined />用户添加</Button>
       
    <Spin spinning={spinning}>
    <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
    </Spin>
        
       </Card>
       <Modal
          title="用户添加"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        userName: <input type="text" ref='us'/>
        passWord: <input type="text" ref='ps'/>
        </Modal>
        </div>
      
     );
  }
}

 
export default Normaluser;