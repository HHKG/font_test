import React from 'react';
import {Route,Switch } from 'react-router-dom';

interface RouterConfig{
  path:string;
  component:any
}

const RouterCenter=(Iprops:{routerComponentConfig:Array<RouterConfig>}):React.ReactElement=>{
  const routerComponent=Iprops.routerComponentConfig||[];
  return<Switch>
              {
                routerComponent.map(_item=>{
                  return <Route key={_item.path} path={_item.path} component={_item.component}></Route>
                })
              }
        </Switch>
}
export default RouterCenter;