import axios from 'axios'

axios.defaults.withCredentials = true // 允许跨域设置，不然可能因为拿不到cookie而报错

// 1.创建axios实例
export function request(config) {
    const instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 5000,
        })
        // 2.axios拦截器
        // 2.1请求拦截
    axios.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);

    })

    // 2.1响应拦截
    axios.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err);

        })
        // 3.发送真正的网络请求
    return instance(config)
}