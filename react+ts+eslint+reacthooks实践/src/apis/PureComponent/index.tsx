import React,{PureComponent,Component} from 'react';

class TestPureComponent extends PureComponent{
  state={
    data:{
      name:'aliens',
      age:18
    }
  }
  componentDidMount(){
    console.log('okok');
  }
  handleClick=()=>{
    const {data}=this.state;
    data.age++;
    this.setState({
      data:{...data}
    })
  }
  render(){
    const { data } = this.state
        return <div className="box" >
        <div className="show" >
            <div> 你的姓名是: { data.name } </div>
            <div> 年龄： { data.age  }</div>
            <button onClick={ this.handleClick } >age++</button>
        </div>
    </div>
  }
}
export default TestPureComponent;