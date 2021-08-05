import React, { useState } from 'react';
import Request from '../../../utils/http'

import { Button,Input } from 'antd';

const UploadCode=():React.ReactElement=>{
  const [fileUrl,setFileUrl]=useState('');
  return <React.Fragment>
      <Input placeholder="请输入需要上传的文件路径" onChange={(val)=>{
        console.log(val.target.value);
          setFileUrl(val.target.value);
      }}/>
      <Button type="primary" onClick={async()=>{
      Request.post("/readTargetFile.json",{fileUrl:fileUrl}).then(res=>{
        console.log(res);
      })
        
        // axios.post('http://localhost:3333/readTargetFile.json',{url:fileUrl})
        // http://localhost:3333/readTargetFile.json

      }}>上传</Button>
  </React.Fragment>
}
export default UploadCode;