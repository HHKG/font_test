import React, { useState } from 'react';
import {Button,Drawer,Form, Input,Popover,message} from 'antd';

interface FormData{
  username:string;
  password:string;
  code:number
}

const SystemFace=()=>{
  const [visible,setVisible]=useState(false);
    /**
   * 登录-点击立即使用时，需要用户登录
   */
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onFinish = (values:FormData) => {
    console.log('Success:', values);
    if(values.username==="admin"||values.password==="123456"){
      message.success("登录成功！");
      localStorage.setItem('token',encodeURIComponent(values.username+'&'+values.password));
      window.location.pathname="/homePage";
    }else{
      message.error("用户名或密码错误！");
    }
  };

  const onFinishFailed = (errorInfo:unknown) => {
    console.log('Failed:', errorInfo);
  };
  const popoverContent= <div>
      <a onClick={()=>window.location.pathname='/personal'}>个人简历</a><br/>
      <a onClick={()=>window.location.pathname='/systemDocs'}>系统文档</a>
    </div>
  return <React.Fragment>
      <div className="system-container">
      <div className="system-content color-fff b-g-opacity ">
        <h1 className="color-fff">鹿鼎记</h1>
        <p>node中台应用，致力于前后端专注于业务</p>
        <div>
          <Popover content={popoverContent} title="请做出你的选择！">
            <Button className="m-r-20">了解更多</Button>
          </Popover>
          <Button type="primary" onClick={showDrawer}>立即使用</Button>
        </div>
      </div>
    </div>
    <Drawer title="请登录~" placement={'right'} width={800} onClose={onClose} visible={visible}>
    <Form name="basic" style={{width:'600px',margin:'20% auto',borderRadius:'8px',padding:'50px 0',boxShadow:'0px 0px 15px 0px #ececec'}}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="用户名" name="username"
        rules={[
          {
            required: true,
            message: '请输入你的用户名!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="密码" name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="验证码" name="code"
        rules={[
          {
            required: true,
            message: '请输入验证码!',
          },
        ]}
      >
        <div className="flex">
        <Input />
        <img src="" alt="验证码" width="60" height="30px"/>
        </div>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  </Drawer>
    </React.Fragment>

}
export default SystemFace;