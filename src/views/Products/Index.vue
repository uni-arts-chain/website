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
                    <div class="left-img">
                        <img
                            src="@/assets/images/product2@2x.png"
                            :style="`transform: rotateZ(-${computeAngles(
                                true
                            )}deg) translateX(20%) translateY(7%)`"
                        />
                    </div>
                    <div
                        class="left-container"
                        :style="`border-left: ${itemWidth}px solid transparent;border-bottom: ${itemHeight}px solid #3dbdca;`"
                    ></div>
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
    import Image1250 from "@/assets/images/1250item4@2x.png"
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
                itemHeight: window.innerHeight - 120,
                itemWidth: window.innerWidth,
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
                this.currentRotateStyle = `transform: rotateZ(${this.computeAngles()}deg) translateX(-92%) translateY(300%)`
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
                this.itemHeight = window.innerHeight - 120
                this.itemWidth = window.innerWidth
            },
            computeAngles(flag) {
                // CosA=(c^2+b^2-a^2)/2bc
                let a = window.innerHeight - 120
                let b = window.innerWidth
                let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
                let cosVar
                if (flag) {
                    cosVar =
                        (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) /
                        (2 * b * c)
                } else {
                    cosVar =
                        (Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2)) /
                        (2 * a * c)
                }
                let result = Math.PI / Math.acos(cosVar)
                return 180 / result
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
                color: white;
                min-height: 560px;
                z-index: 1;
                max-width: 714px;
                padding-left: 50px;
                padding-right: 50px;
                background: url(~@/assets/images/product1.1@2x.png) no-repeat;
                background-size: 100% auto;
                background-position: -10% auto;
                h1 {
                    font-size: 44px;
                    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                    font-weight: 600;
                    text-align: left;
                    color: #ffffff;
                    letter-spacing: 5px;
                }
                p {
                    font-size: 25px;
                    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
                    font-weight: 600;
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
            width: 100%;
            overflow: hidden;
            .left-img {
                position: absolute;
                z-index: 1;
                right: 0%;
                top: 0;
                width: 60%;
                height: 100%;
                max-width: 1400px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                > img {
                    width: 100%;
                }
            }
            .left-container {
                position: absolute;
                width: 0;
                height: 0;
            }
            .bg {
                height: 100%;
                position: relative;
                .rotateBox {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    h1 {
                        border-right: 15px solid #ffca50;
                        font-size: 52px;
                        font-family: PingFang SC Regular,
                            PingFang SC Regular-Regular;
                        font-weight: 600;
                        text-align: left;
                        color: #101010;
                        line-height: 42px;
                        text-align: right;
                        padding-right: 20px;
                    }
                    p {
                        padding-top: 20px;
                        font-size: 17px;
                        max-width: 440px;
                        font-family: PingFang SC Regular,
                            PingFang SC Regular-Regular;
                        text-align: left;
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
            font-size: 52px;
            text-align: center;
            font-family: PingFang SC Semibold, PingFang SC Semibold-Semibold;
            font-weight: 600;
            color: #1e1d1e;
        }
    }
    @media screen and (min-width: 2600px) {
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
    }

    @media screen and (min-width: 1920px) {
        .item1 .container .intro {
            max-width: 800px;
            h1 {
                font-size: 52px;
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
        .item2 .item-box .left-img {
            max-width: 1400px;
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
        .item2 .item-box .left-img {
            max-width: 1000px;
        }
        .item3 {
            h2 {
                font-size: 50px;
            }
        }
    }
    @media screen and (max-width: 1920px) and (max-height: 1000px) {
        .item2 .item-box .left-img {
            max-width: 870px;
            top: 10%;
            right: 1%;
        }
        .item3 {
            background: url(~@/assets/images/2600item3@2x.png) center top /
                cover no-repeat !important;
        }
    }
</style>
