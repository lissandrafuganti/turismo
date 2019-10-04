
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'RouteDashboard', meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/reservas',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Reservas.vue'), name: 'RouteReservas', meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/recuperar-senha',
    name: 'PRecuperarSenha',
    component: () => import('pages/RecuperarSenha.vue')
  },
  {
    path: '/login',
    name: 'PLogin',
    component: () => import('pages/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
