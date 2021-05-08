# 新建组件库规则
### 创建一个包
 * 包名命名规则
   - `w-`开头的为 ui 组件
   - `u-` 开头的为 工具类方法### 创建一个包
 * 包名命名规则
   - `w-`开头的为 ui 组件
   - `u-` 开头的为 工具类方法

  ```
  // 创建一个新的组件
  lerna create packagename
  // 为某个组件库添加npm包 
  lerna add element-ui --scope=w-form
  ```
  > 注意：-D 会安装包在devDependencies，从npm仓库下载该组件时将不会安装该模块包，一般开发环境用于编译语法的工具包会使用-D 安装
  > [参考-npm官方文档](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#devdependencies)