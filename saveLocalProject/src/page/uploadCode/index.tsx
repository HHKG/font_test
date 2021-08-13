import React, { useState,useEffect } from 'react';
import Request from '../../../utils/http'

import { Button,Input,Menu,Layout } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const UploadCode=():React.ReactElement=>{
  const [fileUrl,setFileUrl]=useState('');
  const [fileDir,setFileDir]=useState<any>({});
  //递归项目目录
  const recursiveDir=(chidItem:any)=>{
    console.log(chidItem,'chidItem')
    return Object.keys(chidItem).length>0&&Object.keys(chidItem).map(currentItem=>{
      if(typeof(chidItem[`${currentItem}`])!=="string"){
        return <SubMenu key={currentItem} title={currentItem}>
            {
              recursiveDir(chidItem[`${currentItem}`])
            }
        </SubMenu>
      }else{
        return <Menu.Item key={currentItem+"/child"}>{currentItem}</Menu.Item>
      }
    })
  }
  // 遍历获取目录结构
  const getProjectDir=()=>{
    return Object.keys(fileDir).map(_item=>{
      return <SubMenu key={_item} title={_item}>
                  {
                    recursiveDir(fileDir[`${_item}`])
                  }
            </SubMenu>
    })
  }
  //点击MenuItem
  const onClickMenuIte=({ item, key, keyPath, domEvent }:{item:unknown;key:string;keyPath:string [],domEvent:any})=>{
      console.log(item, key, keyPath, domEvent);
      let strIndex='';
      keyPath.forEach(_item=>{
        strIndex+=`[${_item}]`;
      })
      let fileContext=fileDir+strIndex;
      console.log(fileContext)
  }


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
        style={{ height: '100%', borderRight: 0,width:'500px'}}
        onClick={(data)=>onClickMenuIte(data)}
      >
        {
          getProjectDir()
        }
      </Menu>
    </Sider>
      
  </React.Fragment>
}
export default UploadCode;