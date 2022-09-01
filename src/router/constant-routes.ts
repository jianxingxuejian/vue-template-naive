const routes: Route.Config[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    meta: { title: 'root' }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/execption/403.vue'),
    meta: { title: '403' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/execption/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/execption/500.vue'),
    meta: { title: '500' }
  }
]

export default routes
