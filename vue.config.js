const path = require('path')
const fs = require('fs')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const getPackagesAll = () => {
  const packages = fs.readdirSync(resolve('packages'))
  const ignoreFiles = [
    '.vuepress', 'README.md', 'package.json', 'package-lock.json'
  ]
  return packages.filter(p => !ignoreFiles.includes(p))
}

const packages = getPackagesAll()

module.exports = {
  chainWebpack: config => {
    const alias = config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('baseConfig'))
      .set('public', resolve('public'))

    packages.forEach(p => {
      return alias.set(
        `packages/${p}`,
        resolve(`packages/${p}/lib/index.js`)
      )
    })
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}