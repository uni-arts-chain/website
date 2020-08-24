<template>
    <footer>
        <div class="container">
            <div class="top">
                <div class="bottom-logo">
                    <img src="@/assets/images/bottom-logo@2x.png" alt="" />
                    <ul>
                        <li>
                            <img src="@/assets/images/wechat@2x.png" alt="" />
                        </li>
                        <li>
                            <img src="@/assets/images/telegram@2x.png" alt="" />
                        </li>
                        <li>
                            <img src="@/assets/images/email@2x.png" alt="" />
                        </li>
                        <li>
                            <img
                                src="@/assets/images/bottom-github@2x.png"
                                alt=""
                            />
                        </li>
                        <li>
                            <img src="@/assets/images/weibo@2x.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <span>摘要</span>
                    <ul>
                        <li>公告</li>
                        <li>浏览器</li>
                        <li>联系我们</li>
                    </ul>
                </div>
                <div class="col">
                    <span>技术</span>
                    <ul>
                        <li>测试网络</li>
                        <li>Telemetry</li>
                        <li>Genepaper</li>
                    </ul>
                </div>
                <div class="col">
                    <span>产品</span>
                    <ul>
                        <li>QTS</li>
                        <li>浏览器</li>
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
                cursor: pointer;
            }
            ul li > img {
                height: 100%;
            }
            > img {
                width: 138px;
            }
        }
    }
</style>
