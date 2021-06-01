import React,{FC} from 'react';
import ReactDOM from 'react-dom';

const App:FC=()=>{
  return <React.Fragment>
    <div>
    我是一个ts+react项目
    </div>
  </React.Fragment>
}
ReactDOM.render(<App />, document.getElementById("root"));