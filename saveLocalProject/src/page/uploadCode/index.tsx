import React, { useState,useEffect } from 'react';
import Request from '../../../utils/http'

import { Button,Input,Menu,Layout } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const UploadCode=():React.ReactElement=>{
  const [fileUrl,setFileUrl]=useState('');
  const [fileDir,setFileDir]=useState({});
  return <React.Fragment>
      <Input placeholder="请输入需要上传的文件路径" onChange={(val)=>{
        console.log(val.target.value);
          setFileUrl(val.target.value);
      }}/>
      <Button type="primary" onClick={async()=>{
      Request.post("/readTargetFile.json",{fileUrl:fileUrl}).then(res=>{
        console.log(res);
        setFileDir(res.data)
      })
        
        // axios.post('http://localhost:3333/readTargetFile.json',{url:fileUrl})
        // http://localhost:3333/readTargetFile.json

      }}>上传</Button>
      <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          Object.keys(fileDir).map(_item=>{
            return <SubMenu key={_item} title={_item}>
                        {
                          fileDir[`${_item}`]&&Object.keys(fileDir[`${_item}`]).map(_childItem=>{
                            if(typeof(fileDir[`${_item}`][`${_childItem}`])!=="string"){
                              return <SubMenu key={_childItem} title={_childItem}>
                                {
                                  Object.keys(fileDir[`${_item}`][`${_childItem}`]).length>0&&Object.keys(fileDir[`${_item}`][`${_childItem}`]).map(childChildItem=>{
                                      return <Menu.Item key={childChildItem+"/child"}>{childChildItem}</Menu.Item>
                                  })
                                  // if(typeof(fileDir[`${_item}`][`${_childItem}`])!=="string"){
                                  //   return <SubMenu key={_childItem} title={_childItem}></SubMenu>
                                  // }else{
                                  //   return <Menu.Item key={_childItem+"/child"}>{_childItem}</Menu.Item>
                                  // }
                                }
                              </SubMenu>
                            }else{
                              return <Menu.Item key={_childItem+"/child"}>{_childItem}</Menu.Item>
                            }
                          })
                        }
                      {/*  */}
                  </SubMenu>
          })
        }
      </Menu>
    </Sider>
      
  </React.Fragment>
}
export default UploadCode;