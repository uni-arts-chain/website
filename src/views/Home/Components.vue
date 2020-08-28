<template>
    <div class="components">
        <div class="container">
            <h2>{{ $t("home.components-title") }}</h2>
            <div class="item-body">
                <div class="top">
                    <div class="item">
                        <div class="img-box">
                            <img
                                style="height: 61px;"
                                src="@/assets/images/core@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>{{ $t("home.components-item1") }}</h4>
                        <p>{{ $t("home.components-item1-desc") }}</p>
                    </div>
                    <div class="item">
                        <div class="img-box">
                            <img
                                style="height: 44px;"
                                src="@/assets/images/polkadot@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>{{ $t("home.components-item2") }}</h4>
                        <p>{{ $t("home.components-item2-desc") }}</p>
                    </div>
                    <div class="item">
                        <div class="img-box">
                            <img
                                style="height: 64px;"
                                src="@/assets/images/shield@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>{{ $t("home.components-item3") }}</h4>
                        <p>
                            {{ $t("home.components-item3-desc") }}
                        </p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="item">
                        <div class="img-box" style="min-height: 71px;">
                            <img
                                style="height: 71px;"
                                src="@/assets/images/pretext@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>{{ $t("home.components-item4") }}</h4>
                        <p>
                            {{ $t("home.components-item4-desc") }}
                        </p>
                    </div>
                    <div class="item">
                        <div class="img-box" style="min-height: 71px;">
                            <img
                                style="height: 70px;"
                                src="@/assets/images/market@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>{{ $t("home.components-item5") }}</h4>
                        <p>
                            {{ $t("home.components-item5-desc") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <CusCircle class="circle1" r="108" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle2" r="22.5" bg="#ffca50"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        name: "components",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .components {
        padding-top: 96px;
        position: relative;
    }
    h2 {
        text-align: left;
        font-size: 38px;
        font-weight: 300;
        text-align: left;
        color: #101010;
        letter-spacing: 0px;
        margin-bottom: 65px;
    }
    .top,
    .bottom {
        margin-bottom: 60px;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        .item {
            .img-box {
                min-height: 64px;
                margin-bottom: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            h4 {
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 19px;
            }
            p {
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
                max-width: 242px;
            }
        }
    }
    .bottom {
        .item p {
            max-width: initial;
        }
    }
    .circle {
        position: absolute;
    }
    .circle1 {
        left: -108px;
        bottom: -10px;
    }
    .circle2 {
        right: 147px;
        bottom: 40%;
    }
</style>
