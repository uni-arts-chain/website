<template>
    <div id="app">
        <HelloWorld />
        <particles-bg
            type="cobweb"
            color="#ffffff"
            :config="config"
            :bg="true"
        />
    </div>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld"
    import { ParticlesBg } from "particles-bg-vue"

    export default {
        name: "App",
        components: {
            HelloWorld,
            ParticlesBg,
        },
        data: function () {
            return {
                config: {
                    num: [10, 5],
                    rps: 2,
                    radius: [0.3, 1],
                    life: [0.1, 0.4],
                    v: [1, 2],
                    tha: [-10, 10],
                    alpha: [0.2, 0],
                    scale: [0.1, 0.2],
                    position: "all",
                    cross: "dead",
                    random: 2,
                },
            }
        },
    }
</script>

<style lang="scss">
    @import "@/assets/styles/index.scss";

    body {
        background: linear-gradient(45deg, #3eacf9 0%, #8ce0fe 100%);
    }
    #app {
        font-family: "Work Sans", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        position: relative;
        // display:flex;
        // flex-direction: column;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
