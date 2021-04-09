<template>
    <div class="partner">
        <div class="container">
            <h2 ref="box">{{ $t("home.partner-title") }}</h2>
            <div class="partner-item" v-show="isShow">
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                    style="margin-left: 23px;"
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
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                    style="margin-left: 72px;"
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
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                    style="margin-right: 50px;"
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
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                >
                    <div class="logo-box">
                        <img src="@/assets/images/bihu-logo@2x.png" alt="" />
                    </div>
                    <span>Bihu</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-1s"
                    style="margin-right: 0; margin-left: 30px;"
                >
                    <div class="logo-box">
                        <img
                            style="
                                width: 138px;
                                height: 138px;
                                position: relative;
                                top: 17px;
                            "
                            src="@/assets/images/BiTouCapital.png"
                            alt=""
                        />
                    </div>
                    <span>Bi Tou Capital</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                    style="margin-left: 0; margin-right: 32px;"
                >
                    <div class="logo-box" style="width: 116px; height: 84px;">
                        <img
                            style="
                                width: 364px;
                                height: 115px;
                                position: relative;
                                right: -101px;
                                top: 0px;
                            "
                            src="@/assets/images/LancerCapital.png"
                            alt=""
                        />
                    </div>
                    <span>Lancer Capital</span>
                </div>
                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                    style="margin-left: 85px; margin-right: 70px;"
                >
                    <div class="logo-box">
                        <img
                            style="
                                width: 83px;
                                height: 71px;
                                position: relative;
                            "
                            src="@/assets/images/TiCapital.png"
                            alt=""
                        />
                    </div>
                    <span>Ti Capital</span>
                </div>

                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                    style="margin-left: 85px; margin-right: 60px;"
                >
                    <div class="logo-box">
                        <img
                            style="
                                width: 170px;
                                height: 70px;
                                position: relative;
                            "
                            src="@/assets/images/sssnodes.png"
                            alt=""
                        />
                    </div>
                    <span>Sssnodes</span>
                </div>

                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                >
                    <div class="logo-box">
                        <img
                            style="
                                width: 107px;
                                height: 65px;
                                position: relative;
                            "
                            src="@/assets/images/Senmeo.png"
                            alt=""
                        />
                    </div>
                    <span>Senmeo</span>
                </div>

                <div
                    class="item animate__animated animate__fadeInUp animate__delay-2s"
                    style="margin-right: 0; margin-left: 45px;"
                >
                    <div class="logo-box">
                        <img
                            style="
                                width: 67px;
                                height: 77px;
                                position: relative;
                            "
                            src="@/assets/images/MingLing.png"
                            alt=""
                        />
                    </div>
                    <span>Ming Ling</span>
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
        justify-content: flex-start;
        flex-wrap: wrap;
        .item {
            margin: 0 65px;
            margin-bottom: 86px;
            .logo-box {
                height: 84px;
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
                overflow: hidden;
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
