import React from 'react';
import { useState } from 'react';
interface Iprops{
  num:number;
  number:number;
}
const TestMemo=(props:Iprops)=>{
  console.log('子组件渲染！');
  return <div>hello,world!</div>

}

const controllerIsRender=(pre:unknown,next:unknown)=>{
  // 1:只有 number 更改，组件渲染。

// 2: 只有 number 小于 5 ，组件渲染。
    console.log(pre,next,'-----');
    return false;
}

const NewTestMeMo=React.memo(TestMemo,controllerIsRender);

const ShowComponent=():React.ReactElement=>{
  const [num,setNum]=useState<number>(0);
  const [number,setNumber]=useState<number>(0);
  return <div>
    <div><button onClick={()=>{
       const _targetNum=num+1;
      setNum(_targetNum);
    }}>num++</button><button onClick={()=>{
      const _targetNum=num-1;
      setNum(_targetNum);
    }}>num--</button><button>{`num:${num}`}</button></div>
    <div><button onClick={()=>{
      const _targetNumber=number+1
      setNumber(_targetNumber)
    }}>number++</button><button onClick={()=>{
      const _targetNumber=number-1
      setNumber(_targetNumber)
    }}>number--</button><button>{`number:${number}`}</button></div>
    <NewTestMeMo num={num} number={number}/>
  </div>
}
export default ShowComponent;