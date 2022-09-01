import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import route from './index'

/**
 * 路由守卫
 * @param router 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    window.$loadingBar?.start()
    if (!to.name || !route.hasRoute(to.name)) {
      next({ name: '404', replace: true })
    }
    next()
  })
  router.afterEach(to => {
    useTitle(to.meta.title as string)
    window.$loadingBar?.finish()
  })
}
