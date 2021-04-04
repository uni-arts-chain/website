<template>
    <div class="partner">
        <div class="container">
            <h2 ref="box">{{ $t("home.partner-title") }}</h2>
            <div class="partner-item" v-show="isShow">
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                >
                    <div class="logo-box">
                        <img
                            src="@/assets/images/polkadot-logo@2x.png"
                            alt=""
                        />
                    </div>
                    <span>Polkadot</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                >
                    <div class="logo-box">
                        <img
                            src="@/assets/images/darwinanet@2x.png"
                            alt=""
                            style="width: 90px; height: 90px;"
                        />
                    </div>
                    <span>Darwinia</span>
                </div>

                <div
                    class="item animate__animated animate__fadeInUp animate__delay-3s"
                >
                    <div class="logo-box">
                        <img
                            src="@/assets/images/linzone@2x.png"
                            style="height: 120px;"
                            alt=""
                        />
                    </div>
                    <span>LinZone</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-4s"
                >
                    <div class="logo-box">
                        <img src="@/assets/images/bihu-logo@2x.png" alt="" />
                    </div>
                    <span>Bihu</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-5s"
                >
                    <div class="logo-box">
                        <img src="@/assets/images/imtoken-logo@2x.png" alt="" />
                    </div>
                    <span>imToken</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "partner",
        data() {
            return {
                isShow: false,
                top: 0,
            }
        },
        mounted() {
            console.log(this.$refs.box.getBoundingClientRect().top)
            this.top =
                this.$refs.box.getBoundingClientRect().top - window.innerHeight
            window.GLOBAL.vbus.$on("windowScroll", this.onScroll)
        },
        methods: {
            onScroll(scrollTop) {
                if (scrollTop - this.top >= 100) {
                    this.isShow = true
                    window.GLOBAL.vbus.$off("windowScroll", this.onScroll)
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    .partner {
        padding-top: 100px;
        position: relative;
        padding-bottom: 20px;
        min-height: 393px;
    }
    h2 {
        font-size: 40px;
        font-family: Helvetica Neue Medium, Helvetica Neue Medium-Medium;
        font-weight: 500;
        text-align: center;
        margin-bottom: 83px;
        color: #101010;
    }
    .partner-item {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        justify-content: space-between;
        .item {
            .logo-box {
                height: 84px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
            }
            .logo-box > img {
                height: 100%;
            }
        }
        .item > span {
            font-size: 18px;
            font-weight: 400;
            text-align: left;
            color: #101010;
            letter-spacing: 0px;
        }
    }
</style>
