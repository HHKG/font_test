import {CaretRightOutlined,CaretDownOutlined} from '@ant-design/icons';
import { useState } from 'react';
import EditorComponent from '../editorComponent/index';
import './index.css';
const TreeComponent=(Iprops)=>{
  const [isExpand,setIsExpand]=useState(false);
  const {content,dataSource}=Iprops;
  return <div className="flex">
    {
      dataSource.length>0&&<CaretRightOutlined onClick={()=>setIsExpand(!isExpand)} className={`cursor ${isExpand?'expand':'close'}`}/>
    }
    <div>
      <div>{content}</div>
      <ul style={{margin:'20px 0 0 20px'}}>
        {
          dataSource.map(_item=>{
            return <EditorComponent/>
          })
        }
      </ul>
    </div>
  </div>
}
export default TreeComponent;