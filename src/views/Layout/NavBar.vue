<template>
    <nav>
        <div class="container">
            <img class="left" src="@/assets/images/logo@2x.png" alt="" />
            <div class="right">
                <ul>
                    <li class="active">首页</li>
                    <li>白皮书</li>
                    <li>测试网络</li>
                    <li>浏览器</li>
                    <li>公告</li>
                    <li class="other">
                        <a class="wallet"></a>
                        <a class="github"></a>
                        <div
                            :class="{ 'lang en': lang, 'lang zh-cn': !lang }"
                        ></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                lang: "",
            }
        },
    }
</script>

<style scoped lang="scss">
    nav {
        height: 90px;
        // background-color: #232344;
        flex: 0 0 auto;
    }

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img.left {
        height: 75px;
    }

    .right {
        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        li {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: #101010;
            letter-spacing: 1px;
            margin-left: 20px;
            margin-right: 20px;
            padding-left: 12px;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-right: 12px;
            cursor: pointer;
        }
        li.active {
            background: #51c2ff;
            border-radius: 16px;
            color: white;
        }
        li.other {
            padding-left: 0;
            padding-right: 0;
            display: flex;
            cursor: default;
            align-items: center;
            justify-content: space-between;
            > div,
            > a {
                margin: 0 15px;
                cursor: pointer;
            }
        }
        .wallet {
            width: 30px;
            height: 25px;
            background-image: url(~@/assets/images/wallet@2x.png);
            background-size: 30px 25px;
            background-repeat: no-repeat;
        }
        .github {
            width: 25px;
            height: 25px;
            background-image: url(~@/assets/images/github@2x.png);
            background-size: 25px;
            background-repeat: no-repeat;
        }
        .lang {
            width: 25px;
            height: 25px;
            background-size: 25px;
            background-repeat: no-repeat;
        }
        .lang.en {
            background-image: url(~@/assets/images/lang1@2x.png);
        }
        .lang.zh-cn {
            background-image: url(~@/assets/images/lang2@2x.png);
        }
    }
</style>
