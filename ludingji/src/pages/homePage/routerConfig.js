import { lazy } from "react";
const Login = lazy(() => import("../login/Login"));
const Chapter42Scripture = lazy(() =>
  import("../homePage/chapter-42-scripture/index")
);
const routerLinkConfig = [
  {
    link: "/login",
    txt: "登录",
  },
  {
    link: "/index",
    txt: "简介页",
  },
  {
    link: "/homePage",
    txt: "首页",
  },
  {
    link: "authorResumes",
    txt: "作者简历",
  },
  {
    link: "systemFace",
    txt: "系统主页",
  },
];
const routerComponentConfig = [
  {
    component: Chapter42Scripture,
    path: "/homePage",
  },
];

export { routerLinkConfig, routerComponentConfig };
