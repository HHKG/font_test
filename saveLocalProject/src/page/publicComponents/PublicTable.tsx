import React from 'react';

class PublicTable extends React.Component{
   run=()=>{
    setTimeout(_ => console.log(4))//宏任务

    new Promise(resolve => {
      resolve('')
      console.log(1)
    }).then(_ => {//微任务
      console.log(3)//微任务会在宏任务之前执行
    })
    console.log(2)
   }
   render(){
     return <div onClick={this.run}>测试一下宏任务,微任务</div>
   }
}
export default PublicTable;