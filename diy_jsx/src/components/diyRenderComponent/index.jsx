import React from "../../utils/react";
import ReactDOM from "react-dom";

const TestMyReact=()=>{
  console.log(React.createElement('div',{className:'huang'},'黄华康',React.createElement('span',{className:'hua'},'最棒')));
  return <div style={{color:'red'}}>你好</div>
}
export default TestMyReact;
