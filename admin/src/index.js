import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.less';
import Axios from './axios/index'
import Router from './router';
// import 'antd/dist/antd.css'//全局引入antd文件样式
import * as serviceWorker from './serviceWorker';
Component.prototype.$axios = Axios;//顺序问题 一定要把这个自定义的属性 放在渲染界面之前

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
