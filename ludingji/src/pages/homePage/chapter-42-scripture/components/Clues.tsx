import React from 'react';
import {Radio,Form,Select,Input,Button,Table} from 'antd';
import '../index.css';
interface CluesTable  {
  fixed:string;
  title:string;
  width:number;
  key:string;
  dataIndex:string;
}
const Clues=(Iprops:{type:string,dataSource:any})=>{
  const [value, setValue] = React.useState(1);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key:'id',
      width:120,
      fixed: 'left',
    },
    {
      title: '类型',
      key:'type',
      width:120,
      dataIndex: 'type',
    },
    {
      title: '应用名称',
      key:'application',
      width:200,
      dataIndex: 'application',
    },
    {
      title: '鹿游',
      key:'router',
      width:200,
      dataIndex: 'router',
    },
    {
      title: '版本',
      key:'version',
      width:120,
      dataIndex: 'version',
    },
    {
      title: '描述',
      key:'desc',
      width:200,
      dataIndex: 'desc',
    },
    {
      title: '创建人',
      key:'creator',
      width:120 ,
      dataIndex: 'creator',
    },
    {
      title: '最后修改人',
      key:'lastChange',
      width:'120px',
      dataIndex: 'lastChange',
    },
    {
      title: '标签',
      key:'label',
      width:'120px',
      dataIndex: 'label',
    },
    {
      title: '方法',
      key:'fc',
      width:'120px',
      dataIndex: 'fc',
    },
    {
      title: '创建时间',
      key:'gmtCreate',
      width:'120px',
      dataIndex: 'gmtCreate',
    },
    {
      title: '最后修改时间',
      key:'gmtModified',
      width:'120px',
      dataIndex: 'gmtModified',
    },
    {
      title:'操作',
      dataIndex:'',
      width:200,
      fixed: true,
    }
  ];
  const onChange=(e:any)=>{
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  /**
   *  myClear
   * 清除定时器
   */

  /**
   * 
   * 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
   */
  const mySetInterVal=(fn:Function, a:number, b:number)=>{

    /**
     * 假设a=1,b=2，每次要间隔1,3,7写一个清除函数
     */
    //  const timer=setInterval((a)=>{
    //   console.log(a);
    // },a)
    const targetArr=[a,a+b,a+2*b];
    console.log(fn,a,b);
  }

  return <React.Fragment>
    <label>
      类型：
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>不限</Radio>
      <Radio value={2}>页面</Radio>
      <Radio value={3}>接口</Radio>
      <Radio value={4}>只看预发</Radio>
      <Radio value={5}>只看线上</Radio>
    </Radio.Group>
    </label>
    <div className="m-t-20">
      <Form className="form-flex">
          <Form.Item label="应用" className="form-item-width m-r-20">
            <Select>
              <Select.Option value="Demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="路径" className="form-item-width m-r-20">
            <Input placeholder="请输入路径"/>
          </Form.Item>
          <Form.Item label="标签" className="form-item-width m-r-20">
            <Input placeholder="请输入标签"/>
          </Form.Item>
          <Form.Item label="开发" className="form-item-width m-r-20">
            <Input placeholder="请输入创建人/修改人"/>
          </Form.Item>
          <Form.Item label="描述" className="form-item-width m-r-20">
            <Input placeholder="请输入描述"/>
          </Form.Item>
          <Form.Item label="主键" className="form-item-width m-r-20">
            <Input placeholder="请输入主键"/>
          </Form.Item>
          <Form.Item label="标签" className="form-item-width m-r-20">
            <Input placeholder="请输入请输入标签"/>
          </Form.Item>
          <Form.Item className="m-r-20">
          <Button type="primary">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button type="default">重置</Button>
        </Form.Item>
      </Form>
    </div>
    {/* <Table<CluesTable> columns={columns} dataSource={Iprops.dataSource}></Table> */}
  </React.Fragment>
}
export default Clues;