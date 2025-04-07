import { createI18n } from 'vue-i18n'
import en from '@/i18n/en.json'
import zhTW from '@/i18n/zh-TW.json'
const messages = {
  en,
  'zh-TW': zhTW
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: localStorage.getItem('Ecommerce_locale') || 'en', // 預設中文
  fallbackLocale: 'en', // 找不到翻譯時預設顯示中文
  messages
})

export default i18n
