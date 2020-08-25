<template>
    <div class="components">
        <div class="container">
            <h2>核心要素</h2>
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
                        <h4>桥接链</h4>
                        <p>云画链网络核心技术，跨链互操作解决方案</p>
                    </div>
                    <div class="item">
                        <div class="img-box">
                            <img
                                style="height: 44px;"
                                src="@/assets/images/polkadot@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>波卡生态</h4>
                        <p>波卡生态的平行链，专注于跨链代币交易方向的研究</p>
                    </div>
                    <div class="item">
                        <div class="img-box">
                            <img
                                style="height: 64px;"
                                src="@/assets/images/shield@2x.png"
                                alt=""
                            />
                        </div>
                        <h4>去中心化</h4>
                        <p>
                            安全高效的背书体系，为云画链网络跨链提供去中心化技术支持
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
                        <h4>去中心化代币兑换</h4>
                        <p>
                            应用云画链去中心化跨链交易协议，实现资产跨链快速兑换
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
                        <h4>非标资产拍卖市场</h4>
                        <p>
                            去中心化非标资产交易中心，支持跨链交易，支持拍卖等多种交易方式
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <CusCircle class="circle1"></CusCircle>
        <CusCircle class="circle2"></CusCircle>
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
        align-items: center;
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
        width: 216px;
        height: 216px;
        background-color: #50c3ff;
    }
    .circle2 {
        right: 147px;
        bottom: 40%;
        width: 45px;
        height: 45px;
        background-color: #ffca50;
    }
</style>
