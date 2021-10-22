
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {CaretRightOutlined,MailOutlined} from '@ant-design/icons';
import './index.css';
import EditorComponent from '../../publicComponents/editorComponent/index';
const {SubMenu}=Menu;
const HomePage = (Iprops) => {
  const { mockData,clickSubMenu } = Iprops;
  const [loopData,setLoopData]=useState(mockData);
console.log(loopData);
  return <React.Fragment>
          {/* {
            loopData &&loopData.length > 0 &&loopData.map((_item,_index)=>{
              console.log(`sub${_index}`);
              return <SubMenu key={`sub${_index}`} title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            })
          } */}
  </React.Fragment>
  // return (
  //   <div className="m-20">
  //     {loopData &&
  //       loopData.length > 0 &&
  //       loopData.map((_item,_index) => {
  //         return <Menu.SubMenu onTitleClick={()=>console.log(_index)} key={'sub'+_index} title={<EditorComponent />}>
  //           <Menu.Item key={_index+'child'}>测试</Menu.Item>
          {/* {_item.data && _item.data.length > 0 && 
              <Menu.Item key={_index+'child'}><HomePage mockData={_item.data} /></Menu.Item>
          } */}
          // </Menu.SubMenu>
          
          // (
            // <div style={{ marginTop: "20px" }} key={_item.display_name}>
              {/* <Menu onClick={handleClick}
                    style={{ width: 800 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"> */}
                      
              {/* </Menu> */}
              {/* <div className="flex">
                <div>
                  <div className="flex">
                    {_item.data && _item.data.length > 0 && (
                      <CaretRightOutlined
                        onClick={() => console.log(_item)}
                        className={`cursor ${_item.isExpand ? "expand" : "close"}`}
                      />
                    )}
                    <EditorComponent />
                  </div>
                  <ul style={{ margin: "20px 0 0 20px" }}>
                    {_item.data && _item.data.length > 0 && (
                      <HomePage mockData={_item.data} />
                    )}
                  </ul>
                </div>
              </div> */}
            // </div>
          // );
        // })}
    // </div>
  // );
};
export default HomePage;