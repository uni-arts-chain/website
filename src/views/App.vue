<template>
    <div id="app" ref="app">
        <NavBar></NavBar>
        <main>
            <router-view></router-view>
        </main>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
    import NavBar from "@/views/Layout/NavBar"
    import FooterBar from "@/views/Layout/FooterBar"
    export default {
        name: "App",
        components: {
            NavBar,
            FooterBar,
        },
        data() {
            return {}
        },
        mounted() {
            if (this.$store.state.language == "zh") {
                let meta_keywords = document.querySelector(
                    "meta[name=keywords]"
                )
                let meta_description = document.querySelector(
                    "meta[name=description]"
                )
                meta_keywords.setAttribute("content", this.$t("meta.keywords"))
                meta_description.setAttribute(
                    "content",
                    this.$t("meta.description")
                )
            }
        },
    }
</script>

<style lang="scss">
    @import "@/assets/styles/index.scss";

    #app {
        font-family: "Work Sans", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
