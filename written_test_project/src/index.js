import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import HomePage from "./pages/homePage";
import {
  CaretRightOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const mockData = [
  {
    name: "前五供应商",
    display_name: "标注多事件时显示的标题",
    type: "event",
    isExpand: false,
    data: [
      {
        name: "供应商名称",
        type: "string",
        isExpand: false,
        display_name: "供应商名称",
        data: [
          {
            name: "供应商电话",
            type: "string",
            isExpand: false,
            display_name: "供应商电话",
            data: [
              {
                name: "供应商电话",
                isExpand: false,
                type: "string",
                display_name: "供应商电话",
              },
              {
                name: "供应商logo",
                isExpand: false,
                type: "string",
                display_name: "供应商logo",
                data: [
                  {
                    name: "供应商电话",
                    isExpand: false,
                    type: "string",
                    display_name: "供应商电话",
                    data: [
                      {
                        name: "供应商电话",
                        isExpand: false,
                        type: "string",
                        display_name: "供应商电话",
                      },
                      {
                        name: "供应商logo",
                        isExpand: false,
                        type: "string",
                        display_name: "供应商logo",
                      },
                    ],
                  },
                  {
                    name: "供应商logo",
                    isExpand: false,
                    type: "string",
                    display_name: "供应商logo",
                  },
                ],
              },
            ],
          },
          {
            name: "供应商logo",
            isExpand: false,
            type: "string",
            display_name: "供应商logo",
          },
        ],
      },
      {
        name: "供应商电话",
        isExpand: false,
        type: "string",
        display_name: "供应商电话",
      },
      {
        name: "供应商logo",
        isExpand: false,
        type: "string",
        display_name: "供应商logo",
      },
      {
        name: "地址",
        type: "event",
        isExpand: false,
        display_name: "地址",
        data: [
          {
            name: "门牌号",
            type: "string",
            isExpand: false,
            display_name: "门牌号",
          },
          {
            name: "街道号",
            isExpand: false,
            type: "string",
            display_name: "街道号",
          },
        ],
      },
    ],
  },
  {
    name: "证券简称",
    isExpand: false,
    display_name: "标注多事件时显示的标题",
    type: "event",
    data: [
      {
        name: "供应商名称",
        isExpand: false,
        type: "string",
        display_name: "供应商名称",
      },
    ],
  },
  {
    name: "证券代码",
    display_name: "标注多事件时显示的标题",
    isExpand: false,
    type: "event",
    data: [
      {
        name: "供应商名称",
        isExpand: false,
        type: "string",
        display_name: "供应商名称",
      },
    ],
  },
];
const { SubMenu } = Menu;
const handleClick = () => {
  console.log("点击了菜单");
};
console.log("-------");
ReactDOM.render(
  <React.StrictMode>
    <Menu
      onClick={handleClick}
      style={{ width: 800 }}
      defaultOpenKeys={["sub1"]}
      selectedKeys={[1]}
      mode="inline"
    >
      <HomePage mockData={mockData} />
    </Menu>
    <Menu
      theme={"dark"}
      onClick={handleClick}
      style={{ width: 256 }}
      defaultOpenKeys={["sub1"]}
      selectedKeys={[1]}
      mode="inline"
    >
      <SubMenu key="sub1" title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
