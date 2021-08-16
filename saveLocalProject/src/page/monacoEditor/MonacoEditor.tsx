import React,{useRef,useEffect} from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

const MonacoEditor=()=>{
  const refContainer=useRef<any>()
  useEffect(()=>{
    if(refContainer.current){
      const monacoInstance=monaco.editor.create(refContainer.current,{
        value:`console.log("hello,world")`,
        language:"javascript"
    })
    monacoInstance.dispose();//使用完成销毁实例
  }
  },[]);
  return <React.Fragment>
    <div ref={refContainer} id="monaco">

    </div>
    
  </React.Fragment>
}
export default MonacoEditor;