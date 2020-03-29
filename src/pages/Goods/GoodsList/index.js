import React, { Component } from 'react';
import {Pagination,Spin,Card,message,Table,Tag,Button,Popconfirm,Rate} from 'antd'
import {getAllGoods,delGoods,updataPutaway} from '../../../api/goods'
import style from './index.module.less'

// 评分的解释
const descWord = ['太糟了！', '不太好', '一般', '很好', '好炸了！'];

class GoodsList extends Component{
  state={
    spinning:false,
    page:1,//页码数
    pageSize:4,//每页显示的条数
    list:[], //列表数据
    sumCount:0, //总数量
    columns:[
      {title: '_id',dataIndex: '_id',key: '_id',width:120,fixed:'left'},
      {title: '名称',dataIndex: 'name',key: 'name',width:120},
      {title: '库存',dataIndex: 'stock',key: 'stock',width:80},
      {title: '价格',dataIndex: 'price',key: 'price',width:120},
      {title: '类别',dataIndex: 'kind',key: 'kind',width:120,render(kind){
        return( <span>{kind?kind:'暂无类别'}</span>)
      }},
      {title: '缩略图',dataIndex: 'path',key: 'path',width:200,height:150,render(path){
        let result = 'http://118.178.224.68:3333'+path
        return(<img width ='150' height='100'src={result} alt='这是商品的缩略图'/>)
      }},
      {title: '描述',dataIndex: 'desc',key: 'desc',width:200,render(desc){
        let numDesc = Number(desc)
        return (<span>
          <Rate tooltips={descWord} value={numDesc} disabled/>
          {numDesc ? <span className="ant-rate-text">{descWord[numDesc - 1]}</span> : ''}
        </span>)
      }},
      {title: '单位',dataIndex: 'unit',key: 'unit',width:80},
      {title: '状态',dataIndex: 'putaway',key: 'putaway',render(putaway){
        let obj={'-1':{color:'red',msg:'已下架'},'0':{color:'yellow',msg:'未上架'},'1':{color:'green',msg:'已上架'}}
        return(<Tag color={obj[putaway].color}>{obj[putaway].msg}</Tag>)  
      },width:120},
      {title: '操作',key: 'action',width:120,fixed:'right',render:(recode)=>{
        return(
          <div>
            <Popconfirm title='你确定要删除该商品嘛?'
            onConfirm={()=>{this.delGoods(recode._id)}}
            >
              <Button type='danger' size='small'>删除</Button>
            </Popconfirm>
            <Popconfirm title='你确定要修改该商品的状态嘛?'
            onConfirm={()=>{this.putAwayGoods(recode._id,recode.putaway)}}
            >
              <Button type='warn' size='small'>上架</Button>
            </Popconfirm>
            <Button type='primary' size='small' onClick={()=>{
              // 跳转到修改页面 传递要修改的id 
              this.props.history.replace('/admin/goodsInfoUpdate/'+recode._id)
            }}>修改</Button>
            
          </div>
        )
      }}
    ]
  }
  componentDidMount(){
    this.getGoodsData()
  }
  // 改变商品的上架状态
  putAwayGoods=(_id,putaway)=>{
    if(putaway ===0||putaway === -1){
      putaway = 1
    }else{
      putaway = -1
    }
    updataPutaway(_id,putaway).then((data)=>{
      if(data.err!==0){return message.error(data.message)}
      this.getGoodsData()
    })
  }
  // 删除商品
  delGoods=(_id)=>{
    delGoods(_id).then((data)=>{
      if(data.err!==0){return message.error(data.message)}
      this.getGoodsData()
    })
  }
  // 获取商品数据
  getGoodsData = ()=>{
    // 加载前的菊花
    this.setState({spinning:true})
    let {page,pageSize} = this.state
    getAllGoods(page,pageSize)
    .then((data)=>{
      if(data.err!==0){return message.error(data.msg)}
      this.setState({list:data.list,spinning:false,sumCount:data.sumCount})
    })
  }
  render(){
    let {list,columns,spinning,sumCount,pageSize,page} = this.state
    return(
      <div className={style.box}>
        <Card className={style.card} title='商品列表'>
        <Button type='primary' onClick={()=>{
             this.props.history.push('/admin/goodsInfoAdd')
           }}>商品添加</Button>
          <Spin spinning={spinning}>   
            <Table 
            columns={columns} 
            dataSource={list} 
            scroll={{ x: 540 }} 
            rowKey='_id'
            pagination={false}
            />
            {/* 分页器 */}
            <Pagination className={style.pagination} current={page} total={sumCount} showQuickJumper pageSize={pageSize}
            onChange={(page,pageSize)=>{
              //只要页码数发生改变就会触发          
              this.setState({page},()=>{
                this.getGoodsData()
              })   
            }}
            />
          </Spin>
        </Card>
      </div>
    )
  }
}

export default GoodsList