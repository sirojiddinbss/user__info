import { createApp } from 'vue'
import { createPinia } from 'pinia'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import { createI18n } from 'vue-i18n' 
import { messages } from '@/components/i18/message'

const i18n = createI18n({
  legacy: false,
  locale: "uz",
  fallbackLocale: 'en',
  messages
})



import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(VueCookies, { expires: '1d'})
app.use(i18n)
app.mount('#app')
