import type { PluginOption } from 'vite'
import compress from './compress'
import html from './html'
import vue from './vue'

/**
 * 安装vite插件
 */
export function setupVitePlugins(env: ImportMetaEnv): PluginOption[] {
  const plugins = [...vue, html(env)]
  if (env.VITE_COMPRESS === 'true') {
    plugins.push(compress)
  }
  return plugins
}
