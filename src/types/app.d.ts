/** 请求结果 */
interface ApiResult<T = any> {
  /** 状态码 */
  code: number
  /** 接口消息 */
  msg: string
  /** 接口数据 */
  data: T
}
