import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SiderLayout from './layout';
import SystemFace from './systemFace';
import Personal from '../personal/personal';
import SystemDocs from '../systemDocs/systemDocs';
import '../../style/public.css';
import 'antd/dist/antd.css';//单页应用，在这里相当于全局引入
const HomePage=():React.ReactElement=>{
  useEffect(()=>{
    if(!localStorage.getItem('token')&&!(window.location.pathname==='/systemFace'||window.location.pathname==='/personal'||window.location.pathname==='/systemDocs')){
      window.location.pathname='/systemFace';
    }
  },[])
  return <React.Fragment>
          <Router>
            {
              window.location.pathname==='/systemFace'?<SystemFace/>:window.location.pathname==='/personal'?<Personal/>:window.location.pathname==="/systemDocs"?<SystemDocs/>:localStorage.getItem('token')&&<SiderLayout/>
            }
          </Router>
  </React.Fragment>
}
export default HomePage;