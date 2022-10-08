import axios from 'axios'
import store from '@/store/index'
import { Message } from 'element-ui'
import { getTimeStemp } from '@/utils/auth'
import router from '@/router'
const TimeOut = 99999999
const isTimeOut = () => {
  let currentTime = Date.now()
  let timeStamp = getTimeStemp()
  return (currentTime - timeStamp) / 1000 > TimeOut
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isTimeOut()) {
        store.dispatch('user/logout')
        router.push('/login')
        return Promise.reject(new Error('登录超时了'))
      }
      config.headers['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 相应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data

    // 当前请求成功，但是响应错误
    if (!res.success) {
      Message({
        message: res.message,
        type: 'error',
      })
      // reject 表示当前请求错误
      return Promise.reject(new Error(res.message))
    }

    return res.data
  },
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 10002
    ) {
      // 当等于10002的时候 表示 后端告诉我token超时了
      store.dispatch('user/logout') // 登出action 删除token
      router.push('/login')
    } else {
      Message.error(error.message) // 提示错误信息
    }
    return Promise.reject(error)
  }
)
export default service
