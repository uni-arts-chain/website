<template>
    <div class="home">
        <Banner></Banner>
        <Components></Components>
        <Structure></Structure>
        <PhotoFrame />
        <!-- <Model></Model> -->
        <Ecology></Ecology>
        <Route></Route>
        <Team></Team>
        <Partner></Partner>
        <!-- <News></News> -->
    </div>
</template>

<script>
    import Banner from "./Banner.vue"
    import Components from "./Components.vue"
    import Structure from "./Structure.vue"
    import PhotoFrame from "./PhotoFrame.vue"
    // import Model from "./Model.vue"
    import Ecology from "./Ecology.vue"
    import Route from "./Route.vue"
    import Team from "./Team.vue"
    import Partner from "./Partner.vue"
    // import News from "./News.vue"
    export default {
        components: {
            Banner,
            Components,
            Structure,
            // Model,
            Ecology,
            Route,
            Team,
            Partner,
            PhotoFrame,
            // News,
        },
        created() {
            window.document.addEventListener("scroll", this.listener)
        },
        methods: {
            listener() {
                // this.$store.dispatch("UpdateScrollTop", document.documentElement.scrollTop);
                window.GLOBAL.vbus.$emit(
                    "windowScroll",
                    document.documentElement.scrollTop
                )
            },
        },
        destroyed() {
            window.document.removeEventListener("scroll", this.listener)
        },
    }
</script>

<style scoped lang="scss">
    .home {
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>
