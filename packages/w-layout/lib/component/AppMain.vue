<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <router-view :key="key" />
    <!-- 存放子应用容器 -->
    <div id="subapp" />
    <!-- </transition> -->
  </el-scrollbar>
</template>

<script>
import { Scrollbar } from 'element-ui'
export default {
  name: "AppMain",
  components: {
    elScrollbar: Scrollbar
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang="scss">
.app-main {
  /*50 = navbar  */
  height: calc(100vh - 54px);
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 2px;
  background: #f7f7f7;
  ::v-deep .scrollbar-wrapper {
        overflow-x: hidden !important;
      }
}
</style>
