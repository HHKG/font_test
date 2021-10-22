import React from 'react';
import {Input,Select} from 'antd';
import {PlusOutlined,DeleteOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
const {Option}=Select;
const EditorComponent=(Iprops)=>{
  return <React.Fragment>
     <ul className="flex">
      <li><Input placeholder="输入点什么..." /></li>
      <li className="m-l-10"><Input placeholder="输入点什么..." /></li>
      <li className="m-l-10"><Select placeholder="请选择类型" allowClear><Option value="lucy">Lucy</Option></Select></li>
      <li className="m-l-10"><PlusOutlined /><DeleteOutlined className="m-l-10"/></li>
    </ul>
  </React.Fragment>
}
export default EditorComponent;