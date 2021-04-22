import axios from 'axios'

import { rootPath } from './config'

import router from '../../router/index'; //引入路由

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.baseURL = rootPath;
axios.defaults.withCredentials = true;// 允许跨域携带cookie

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // 后面请求参数需要做签名校验再处理
        let userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
            config.headers.token = JSON.parse(userInfo).token; //请求头加入token校验登录状态
        }
        if(config['contentType']){
            config.headers['Content-Type'] = config['contentType']
        }
        config.headers.version = '1.0.0'
        return config;
    },
    error => {
        return Promise.reject(error);
    });




// http response 拦截器
axios.interceptors.response.use(
    response => {
        // console.log(response)
        if (!response.request.responseType || response.request.responseType !== "blob") {
            if (response.status === 200 && response.data.code == 200) {
                return Promise.resolve({ succeed: true, data: response.data.data });
            } else if (response.status === 200) {
                //  -1 表示过期 token不存在 在其它设备登录
                // 开发阶段，暂时注释
                // if (response.data.code == -1) {
                //     router.push({ path: '/login' })
                //     localStorage.removeItem('userInfo')
                //     localStorage.removeItem('authList')
                // } else if (response.data.code == 403) {
                //     // 无访问权限
                //     router.push({ path: '/index' })
                // }
                return Promise.resolve({ succeed: false, data: response.data });
            } else if (response.status) {
                return Promise.resolve({ succeed: false, data: { code: 60001 + response.status, data: {}, msg: '服务器异常' + response.status } });
            } else {
                return Promise.resolve({ succeed: false, data: { code: 60002, data: {}, msg: JSON.stringify(response) } });
            }
        } else {
            // 下载
            return Promise.resolve({ succeed: true, data: response.data});
        }

    },
    error => {
        console.log(error)
        return Promise.resolve({ succeed: false, data: { code: 60002, data: {}, msg: JSON.stringify(error) } });
    });


export default axios;