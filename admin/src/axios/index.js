import Axios from 'axios';

//配置
Axios.defaults.baseURL = 'https://easy-mock.com/mock/5c947b6eca36bd2d9cb7edbc/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//使用
//qs

//拦截器
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //使用qs  插件处理config里的数据
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default Axios