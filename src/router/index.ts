import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import modules from './modules'
import constantRoutes from './constant-routes'
import { createRouterGuard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [...constantRoutes, ...modules] as RouteRecordRaw[]
})

/** 安装路由 */
export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}

export default router
