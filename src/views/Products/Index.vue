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
                <div style="width: 100%; height: 100%;">
                    <div class="container">
                        <div class="left-container">
                            <img
                                class="left"
                                src="@/assets/images/pic1@2x.png"
                                alt=""
                            />
                        </div>
                        <div class="right-container">
                            <div class="intro">
                                <div
                                    class="line"
                                    style="
                                        width: 88px;
                                        height: 8px;
                                        background: #ff007b;
                                    "
                                ></div>
                                <h1>
                                    {{ $t("product.title") }}
                                </h1>
                                <p>
                                    {{ $t("product.desc") }}
                                </p>
                                <div class="desc">
                                    {{ $t("product.intro1") }}<br />
                                    {{ $t("product.intro2") }}<br />
                                    {{ $t("product.intro3") }}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="item2" ref="item2">
                <div class="item-box">
                    <img src="@/assets/images/product2@2x.png" />
                    <div class="bg">
                        <div class="rotateBox" :style="currentRotateStyle">
                            <h1>{{ $t("product.appTitle") }}</h1>
                            <p>{{ $t("product.appDesc") }}</p>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item
                class="item3"
                :style="`background: url(${item3Image}) no-repeat;background-size: ${item3Cover};background-position: ${item3Position}`"
            >
                <h2>{{ $t("product.dappTitle") }}</h2>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import throttle from "lodash/throttle"
    import Image1250 from "@/assets/images/1250item3@2x.png"
    import Image1920 from "@/assets/images/1920item3@2x.png"
    import Image2600 from "@/assets/images/2600item3@2x.png"
    export default {
        name: "index",
        data() {
            return {
                next: {},
                prev: {},
                currentIndex: 0,
                tangle: 0,
                currentRotateStyle: "",
                item3Image:
                    window.innerWidth > 1920
                        ? Image2600
                        : window.innerWidth < 1250
                        ? Image1920
                        : Image1250,
                item3Cover: "cover",
                item3Position: "center",
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

            this.setItem2LabelPosition()
            this.setItem3Image()
        },
        mounted() {
            this.setListerner()
            window.addEventListener("resize", this.resizeListener)
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
            setItem3Image() {
                let height = window.innerHeight
                let width = window.innerWidth
                if (height > 900 && width > 1920) {
                    this.item3Cover = "cover"
                } else if (height > 900 && width < 1920) {
                    this.item3Cover = "cover"
                } else if (height < 900 && width > 1920) {
                    this.item3Cover = "100% auto"
                } else {
                    this.item3Cover = "top"
                }

                if (width > 1250 && width <= 1920) {
                    if (height > 900) {
                        this.item3Image = Image1920
                        this.item3Position = "top"
                    } else if (height <= 900) {
                        this.item3Image = Image1920
                        this.item3Position = "top"
                    }
                } else if (width > 1920) {
                    this.item3Image = Image2600
                } else {
                    this.item3Image = Image1920
                }
            },
            setItem2LabelPosition() {
                let height = window.innerHeight
                if (height > 1200) {
                    this.currentRotateStyle = `top:${
                        40 - ((height - 1200) / 50) * 2
                    }%;`
                }
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
            resizeListener() {
                this.setItem2LabelPosition()
                this.setItem3Image()
            },
        },
        destroyed() {
            this.$store.dispatch("UpdateIsProducts", false)
            window.removeEventListener("resize", this.resizeListener)
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
        // position: relative;
        .container {
            position: relative;
            height: 100%;
            .left-container {
                position: absolute;
                left: -8%;
                height: 100%;
                width: 55%;
                display: flex;
                align-items: center;
            }
            .right-container {
                position: absolute;
                right: -5%;
                height: 100%;
                display: flex;
                align-items: center;
            }
            img.left {
                width: 160%;
                max-width: 1200px;
            }
            .intro {
                // top: 104px;

                color: white;
                min-height: 560px;
                // width: 780px;
                // position: relative;
                z-index: 1;
                max-width: 714px;
                padding-left: 50px;
                padding-right: 50px;
                // right: 9%;
                background: url(~@/assets/images/product1.1@2x.png) no-repeat;
                background-size: 100% auto;
                background-position: -10% auto;
                h1 {
                    font-size: 44px;
                    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #ffffff;
                    letter-spacing: 5px;
                }
                p {
                    font-size: 25px;
                    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                    font-weight: 500;
                    text-align: left;
                    color: #ffffff;
                    letter-spacing: 0px;
                }

                .desc {
                    font-size: 23px;
                    font-family: PingFang SC Regular,
                        PingFang SC Regular-Regular;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    line-height: 36px;
                    letter-spacing: 1px;
                }
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
                top: -15%;
                z-index: 1;
                right: -1%;
            }
            .bg {
                background: url(~@/assets/images/tangle@2x.png) no-repeat 100%;
                background-size: auto 100%;
                height: 100%;
                position: relative;
                .rotateBox {
                    position: absolute;
                    // top: 36%;
                    // left: 36%;
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
                        max-width: 400px;
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
        h2 {
            padding-top: 60px;
            font-size: 68px;
            text-align: center;
            font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
            font-weight: 600;
            color: #1e1d1e;
        }
    }

    @media screen and (min-width: 3000px) {
    }

    @media screen and (min-width: 2600px) {
        .item2 .item-box img {
            max-width: 40%;
            top: -5%;
        }

        .item2 .item-box .bg .rotateBox {
            top: 40%;
            left: 50%;
        }
        .item1 .container .intro {
            width: 850px;
            max-width: 850px;
            min-height: 680px;
            h1 {
                font-size: 40px;
                padding-top: 45px;
                line-height: 40px;
            }
            p {
                font-size: 35px;
                padding-top: 40px;
                line-height: 35px;
            }
            .desc {
                font-size: 30px;
                padding-top: 45px;
                line-height: 45px;
            }
        }
    }

    @media screen and (min-width: 2100px) {
        .item1 .container .left-container {
            left: -300px;
        }
        .item2 .item-box img {
            max-width: 48%;
            top: -5%;
        }

        .item2 .item-box .bg .rotateBox {
            top: 40%;
            left: 48%;
        }
    }

    @media screen and (min-width: 1920px) {
        .item2 .item-box img {
            max-width: 48%;
            top: -5%;
        }

        .item1 .container .intro {
            max-width: 800px;
            h1 {
                font-size: 37px;
                padding-top: 50px;
                line-height: 37px;
            }
            p {
                font-size: 30px;
                padding-top: 40px;
                line-height: 30px;
            }
            .desc {
                font-size: 26px;
                padding-top: 45px;
                line-height: 50px;
            }
        }

        .item2 .item-box .bg .rotateBox {
            top: 40%;
            left: 49%;
        }

        .item1 .container .left-container {
            left: -300px;
        }
        .item1 .container .left-container img.left {
            width: 1400px;
            max-width: 1400px;
        }
        .item1 .container .right-container {
            right: -200px;
        }
    }

    @media screen and (max-width: 1920px) {
        .item1 .container .intro {
            h1 {
                font-size: 29px;
                padding-top: 30px;
                line-height: 29px;
            }
            p {
                font-size: 25px;
                padding-top: 30px;
                line-height: 25px;
            }
            .desc {
                font-size: 20px;
                padding-top: 25px;
                line-height: 36px;
            }
        }
        .item1 .container .left-container {
            left: -12%;
        }
        .item2 .item-box img {
            max-width: 60%;
            top: -10%;
            right: -5%;
        }

        .item2 .item-box .bg .rotateBox {
            top: 40%;
            left: 40%;
        }
        .item3 {
            h2 {
                font-size: 50px;
                // padding-top: 20px;
            }
        }
    }
</style>
