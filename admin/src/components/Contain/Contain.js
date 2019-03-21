import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import './Contain.less'
export default class Contain extends Component{
    render() {
      return (
        <div className='contain'>
          <Route path='/admin/home' render={()=>{
              return(
                  <div>这里是首页</div>
              )
          }}>
          </Route>
          <Route path='/admin/setting' render={()=>{
              return(
                  <div>这里是设置了</div>
              )
          }}>
          </Route>
        </div>
      )
    }
}