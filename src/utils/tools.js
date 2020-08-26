import { getLocalStore } from "@/utils/storage"

export function getLocale() {
    let language =
        getLocalStore("local_language") ||
        (navigator.browserLanguage
            ? navigator.browserLanguage
            : navigator.language)

    if (language === "en-US") {
        language = "en"
    } else if (language === "zh-CN" || language === "zh-cn") {
        language = "zh"
    } else if (language !== "en" && language !== "zh") {
        language = "en"
    }
    return language
}
