import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/s-form'
}, {
  path: '/s-form',
  name: 'sform',
  component: () => import('@/views/sform/index.vue')
}]

export default new VueRouter({
  mode: 'history',
  routes
})