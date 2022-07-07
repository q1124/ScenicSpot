import Vue from 'vue'
import Router from 'vue-router'
import settings from '../setting'
// import Home from '../views/Home.vue'

// container
const DefaultContainer = () => import('@/containers/DefaultContainer.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/' + settings.publicPath,
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard')
        },
        {
          path: 'scenic',
          name: 'scenic',
          component: () => import('@/views/scenic')
        }
      ]
    }
  ]
})
