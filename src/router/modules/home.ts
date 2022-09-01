const routes: Route.Config = {
  path: '/home',
  name: 'home',
  redirect: '/home/index',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '首页',
    icon: 'icon-park-outline:home',
    sort: 1,
    isRoot: true
  },
  children: [
    {
      path: 'index',
      name: 'home_index',
      component: () => import('@/views/home/index.vue')
    }
  ]
}

export default routes
