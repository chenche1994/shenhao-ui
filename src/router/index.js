import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const routes = [{
  path: '/w-layout',
  name: 'wlayout',
  component: () => import('@/views/layout/index.vue'),
  redirect: '/s-form',
  children: [{
    path: '/s-form',
    name: 'sform',
    component: () => import('@/views/sform/index.vue'),
    meta: { title: 'SForm', icon: '' }
  }]
}]

export default new VueRouter({
  mode: 'history',
  routes
})