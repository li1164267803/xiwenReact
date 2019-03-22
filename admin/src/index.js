import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.less';
import Axios from './axios/index'
import Router from './router';
// import 'antd/dist/antd.css'//全局引入antd文件样式
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
Component.prototype.$axios = Axios
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
