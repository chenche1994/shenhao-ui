<template>
  <div class="navbar">
    <div style="display:flex; align-items:center">
      <hamburger :is-active="opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <div class="right-menu">
      <!-- 自定义内容 -->
      <slot />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar :src="avatar" size="small" style="margin-right:10px" />
          <span>{{ user.userName }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">注销登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import { Dropdown, DropdownMenu, DropdownItem, Avatar } from 'element-ui'
import Breadcrumb from "./breadcrumb.vue";
import Hamburger from "./hamburger.vue";
export default {
  name: "Navabr",
  components: {
    Breadcrumb,
    Hamburger,
    elDropdown: Dropdown,
    elDropdownMenu: DropdownMenu,
    elDropdownItem: DropdownItem,
    elAvatar: Avatar
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    },
    user: {
      type: [Object, String],
      default: () => ({})
    }
  },
  data() {
    return {
      avatar: ''// require('@/assets/images/user.png')
    }
  },
  methods: {
    toggleSideBar() {
      this.$emit("toggleSideBar");
    },
    async logout() {
      this.$emit('logout')
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';
.navbar{
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  height:52px;
  color: #fff;
  background: $navBg
}
.right-menu{
  display: flex;
  align-items: center;
}
.avatar-wrapper{
  display: flex;
  align-items: center;
  color: #fff;
}
.curSelect, .msg-container, .avatar-container{
  cursor: pointer;
}
.icon-xiala{
  margin-right: 5px;
  color: $activeColor;
}
.icon-wuxiaoxi{
  color: $activeColor;
}
.msgBox{
  padding: 0;
  width: 280px;
  max-height: 200px;
  .msg-item{
    display: flex;
    align-items: center;
  }
  .title{
    background: $menuBgHover;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    padding: 0 10px;
    font-size: 14px;
  }
  .title-nomsg{
      background: #fff;
      color: $subMenuActiveText;
      text-align: center;
      font-size: 16px;
      line-height: 36px;
    }
  li{
    padding: 4px 0px;
    .msg-content{
      flex: 1;
      font-size: 12px;
      color: $text-grey;
      line-height: 24px;
      padding: 0 10px;
      border-bottom: 1px solid #e8e8e9;
      cursor: pointer;
      & > div:first-child{
        display: flex;
        justify-content: space-between;
        div{
          font-size: 14px;
          color: $text-primary;
        }
      }
      .dot{
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: #f00;
        margin-right: 4px;
      }
    }
  }
}
</style>
<style>
.msg-container{
  padding: 0;
}
.el-tooltip__popper.is-light{
  border-color: #fff !important;
  padding: 0;
}
</style>
