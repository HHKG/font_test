import React, { Component, PureComponent } from 'react';
// function Component
function FuncComp() {
  return <div>FuncComp</div>
}
// Component
class Comp extends Component {
  render() {
    return (
      <div>
        component
      </div>
    );
  }
}
// Pure Component
class PureComp extends PureComponent {
  render() {
    return (
      <div>
        Pure Component
      </div>
    );
  }
}
console.log(<FuncComp />);//这里会在控制台打印出一个对象，这个对象产生的过程：FuncComp组件中的render方法返回jsx语法，babel插件会解析转化jsx语法：实质上就是调用React.createElement()方法，这个方法的入参是type,key，ref,self,source,owner,props等，在createElement中用element对象接收这些参数，用于返回，所以就形成了，控制台所打印的组件对象；
console.log(<Comp />);
console.log(<PureComp />);
class Test extends Component {
  render() {
    return (
      <div>
        <FuncComp />
        <Comp />
        <PureComp />
      </div>
    );
  }
}
export default Test;
/**
 * 这里做一下笔记：
 * __proto__和prototype的关系
 * js中万物皆对象，然而，对象中都有一个隐式的原型，这个原型就是__proto__，这个隐形的原型指向这个对象的构造函数的原型，
 * 这也是实例对象能够访问到构造函数中的属性和方法的原因；
 * 
 * 对象还有一个prototype属性，这个属性指向当前对象，这个属性包含所有实例方法包含的共享属性和方法，这个对象还有一个属性
 * 叫constructor,这个属性包含一个指针，指向构造函数
 */

