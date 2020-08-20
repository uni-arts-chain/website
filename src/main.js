import "babel-polyfill" // 引入垫片
import Vue from "vue"
import VueI18n from "vue-i18n"

// import 'Directives'; // 全局注入指令（请使用局部注入）

// 引入样式reset
import "normalize.css"

// 引入插件
import router from "@/plugins/router"

// 引入国际化文件
import enLocale from "@/locale/en.json"
import zhLocale from "@/locale/zh-CN.json"

// 引入根组件
import App from "@/views/App"

import { getLocalStore } from "@/utils/storage"

// 可作为全局通信的载体,用于非父子关系的组件间的通信上，常见的业务一般都可以用vuex替代
window.GLOBAL.vbus = new Vue()

// 引入国际化
Vue.use(VueI18n)

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

let language =
    getLocalStore("local_language") ||
    (navigator.browserLanguage ? navigator.browserLanguage : navigator.language)

if (language === "en-US") {
    language = "en"
} else if (language === "zh-CN" || language === "zh-cn") {
    language = "zh"
} else if (language !== "en" && language !== "zh") {
    language = "en"
}
const i18n = new VueI18n({
    locale: language, // 设置默认使用语言
    messages: {
        en: Object.assign(enLocale, {}),
        zh: Object.assign(zhLocale, {}),
    },
})

new Vue({
    router,
    i18n: i18n,
    render: (h) => h(App),
}).$mount("#app")
