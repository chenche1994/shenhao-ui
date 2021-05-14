<template>
  <div class="app-wrapper" :class="{'hideSidebar': !opened, 'openSidebar': opened}">
    <navbar :opened="opened" :user="user" @toggleSideBar="toggleSideBar" @logout="logout" />
    <div class="main-container">
      <sidebar class="sidebar-container" :opened="opened" :menu="menu" :logo-large="logoLarge" :logo-small="logoSmall" />
      <app-main />
    </div>
  </div>
</template>

<script>
import Sidebar from "./component/Sidebar/Index.vue";
import Navbar from "./component/Navbar";
import AppMain from "./component/AppMain.vue";

import './styles/index.scss';
export default {
  name: "IndexVue",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  props: {
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
@import './styles/common.scss';
@import './styles/mixin.scss';
.app-wrapper{
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
