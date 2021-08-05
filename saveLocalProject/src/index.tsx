import React,{FC} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HomePage from './page/homePage';
import PublicTable from './page/publicComponents/PublicTable';

const App:FC=()=>{
  return <React.Fragment>
    <HomePage/>
    <PublicTable/>
  </React.Fragment>
}
ReactDOM.render(<App />, document.getElementById("root"));