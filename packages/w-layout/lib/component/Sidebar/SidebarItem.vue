<template>
  <div v-if="!route.hidden">
    <template v-if="!route.children">
      <router-link v-if="route.meta" :to="route.path">
        <el-menu-item :index="route.path">
          <Item :icon="route.meta.icon" :title="route.meta.title" />
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="route.path">
      <template slot="title">
        <Item v-if="route.meta" :icon="route.meta.icon" :title="route.meta.title" />
      </template>
      <SiderbarItem v-for="item in route.children" :key="item.path" :route="item" />
    </el-submenu>
  </div>
</template>
<script>
import { MenuItem, Submenu } from 'element-ui'
import Item from './Item'
export default {
  name: "SiderbarItem",
  components: {
    Item,
    elMenuItem: MenuItem,
    elSubmenu: Submenu
  },
  props: {
    route: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
  }
};
</script>
