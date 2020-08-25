<template>
    <div class="home">
        <Banner></Banner>
        <Components></Components>
        <Structure></Structure>
        <Model></Model>
        <Ecology></Ecology>
        <Route></Route>
    </div>
</template>

<script>
    import Banner from "./Banner.vue"
    import Components from "./Components.vue"
    import Structure from "./Structure.vue"
    import Model from "./Model.vue"
    import Ecology from "./Ecology.vue"
    import Route from "./Route.vue"
    export default {
        components: {
            Banner,
            Components,
            Structure,
            Model,
            Ecology,
            Route,
        },
    }
</script>

<style></style>
