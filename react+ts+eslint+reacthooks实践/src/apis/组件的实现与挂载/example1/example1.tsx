import React,{Component} from "react";

class Example1 extends Component{
  state={

  }
  render(){//一个类组件中，跟类的区别就是必须要有一个render方法，这个方法输出jsx语法，并且把他们挂载到真是DOM树上才能触发组件类中的生命周期；
    return <div>组件内部机制：组件的实现与挂载</div>
  }
}
export default Example1;