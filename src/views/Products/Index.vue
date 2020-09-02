/** * Created by Lay Hunt on 2020-09-02 11:43:30. */
<template>
    <div class="index" ref="indexBody">
        <el-carousel
            ref="carousel"
            height="100%"
            direction="vertical"
            :autoplay="false"
            :loop="false"
            :initial-index="currentIndex"
        >
            <el-carousel-item class="item1">
                <img class="left" src="@/assets/images/pic1@2x.png" alt="" />
                <img
                    class="right"
                    src="@/assets/images/product1.1@2x.png"
                    alt=""
                />
                <div class="intro">
                    <div
                        class="line"
                        style="width: 88px; height: 8px; background: #ff007b;"
                    ></div>
                    <h1 style="padding-top: 51px;">
                        {{ $t("product.title") }}
                    </h1>
                    <p style="padding-top: 47px;">{{ $t("product.desc") }}</p>
                    <div style="padding-top: 49px;" class="desc">
                        {{ $t("product.intro1") }}<br />
                        {{ $t("product.intro2") }}<br />
                        {{ $t("product.intro3") }}<br />
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="item2" ref="item2">
                <div class="item-box">
                    <img src="@/assets/images/product2@2x.png" />
                    <div class="bg">
                        <div class="rotateBox">
                            <h1>{{ $t("product.appTitle") }}</h1>
                            <p>{{ $t("product.appDesc") }}</p>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="item3">
                <h2>{{ $t("product.dappTitle") }}</h2>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import throttle from "lodash/throttle"
    export default {
        name: "index",
        data() {
            return {
                next: {},
                prev: {},
                currentIndex: 0,
                tangle: 0,
            }
        },
        created() {
            this.$store.dispatch("UpdateIsProducts", true)

            this.next = throttle(
                () => {
                    this.$refs.carousel.next()
                    setTimeout(
                        () =>
                            this.currentIndex < 2 ? this.currentIndex++ : "",
                        1000
                    )
                },
                1000,
                { leading: true, trailing: false }
            )
            this.prev = throttle(
                () => {
                    this.$refs.carousel.prev()
                    setTimeout(
                        () =>
                            this.currentIndex > 0 ? this.currentIndex-- : "",
                        1000
                    )
                },
                1000,
                { leading: true, trailing: false }
            )
        },
        mounted() {
            this.setListerner()
            let width = this.$refs.item2.offsetWidth
            let height = this.$refs.item2.offsetHeight
            this.tangle = width / height
        },
        methods: {
            setListerner() {
                this.$refs.indexBody.addEventListener("mousewheel", (e) => {
                    let delta = e.wheelDelta | e.detail
                    if (delta < 0) {
                        if (this.currentIndex < 2) {
                            this.disableWheel(e)
                            if (delta < -20) {
                                this.next()
                            }
                        }
                    }
                    if (delta > 0) {
                        if (document.querySelector("html").scrollTop != 0) {
                            console.log("go")
                        } else if (this.currentIndex > 0) {
                            this.disableWheel(e)
                            if (delta > 20) {
                                this.prev()
                            }
                        }
                    }
                })
            },
            disableWheel(e) {
                if (e.preventDefault) {
                    // Firefox
                    e.preventDefault()
                } else {
                    // IE
                    e.cancelBubble = true
                    e.returnValue = false
                }
                return false
            },
        },
        destroyed() {
            this.$store.dispatch("UpdateIsProducts", false)
        },
    }
</script>
<style lang="scss" scoped>
    .index {
        width: 100%;
        height: calc(100vh - 120px);
    }
    .el-carousel {
        width: 100%;
        height: 100%;
    }

    .item1 {
        background-color: #172026;
        position: relative;
        img.left {
            width: 1300px;
            position: absolute;
            left: 9%;
            top: 220px;
        }
        img.right {
            position: absolute;
            width: 870px;
            top: 330px;
            right: 5%;
        }
        .intro {
            position: absolute;
            right: 0;
            top: 304px;
            color: white;
            width: 680px;
            max-width: 714px;
            right: 9%;
            h1 {
                font-size: 48px;
                font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                font-weight: 500;
                text-align: left;
                color: #ffffff;
                letter-spacing: 5px;
            }
            p {
                font-size: 27px;
                font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                font-weight: 500;
                text-align: left;
                color: #ffffff;
                letter-spacing: 0px;
            }

            .desc {
                font-size: 26px;
                font-family: PingFang SC Regular, PingFang SC Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 36px;
                letter-spacing: 1px;
            }
        }
    }
    .item2 {
        .item-box {
            position: relative;
            height: 100%;
            overflow: hidden;
            img {
                position: absolute;
                width: 60%;
                top: -5%;
                z-index: 1;
                right: 0;
            }
            .bg {
                background: url(~@/assets/images/tangle@2x.png) no-repeat 100%;
                background-size: auto 100%;
                height: 100%;
                position: relative;
                .rotateBox {
                    position: absolute;
                    top: 36%;
                    left: 36%;
                    transform: translateX(-300px) translateY(0px) rotateZ(56deg);
                    h1 {
                        border-right: 15px solid #ffca50;
                        font-size: 42px;
                        font-family: PingFang SC Regular,
                            PingFang SC Regular-Regular;
                        font-weight: 400;
                        text-align: left;
                        color: #101010;
                        line-height: 42px;
                        text-align: right;
                        padding-right: 20px;
                    }
                    p {
                        padding-top: 20px;
                        font-size: 17px;
                        max-width: 310px;
                        font-family: PingFang SC Regular,
                            PingFang SC Regular-Regular;
                        text-align: right;
                        color: #101010;
                        line-height: 25px;
                        float: right;
                    }
                }
            }
        }
    }
    .item3 {
        background: url(~@/assets/images/product3@2x.png) no-repeat;
        background-size: cover;
        background-position: center;

        h2 {
            padding-top: 60px;
            font-size: 68px;
            text-align: center;
            font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
            font-weight: 600;
            color: #1e1d1e;
        }
    }
</style>
