import React from 'react';
import './personal.css';

const Personal=()=>{
  return <div className="personal-container">
      <div className="personal-head">
        <h1 className="color-153-106-6">黄华康</h1>
        <div className="color-153-106-6">求职意向：web前端开发</div>
      </div>
      <div className="personal-msg">
        <span>出生日期：1994.08.13</span>
        <span>联系电话：17840975849</span>
        <span>邮箱：972834061@qq.com</span>
        <span>工作经验：3年半</span>
      </div>
      <div className="m-t-30">
        <span className="personal-item-title">学习平台</span>
        <ul className="m-t-l-20">
          <li>gitHub：<a href="https://github.com/HHKG" target="_blank">我的gitHub</a></li>
          <li>gitee：<a href="https://gitee.com/hhkwyy" target="_blank">我的gitee</a></li>
          <li>博客园：<a href="https://www.cnblogs.com/nimon-hugo/" target="_blank">我的博客园</a></li>
          <li>掘金：<a href="https://juejin.cn/user/2022739672593421" target="_blank">我的掘金</a></li>
        </ul>
      </div>
      <div className="m-t-30">
        <span className="personal-item-title">自我描述</span>
        <hr/>
        <div>
          偏向技术栈方向：react、node、java(目前刚刚入门)
        </div>
        <h5>掌握的技术：</h5>
        <ul>
          <li>1：熟悉html、javascript、css</li>
          <li>2：熟悉react+typescript、了解vue</li>
          <li>3：熟悉node、express开发（正在开发中台服务系统）</li>
          <li>4：掌握webpack构建工具(可以构建react脚手架)</li>
          <li>5：入门java,会用spring、springBoot、mybatis、mybatisPlus开发项目（有全栈开发经验（练习））</li>
        </ul>
      </div>
      <div className="m-t-30">
        <span className="personal-item-title">教育背景</span>
        <hr/>
        <div>学校：广东轻工职业技术学院</div>
        <div>学历：大专</div>
        <div>时间：2015.09-2018.06</div>
      </div>
      <div className="m-t-30">
        <span className="personal-item-title">工作经历</span>
        <hr/>
        <ul>
          <li>2018.01.01-2018.12.25:云易网络科技（广州）有限公司</li>
          <li>2019.01.01-2019.06.30:广州沃泰集团控股有限公司</li>
          <li>2019.08-2020-05:深圳优泰文创运营有限公司</li>
          <li>2020.08-至今:阿里巴巴外包（ICBU）</li>
        </ul>
      </div>

  </div>
}

export default Personal;


// import React,{useRef} from 'react';
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   BoxGeometry,
//   MeshBasicMaterial,
//   Mesh,
//   LineBasicMaterial,
//   BufferGeometry,
//   BufferAttribute, 
//   MeshLambertMaterial,
//   PointLight,
//   AmbientLight,
//   OrthographicCamera
// } from 'three';

// const Personal=()=>{
//   const _targetNode=useRef(null);
//   // 第一个tree.js示例
//   const threeExample=()=>{
//     const _Scene=new Scene();
//     const _camera=new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//     const _renderer=new WebGLRenderer();
//     _renderer.setSize(window.innerWidth,window.innerHeight);
//     console.log(_targetNode,'_targetNode')
//     document.body.appendChild(_renderer.domElement)
//     var geometry = new BoxGeometry( 3, 3, 3 );
// 			var material = new MeshBasicMaterial( { color: 'red' } );
// 			var cube = new Mesh( geometry, material );
// 			_Scene.add( cube );

// 			_camera.position.z = 5;

// 			var animate = function () {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.01;
// 				cube.rotation.y += 0.01;

// 				_renderer.render( _Scene, _camera );
// 			};

// 			animate();
//   }
//   // 画线
//   const drawingLine=()=>{
//     const _Scene=new Scene();
//     const _renderer=new WebGLRenderer();
//     const _camera=new PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,500);
//     document.body.appendChild(_renderer.domElement);
//     _camera.position.set(0,0,100);
//     _camera.lookAt(0,0,0);
//     const material=new LineBasicMaterial({color:'#fff'});
//     const bufferGeometry=new BufferGeometry();
//     const vertices=new Float32Array([
//       -10.0, -10.0,  10.0,
//       10.0, -10.0,  10.0,
//       10.0,  10.0,  10.0,
   
//       10.0,  10.0,  10.0,
//      -10.0,  10.0,  10.0,
//      -10.0, -10.0,  10.0
//     ]);
//     bufferGeometry.setAttribute( 'position',new BufferAttribute( vertices, 3 ) );
//     var mesh = new Mesh( bufferGeometry, material );
//     _Scene.add( mesh );
//     _renderer.render( _Scene, _camera );
//   }
//   // 第一个three.js模型
//   const myFirstThree3D=()=>{
//     const _Scene=new Scene();
//     const geometry=new BoxGeometry(100,100,100);
//     const material=new MeshLambertMaterial({color:'0x0000ff'});
//     const mesh=new Mesh(geometry,material);
//     _Scene.add(mesh);
//     const point=new PointLight('#ececec');//点光源
//     point.position.set(250,200,300);//点光源位置
//     _Scene.add(point);
//     const ambient=new AmbientLight('blue');//环境光
//     _Scene.add(ambient);

//     // 相机设置
//     const _width=window.innerWidth;
//     const _height=window.innerHeight;
//     const k=_width/_height;
//     const s=100; //三维场景显示范围控制系数，系数越大，显示范围越大，立体就越小
//     // 创建相机对象
//     const _camera=new OrthographicCamera(-s*k,s*k,s,-s,1,1000);
//     _camera.position.set(100,100,200);//相机位置设置,只要改变相机的位置，就可以动态变换立体
//     _camera.lookAt(_Scene.position);//设置相机方向（指向的场景对象）
//     //创建渲染器对象
//     const _renderer=new WebGLRenderer();
//     _renderer.setSize(_width,_height);//设置渲染区域尺寸
//     _renderer.setClearColor(0xb9d3ff,1);//设置背景颜色
//     document.body.appendChild(_renderer.domElement);//body元素中插入canvas对象
//     //执行渲染操作   指定场景、相机作为参数
//     _renderer.render(_Scene,_camera);
//   }
//   return <React.Fragment>
//     <h1 ref={_targetNode}>你好！</h1>
//     <a onClick={threeExample}>展示示例</a><br/>
//     <a onClick={drawingLine}>画线</a><br/>
//     <a onClick={myFirstThree3D}>Three.js的第一个3D模型</a>
//   </React.Fragment>
// }

// export default Personal;