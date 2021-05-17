<template>
  <div class="app-wrapper" :class="[{'hideSidebar': !opened, 'openSidebar': opened}, `app-menu-${mode}`]">
    <sidebar class="sidebar-container" :opened="opened" :menu="menu" :logo-large="logoLarge" :logo-small="logoSmall" />
    <div class="nav-container">
      <navbar :opened="opened" :user="user" :avatar="avatar" @toggleSideBar="toggleSideBar" @logout="logout" />
    </div>
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from "./component/Sidebar/Index.vue";
import Navbar from "./component/Navbar";
import AppMain from "./component/AppMain.vue";
export default {
  name: "IndexVue",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  props: {
    mode: {
      type: String,
      default: 'vertical' // 垂直模式：vertical，水平模式：horizontal
    },
    user: {
      type: [Object, String],
      default: () => ({})
    },
    menu: {
      type: Array,
      default: () => []
    },
    logoLarge: {
      type: String,
      default: ''
    },
    logoSmall: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: require('./assets/images/user.png')
    }
  },
  data() {
    return {
      opened: true
    }
  },
  methods: {
    toggleSideBar() {
      this.opened = !this.opened
    },
    logout() {
      this.$emit('logout')
    }
  }
};
</script>
<style>
</style>
<style scoped lang="scss">
.app-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
