import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import axios, { AxiosResponse } from 'axios'
import { showErrorMsg } from '@/utils'

export default class CustomAxiosInstance {
  instance: AxiosInstance

  constructor(axiosConfig: AxiosRequestConfig) {
    this.instance = axios.create(axiosConfig)
    this.setInterceptor()
  }

  /** 设置拦截器 */
  setInterceptor() {
    // 拦截请求
    this.instance.interceptors.request.use(
      config => {
        return config
      },
      () => {
        showErrorMsg(400, '请求错误')
      }
    )
    // 拦截响应
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResult>) => {
        const { data } = response
        return data
      },
      () => {
        showErrorMsg(400, '网络错误')
      }
    )
  }
}
