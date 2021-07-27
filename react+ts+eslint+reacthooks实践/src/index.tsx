import React,{FC} from 'react';
import ReactDOM from 'react-dom';
import Test from './apis/Component/Test';
import Example1 from './apis/组件的实现与挂载/example1/example1';
import TestPureComponent from './apis/PureComponent';
import {MySuspense} from './apis/Susponse/index';
import Memo from './apis/memo/index';

const App:FC=()=>{
  return <React.Fragment>
    <div>
      {/* <MySuspense/>
      <Example1/>
      <Test/> */}
        {/* 我是一个ts+react项目 */}
        <TestPureComponent />
        <Memo/>
    </div>
  </React.Fragment>
}
ReactDOM.render(<App />, document.getElementById("root"));