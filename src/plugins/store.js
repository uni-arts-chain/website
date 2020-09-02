import Vue from "vue"
import Vuex from "vuex"

import { getLocale } from "@/utils/tools"
import { setLocalStore } from "@/utils/storage"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        language: getLocale(),
        isProducts: false,
    },
    mutations: {
        UPDATE_LANGUAGE(state, language) {
            state.language = language
        },
        UPDATE_PRODUCTS(state, isProducts) {
            state.isProducts = isProducts
        },
    },
    actions: {
        UpdateLanguage: ({ commit }, language) => {
            setLocalStore("local_language", language)
            commit("UPDATE_LANGUAGE", language)
        },
        UpdateIsProducts: ({ commit }, isProducts) => {
            commit("UPDATE_PRODUCTS", isProducts)
        },
    },
})

export default store
