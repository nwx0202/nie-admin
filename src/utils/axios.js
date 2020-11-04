import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import {getToken} from './auth'

// 创建axios实例
let service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000
});

// request拦截器
service.interceptors.request.use(req => {
  req.headers = {
    'Authorization': 'Token' + getToken('Token')
  }
  return req;
}, error => {
  Promise.reject(error);
});

// response拦截器 TODO：重新登录需要用户信息
service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code !== 200) {
    Message({
      type: 'error',
      message: res.message,
      duration: 1000 * 3
    });

    // 根据服务端约定的状态码：5001:非法的token; 5002:其他客户端登录了; 5004:Token 过期了;
    if (res.code === 5001 || res.code === 5002 || res.code === 5004) {
      MessageBox.confirm('您已被登出，请重新登录', {
        type: 'warning',
        confirmButtonText: '重新登录',
        cancelButtonText: '取消'
      }).then(() => {
        // store.dispatch('Logout').then(() => {
        //   location.reload();
        // });
      });
    }
    return Promise.reject('error');
  } else {
    return res.data;
  }
}, error => {
  Message({
    type: 'error',
    message: error.message,
    duration: 1000 * 3
  })
  return Promise.reject(error);
});

export default service
