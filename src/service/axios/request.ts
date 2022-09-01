import type { AxiosRequestConfig } from 'axios'
import CustomAxiosInstance from './instance'

export function createRequest(axiosConfig: AxiosRequestConfig) {
  const instance = new CustomAxiosInstance(axiosConfig).instance

  async function get<T = any>(url: string, config?: AxiosRequestConfig) {
    try {
      return (await instance.get(url, config)) as ApiResult<T>
    } catch {
      return null
    }
  }

  async function post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    try {
      return (await instance.post(url, data, config)) as ApiResult<T>
    } catch {
      return null
    }
  }

  return {
    get,
    post
  }
}
