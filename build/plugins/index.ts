import type { PluginOption } from 'vite'
import compress from './compress'
import html from './html'
import https from './https'
import unocss from './unocss'
import unplugin from './unplugin'
import vue from './vue'

/**
 * 安装vite插件
 */
export function setupVitePlugins(env: ImportMetaEnv): PluginOption[] {
  const plugins = [html(env), https, unocss, ...unplugin, vue]
  if (env.VITE_COMPRESS === 'true') {
    plugins.push(compress)
  }
  return plugins
}
