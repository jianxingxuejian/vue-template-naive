import type { ProxyOptions } from 'vite'

/**
 * 设置代理
 * @param env env环境配置
 * @returns 代理配置
 */
export function createProxy(env: ImportMetaEnv) {
  if (!env.VITE_PROXY_PREFIX || !env.VITE_PROXY_URL) {
    return undefined
  }
  const proxy: Record<string, string | ProxyOptions> = {}
  proxy[env.VITE_PROXY_PREFIX] = {
    target: env.VITE_PROXY_URL,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${env.VITE_PROXY_PREFIX}`), '')
  }

  if (env.VITE_UPLOAD_PREFIX && env.VITE_UPLOAD_URL) {
    proxy[env.VITE_UPLOAD_PREFIX] = {
      target: env.VITE_UPLOAD_URL,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${env.VITE_PROXY_PREFIX}`), '')
    }
  }

  return proxy
}
