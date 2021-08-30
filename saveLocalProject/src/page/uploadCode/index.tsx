import React, { useState,useEffect } from 'react';
import Request from '../../../utils/http'

import { Button,Input,Menu,Layout,Breadcrumb } from 'antd';
import MonacoEditorDom from '../monacoEditor/MonacoEditor';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const UploadCode=():React.ReactElement=>{
  const [fileUrl,setFileUrl]=useState('');
  const [fileDir,setFileDir]=useState<any>({});
  const [currentContext,setCurrentContext]=useState<{fileType:string;fileContext:string;filePath:string}>({fileType:'',fileContext:'',filePath:''});
  //递归项目目录
  const recursiveDir=(chidItem:any)=>{
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
  // 递归获取文件内容
  const getContext=(targetFile:any)=>{
    console.log(targetFile);
  }
  //点击MenuItem
  const onClickMenuIte=({ item, key, keyPath, domEvent }:{item:unknown;key:string;keyPath:string [],domEvent:any})=>{
      const _targetArr=keyPath.reverse();
      console.log(item, key, keyPath, domEvent)
      let targetFile=fileDir;
      let fileType='';
      let filePath=_targetArr.join('/').replace('/child','');
      _targetArr.forEach(_item=>{
        if(_item.indexOf('/')!==-1){
          _item= _item.split('/')[0];
          fileType=_item.split('.')[1];
        }
        targetFile=targetFile[`${_item}`]
      })
      setCurrentContext({
        filePath:filePath.substring(filePath.indexOf('/')),
        fileType,
        fileContext:targetFile
      });
  }

  return <React.Fragment>
      <Input placeholder="请输入需要上传的文件路径" onChange={(val)=>{
          setFileUrl(val.target.value);
      }}/>
      <Button type="primary" onClick={async()=>{
      Request.post("/readTargetFile.json",{fileUrl:fileUrl}).then(res=>{
        setFileDir(res.data)
      })
      }}>上传</Button>
      {
        Object.keys(fileDir).length>0&&<Layout>
          <Sider width={400} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              onClick={(data)=>onClickMenuIte(data)}
            >
              {
                getProjectDir()
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {/* <div style={{whiteSpace: 'pre-line'}}>
                {
                  currentContext.fileContext
                }
              </div> */}
              <MonacoEditorDom filePath={fileUrl+'/'+currentContext.filePath} currentContent={currentContext.fileContext}/>
            </Content>
          </Layout>
        
        </Layout>
      }
      
  </React.Fragment>
}
export default UploadCode;