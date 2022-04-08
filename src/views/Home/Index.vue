<template>
    <div class="home">
        <Banner></Banner>
        <Components></Components>
        <Structure></Structure>
        <Route></Route>
        <Team></Team>
    </div>
</template>

<script>
    import Banner from "./Banner.vue"
    import Components from "./Components.vue"
    import Structure from "./Structure.vue"
    // import Model from "./Model.vue"
    import Route from "./Route.vue"
    import Team from "./Team.vue"
    export default {
        components: {
            Banner,
            Components,
            Structure,
            Route,
            Team,
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
    }
</style>
