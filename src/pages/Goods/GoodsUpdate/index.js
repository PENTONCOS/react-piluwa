import React, { Component } from 'react';
import {Card,
  Form,
  Select,
  Radio,
  Button,
  Upload,
  Rate,
  Input,
  InputNumber,
  message,
} from 'antd';
import { UploadOutlined} from '@ant-design/icons';  
import { getAllKind} from '../../../api/goodsKind';
import {uploadImg} from '../../../api/uploadPic';
import { addGoods,getGoodsById} from '../../../api/goods';
import style from './index.module.less'

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

// 上传了图片之后
const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};


// 评分的解释
const descWord = ['太糟了！', '不太好', '一般', '很好', '好炸了！'];

class GoodsUpdate extends Component{
  state = {
    name:'美赞臣',
    path:null,
    desc:3,
    stock:125,
    putaway:1,
    price:3000,
    unit:'包',
    kind:'全球奶粉',
    types:[],
    fileList: [],
    uploading: false,
  }
  // 确认提交
  submit= async()=>{
    if(!this.state.path){
      return message.info('请先上传图片')
    }
    let {err,msg} = await addGoods(this.state)
    console.log(this,this.state)
    if(err){return message.error(msg)}
    this.props.history.replace('/admin/goodslist')
  }
  // 上传图片
  handleUpload = async () => {
    this.setState({
      uploading: true,
    });
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      // 图片验证
      let{size,type} = file
      let types = ['jpg',"jpeg",'gif','png']
      if(size>1000000){ return message.warning('图片超过1m')}
      if(types.indexOf(type.split('/')[1])===-1){ return message.warning('只允许jpg.jpeg,gif,png四种类型')}
      formData.append('submit',file)
    });
    // 调用接口
    let {err,msg,path} = await uploadImg(formData)
    if (err!==0){return message.error('上传失败！',msg)}
    this.setState({
      uploading: false,
      path:path
    });
    message.success('上传成功！');
  };
  async componentDidMount(){
    // 获取id
    let {id} =  this.props.match.params
    // 获取所有物品的种类
    let result = await getAllKind()
    // 通过id 获取修改信息
    let {list} = await getGoodsById(id)
    console.log(result.list,list[0])
    this.setState({types:result.list,...list[0]})
  }
  
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  render(){
    let { name,desc,stock,putaway,price,unit,types,kind,uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      
      fileList,
    };
    return(
      <div className={style.box}>
        <Card title='商品添加' className={style.card}>
          <Form
            ref='addGoods'
            name="addGoods"
            {...formItemLayout}
          >
            {/* 商品名称 */}
            <Form.Item
              name="name"
              label="商品名称"
              rules={[
                {
                  required: true,
                  message: '未填写商品名称！',
                },
              ]}
            >
              <Input value={name} placeholder={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/>
            </Form.Item>
            {/* 商品价格 */}
            <Form.Item
              name="price"
              label="商品价格"
              rules={[
                {
                  required: true,
                  message: '未填写商品价格！',
                },
              ]}
            >
              <InputNumber min={1} placeholder={price} max={100000} value={price} onChange={(e)=>{
                this.setState({price:e})
              }} />
            </Form.Item>
            {/* 商品库存 */}
            <Form.Item
              name="stock"
              label="商品库存"
              rules={[
                {
                  required: true,
                  message: '未填写商品库存！',
                },
              ]}
            >
              <InputNumber placeholder={stock} min={1} max={100000} value={stock} onChange={(e)=>{
                this.setState({stock:e})
              }} />
            </Form.Item>
            {/* 商品单位 */}
            <Form.Item
              name="unit"
              label="商品单位"
              rules={[
                {
                  required: true,
                  message: '未填写商品单位！',
                },
              ]}
            >
              <Input placeholder={unit} style={{width:88}}  value={unit} onChange={(e)=>{
                this.setState({unit:e.target.value})
              }}/>
            </Form.Item>
            
            {/* 下拉选择商品上架状态 */}
            <Form.Item
              name="select"
              label="发布状态"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '未选择上架状态！',
                },
              ]}
            >
              <Select placeholder="请选择上架状态"   value={putaway} onChange={(e)=>{
              this.setState({putaway:Number(e)})
            }} defaultValue={putaway}>
                <Option value={-1}>下架</Option>
                <Option value={0}>未上架</Option>
                <Option value={1}>上架</Option>
              </Select>
            </Form.Item>
            {/* 可选商品种类 */}
            <Form.Item 
              name="kind" 
              label="商品种类" 
              rules={[
                {
                  required: true,
                  message: '请选择商品种类！',
                },
              ]}>
              <Radio.Group onChange={(e)=>{
                this.setState({kind:e.target.value})
              }} value={kind} defaultValue={kind}>
                {types.map((item)=>{
                  return (<Radio key={item._id} value={item.kindName}>{item.kindName}</Radio>)
                })}
              </Radio.Group>
            </Form.Item>

            {/* 描述评分 */}
            <Form.Item 
              name="desc" 
              label="评分"
            >
              <span>
                <Rate tooltips={descWord} value={desc} onChange={(e)=>{
                  this.setState({ desc:e })
                }} />
                {desc ? <span className="ant-rate-text">{descWord[desc - 1]}</span> : ''}
              </span>
            </Form.Item>
            {/* 点击上传图片 */}
            <Form.Item
              label="上传图片"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="上传图片大小不能超过1M"
              rules={[
                {
                  required: true,
                  message: '请上传图片！',
                },
              ]}
            >
              <Upload {...props}>
                <Button>
                  <UploadOutlined /> 请选择图片
                </Button>
              </Upload>
              <Button
                type="primary"
                onClick={this.handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
              >
                {uploading ? '正在上传...' : '开始上传'}
              </Button>
            </Form.Item>
            {/* 点击提交 */}
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" onClick={this.submit}>
                确认提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default GoodsUpdate