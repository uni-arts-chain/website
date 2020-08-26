import Vue from "vue"
import Vuex from "vuex"

import { getLocale } from "@/utils/tools"
import { setLocalStore } from "@/utils/storage"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        language: getLocale(),
    },
    mutations: {
        UPDATE_LANGUAGE(state, language) {
            state.language = language
        },
    },
    actions: {
        UpdateLanguage: ({ commit }, language) => {
            setLocalStore("local_language", language)
            commit("UPDATE_LANGUAGE", language)
        },
    },
})

export default store
