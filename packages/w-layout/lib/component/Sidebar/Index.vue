<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      class="el-menu-vertical"
      :collapse="!opened"
      :background-color="common.menuBg"
      :text-color="common.menuText"
      :active-text-color="common.menuActiveText"
      :collapse-transition="false"
      :default-active="activeMenu"
      mode="vertical"
    >
      <sidebar-item v-for="item in menu" :key="item.path" :route="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { Scrollbar, Menu } from 'element-ui'
import common from "../../styles/common.scss";
import SidebarItem from "./SidebarItem.vue";
export default {
  name: "Sidebar",
  components: {
    SidebarItem,
    elScrollbar: Scrollbar,
    elMenu: Menu
  },
  props: {
    opened: {
      type: Boolean
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
      isCollapse: false,
      common
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    logo() {
      const logoDefault = this.logoLarge || this.logoSmall
      return this.opened ? (this.logoLarge || logoDefault) : (this.logoSmall || logoDefault)
    }
  }
};
</script>

<style scoped  lang="scss">
@import '../../styles/common.scss';
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
h2{
  color: $menuText;
  margin: 0;
  padding: 10px;
  font-size: 18px;
}
.sidebar-logo{
  margin: 15px 18px;
}
</style>
<style lang="scss">
.el-scrollbar__view {
      height: 100%;
    }
</style>
