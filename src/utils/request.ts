import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useTokenStore } from "../stores/login"

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  timeout: 60000 // request timeout
})

// 添加请求拦截器，请求之前的拦截处理
request.interceptors.request.use(
  (config:any) =>{
    const store = useTokenStore()
    if (store.token) {
      config.headers['X-Token'] = store.token
    }
    return config
  },
  (error:any) => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 添加响应拦截器，请求响应的拦截处理
request.interceptors.response.use(
  (response:any) => {
    const res = response.data
    if (res.code != 200) {
      ElMessage({
        showClose: true,
        message: res.message || '请求失败，请稍后重试！',
        type: 'error',
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  }
)

function get(url:string, params:object | undefined) {
  return request({
    url: url,
    method: 'get',
    params
  })
}
function post(url:string, data:object | undefined) {
  return request({
    url: url,
    method: 'post',
    data
  })
}

export default {
  get,
  post
}