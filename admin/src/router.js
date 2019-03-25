import React,{Component,Fragment} from 'react';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App';
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Goods from './pages/goods/goods'
import Line1 from './pages/echarts/line/line1'
import Line2 from './pages/echarts/line/line2'
import pie1 from './pages/echarts/pie/pie1'

class Router extends Component{
    render() {
      return (
        <Fragment>
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/login'></Redirect>
                        {/* <Route path='/admin' component={Admin}></Route> */}
                        <Route path='/admin' render={()=>{
                            return (
                                <Admin>
                                    <Route path='/admin/home' render={()=>{
                                        return(
                                            <div>这里是首页</div>
                                        )
                                    }}>
                                    </Route>
                                    <Route path='/admin/setting' render={()=>{
                                        return(
                                            <div>这里是设置</div>
                                        )
                                    }}>
                                    </Route>
                                    <Route path='/admin/goods' component={Goods}></Route>
                                    <Route path='/admin/echart/line/line1' component={Line1}></Route>
                                    <Route path='/admin/echart/line/line2' component={Line2}></Route>
                                    <Route path='/admin/echart/pie/pie1' component={pie1}></Route>
                                </Admin>
                            )
                        }}>
                        </Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </HashRouter>
            </App>
        </Fragment>
      )
    }
}
export default Router