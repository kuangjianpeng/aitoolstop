import { h, nextTick, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { mountSite } from './site.js'
import './custom.css'

const Layout = {
  setup() {
    onMounted(() => nextTick(() => mountSite()))
    return () => h(DefaultTheme.Layout)
  }
}

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    if (typeof window === 'undefined') return

    app.mixin({
      mounted() {
        nextTick(() => mountSite())
      }
    })

    router.onAfterRouteChanged = () => nextTick(() => mountSite())
  }
}
