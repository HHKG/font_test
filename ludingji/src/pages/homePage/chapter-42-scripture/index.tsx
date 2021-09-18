import React, { useState } from 'react';
import {Tabs} from 'antd';
import Clues from './components/Clues';
const { TabPane } = Tabs;
const Chapter42Scripture=()=>{
  const _testData=[
    {
      'id':'1',
      'type':'接口',
      'application':'yaGui-lu',
      'router':'yaGui-lu/application.json',
      'version':'1',
      'desc':'鹿鼎记第一个接口',
      'creator':'创建人',
      'lastChange':'芽桂',
      'label':'四十二章经',
      'fc':'POST/GET/不限',
      'gmtCreate':'2021-09-13T11:32:56.000Z',
      'gmtModified':'2021-09-13T11:32:56.000Z'
    },
    {
      'id':'2',
      'type':'接口',
      'application':'yaGui-lu',
      'router':'yaGui-lu/application.json',
      'version':'1',
      'desc':'鹿鼎记第一个接口',
      'creator':'创建人',
      'lastChange':'芽桂',
      'label':'四十二章经',
      'fc':'POST/GET/不限',
      'gmtCreate':'2021-09-13T11:32:56.000Z',
      'gmtModified':'2021-09-13T11:32:56.000Z'
    },
    {
      'id':'3',
      'type':'接口',
      'application':'yaGui-lu',
      'router':'yaGui-lu/application.json',
      'version':'1',
      'desc':'鹿鼎记第一个接口',
      'creator':'创建人',
      'lastChange':'芽桂',
      'label':'四十二章经',
      'fc':'POST/GET/不限',
      'gmtCreate':'2021-09-13T11:32:56.000Z',
      'gmtModified':'2021-09-13T11:32:56.000Z'
    }
  ];
  const [dataSource,setDataSource]=useState()
  const TabConfig=[
    {title:'全部',dataKey:'all',content:<Clues type="all" dataSource={_testData}/>},
    {title:'我创造的',dataKey:'myCreate',content:<Clues type="myCreate" dataSource={_testData}/>}
  ];
  return <React.Fragment>
    <Tabs defaultActiveKey="1" type="card" size={'middle'} style={{ marginBottom: 32 }}>
      {
        TabConfig.map(_item=>{
          return <TabPane tab={_item.title} key={_item.dataKey}>
            {_item.content}
      </TabPane>
        })
      }
    </Tabs>
  </React.Fragment>
}
export default Chapter42Scripture;