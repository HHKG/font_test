import { Button } from 'antd';
import React,{ useState,useEffect } from 'react';
import MonacoEditor,{MonacoDiffEditor}from 'react-monaco-editor';
import Request from '../../../utils/http';



const MonacoEditorDom=(Iprops:{currentContent:string,filePath:string})=>{
  const [currentContent,setCurrentContent]=useState('');
  const options = {
    selectOnLineNumbers: true
  };
  const saveNewChangeContent=async()=>{
    const res=await Request.post('saveFile.json',{
      filePath:Iprops.filePath,
      content:currentContent
    })
    console.log(res);
  }
  const getMonacoContent=(saveValue:string)=>{
    setCurrentContent(saveValue)
    console.log(saveValue);
  }
  const onChange=(newValue: any, e: any)=>{
    getMonacoContent(newValue);
  }
  
  const   editorDidMount=(editor: { focus: () => void; }, monaco: any)=>{
    console.log('editorDidMount', editor);
    editor.focus();
  }
  
  return <React.Fragment>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={currentContent?currentContent:Iprops.currentContent}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
      {/* <MonacoDiffEditor
        width="800"
        height="600"
        language="javascript"
        original={code1}
        value={code2}
        options={options}
      /> */}
      <Button type="primary" onClick={saveNewChangeContent}>保存文件</Button>
  </React.Fragment>
}
export default MonacoEditorDom;