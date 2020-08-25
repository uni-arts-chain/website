<template>
    <div class="home">
        <Banner></Banner>
        <Components></Components>
        <Structure></Structure>
    </div>
</template>

<script>
    import Banner from "./Banner.vue"
    import Components from "./Components.vue"
    import Structure from "./Structure.vue"
    export default {
        components: {
            Banner,
            Components,
            Structure,
        },
    }
</script>

<style></style>
