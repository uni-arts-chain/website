<template>
    <div class="home">
        <Banner></Banner>
        <Components></Components>
        <Structure></Structure>
        <Model></Model>
        <Ecology></Ecology>
        <Route></Route>
        <Team></Team>
        <Partner></Partner>
    </div>
</template>

<script>
    import Banner from "./Banner.vue"
    import Components from "./Components.vue"
    import Structure from "./Structure.vue"
    import Model from "./Model.vue"
    import Ecology from "./Ecology.vue"
    import Route from "./Route.vue"
    import Team from "./Team.vue"
    import Partner from "./Partner.vue"
    export default {
        components: {
            Banner,
            Components,
            Structure,
            Model,
            Ecology,
            Route,
            Team,
            Partner,
        },
    }
</script>

<style></style>
