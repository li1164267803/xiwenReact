import React, { Component ,Fragment} from 'react';
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

import {Button} from 'antd';

class App extends Component {
  render() {
    return (
       <Fragment>
           <HashRouter>
               <Button>你好啊</Button>
               <Switch>
                    <Redirect exact from='/' to='/admin/home'></Redirect>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
           </HashRouter>
       </Fragment>
    );
  }
}

export default App;
