import React, { useState,Suspense, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from "antd";
import {Link} from 'react-router-dom';
import RouterCenter from '../routerCenter/routerCenter';
import {routerComponentConfig,routerLinkConfig} from '../homePage/routerConfig';
import '../homePage/homePage.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderLayout=()=> {
  const [collapsed,setCollapsed]=useState(false)

  const onCollapse = (collapsed:boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const Loading=()=><div>加载中...</div>;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={()=>onCollapse(collapsed)}>
      <h1 className="color-fff text-center height-60 p-and-m-0">鹿鼎记</h1>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            四十二章经
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            天地会
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            神龙教
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
              {
                routerLinkConfig.map(_item=>{
                  return <Link className="link-layout" key={_item.link} to={_item.link} >{_item.txt}</Link>
                })
              }
              </div>
              <a onClick={()=>{
              localStorage.removeItem('token');
              window.location.pathname="/systemFace"
              }}>登出</a>
            </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>鹿鼎记</Breadcrumb.Item>
            <Breadcrumb.Item>四十二章经</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Suspense fallback={<Loading/>}>
                <RouterCenter routerComponentConfig={routerComponentConfig}/>
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          鹿鼎记 0.0.1
        </Footer>
      </Layout>
    </Layout>
  )
}
export default SiderLayout;