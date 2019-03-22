import React,{Component,Fragment} from 'react';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App';
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Goods from './pages/goods/goods'

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
                                    <Route path='/admin/setting' component={Goods}></Route>
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