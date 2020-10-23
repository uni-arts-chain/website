<template>
    <footer>
        <div class="container">
            <div class="top">
                <div class="bottom-logo">
                    <img
                        v-if="$store.state.language == 'en'"
                        src="@/assets/images/bottom-logo2@2x.png"
                        :class="{ en: $store.state.language == 'en' }"
                        alt=""
                    />
                    <img
                        v-else
                        src="@/assets/images/bottom-logo@2x.png"
                        alt=""
                    />
                    <ul>
                        <li>
                            <a></a>
                        </li>
                        <li>
                            <a href="https://t.me/uniarts" target="_blank"></a>
                        </li>
                        <li>
                            <a href="mailto:support@vigchain.com"></a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://polkadot.subscan.io"
                            ></a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://discord.gg/ujZeGvX"
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <span>{{ $t("footer.summary") }}</span>
                    <ul>
                        <li>
                            <a href="/faq">{{ $t("navbar.articles") }}</a>
                        </li>
                        <li>{{ $t("footer.contact-us") }}</li>
                    </ul>
                </div>
                <div class="col">
                    <span>{{ $t("footer.technology") }}</span>
                    <ul>
                        <li>{{ $t("navbar.testnet") }}</li>
                        <li>{{ $t("footer.telemetry") }}</li>
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/uni-arts-chain/UniArts-white-paper"
                                >{{ $t("navbar.white-page") }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <span>{{ $t("footer.product") }}</span>
                    <ul>
                        <li>{{ $t("footer.uni-arts-chain") }}</li>
                        <li>
                            <a
                                target="_blank"
                                href="https://polkadot.subscan.io"
                                >{{ $t("navbar.explorer") }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                ©2019-2020 uniarts.me
            </div>
        </div>
    </footer>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    footer {
        min-height: 46px;
        background: #00345c;
        flex: 0 0 auto;
    }
    .bottom {
        height: 46px;
        background: #072642;
        .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            line-height: 30px;
        }
    }
    .top {
        overflow: hidden;
        padding-top: 33px;
        padding-bottom: 40px;
        .col,
        .bottom-logo {
            display: flex;
            flex-direction: column;
            float: left;
        }
        .col {
            width: 23%;
        }
        .col > span {
            font-size: 18px;
            font-weight: 600;
            text-align: left;
            color: #ffffff;
            line-height: 30px;
            margin-bottom: 30px;
        }
        .col ul li {
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            margin-bottom: 12px;
            // line-height: 30px;
        }
        .col ul li a {
            color: inherit;
            text-decoration: none;
        }

        .bottom-logo > img.en {
            width: 180px;
            height: 32px;
        }
        .bottom-logo {
            width: 31%;
            ul {
                margin-top: 36px;
            }
            ul li {
                float: left;
                width: 24px;
                height: 24px;
                margin-right: 18px;
            }
            ul li a {
                display: block;
                width: 100%;
                height: 100%;
                color: inherit;
                text-decoration: none;
            }
            ul li > img {
                height: 100%;
            }
            ul li:nth-child(1) {
                background: url(~@/assets/images/wechat@2x.png) no-repeat;
                background-size: 24px 24px;
            }
            ul li:nth-child(2) {
                background: url(~@/assets/images/telegram@2x.png) no-repeat;
                background-size: 24px 24px;
            }
            ul li:nth-child(3) {
                background: url(~@/assets/images/email@2x.png) no-repeat;
                background-size: 24px 24px;
            }
            ul li:nth-child(4) {
                background: url(~@/assets/images/bottom-github@2x.png) no-repeat;
                background-size: 24px 24px;
            }
            ul li:nth-child(5) {
                background: url(~@/assets/images/discord@2x.png) no-repeat;
                background-position: -5px -4px;
                background-size: 34px 34px;
                border-radius: 4px;
            }
            // ul li:nth-child(5) {
            //     background: url(~@/assets/images/weibo@2x.png) no-repeat;
            //     background-size: 24px 24px;
            // }
            > img {
                width: 138px;
            }
        }
    }
</style>
