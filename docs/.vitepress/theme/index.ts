import DefaultTheme from 'vitepress/theme'
import '@yeweimao/theme-chalk/src/index.scss'
import ZIcon from '@yeweimao/components/icon'

console.log('DefaultTheme', ZIcon)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon) // 注册组件
  }
}
