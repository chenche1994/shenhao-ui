import './styles/index.scss';
import 'element-ui/lib/theme-chalk/index.css';
import Component from './index.vue'
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
