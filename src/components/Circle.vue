<template>
    <div class="circle" :ref="name"></div>
</template>

<script>
    import anime from "animejs"
    export default {
        name: "background",
        data() {
            return {
                name: "bgCircle" + this._uid,
                radius: anime.random(10, 100),
                // backgroundColor:
                //     anime.random(0, 1) > 0.5
                //         ? "rgb(251, 202, 80)"
                //         : "rgb(80, 195, 255)",
            }
        },
        created() {},
        mounted() {
            this.animationStart()
        },
        methods: {
            animationStart() {
                let value = 20 * (anime.random(0, 1) > 0.5 ? 1 : -1)
                let duration = anime.random(10, 20) * 1000
                let direction = anime.random(0, 1) > 0.5
                anime({
                    targets: this.$refs[this.name],
                    translateX: [
                        {
                            value: `${direction ? "+" : "-"}=${value}`,
                            easing: "easeInQuad",
                        },
                        {
                            value: `${direction ? "+" : "-"}=${value}`,
                            easing: "easeOutQuad",
                        },
                        {
                            value: `${direction ? "-" : "+"}=${value}`,
                            easing: "easeInQuad",
                        },
                        {
                            value: `${direction ? "-" : "+"}=${value}`,
                            easing: "easeOutQuad",
                        },
                    ],
                    translateY: [
                        { value: `+=${value}`, easing: "easeOutQuad" },
                        { value: `-=${value}`, easing: "easeInQuad" },
                        { value: `-=${value}`, easing: "easeOutQuad" },
                        { value: `+=${value}`, easing: "easeInQuad" },
                    ],
                    duration: duration,
                    loop: true,
                })
            },
        },
    }
</script>

<style scoped lang="scss">
    .circle {
        border-radius: 50%;
        position: absolute;
        z-index: -1;
    }

    @keyframes Circle {
    }

    @media screen and (max-width: 768px) {
    }
</style>
