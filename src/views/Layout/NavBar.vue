<template>
    <nav :class="{ products: isProducts }">
        <div class="container">
            <img
                class="left"
                v-if="$store.state.isProducts && $store.state.language == 'en'"
                src="@/assets/images/bottom-logo2@2x.png"
                style="height: 55px; margin-top: -10px; margin-left: 5px;"
            />
            <img
                class="left"
                v-else-if="
                    $store.state.isProducts && $store.state.language == 'zh'
                "
                src="@/assets/images/bottom-logo@2x.png"
                style="height: 55px; margin-top: -10px; margin-left: 5px;"
            />
            <img
                class="left"
                v-else-if="$store.state.language == 'en'"
                src="@/assets/images/logo2@2x.png"
            />
            <img
                class="left"
                v-else-if="$store.state.language == 'zh'"
                src="@/assets/images/logo@2x.png"
                alt=""
            />
            <div class="right" :class="{ en: $store.state.language == 'en' }">
                <ul>
                    <li :class="{ active: $route.path == '/' }">
                        <router-link to="/">{{
                            $t("navbar.home")
                        }}</router-link>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/uni-arts-chain/UniArts-white-paper/blob/master/uniarts-white-paper.pdf"
                            >{{ $t("navbar.white-page") }}</a
                        >
                    </li>
                    <li>
                        <a>{{ $t("navbar.testnet") }}</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://polkadot.subscan.io">{{
                            $t("navbar.explorer")
                        }}</a>
                    </li>
                    <li :class="{ active: $route.path == '/products' }">
                        <router-link to="/products">{{
                            $t("navbar.products")
                        }}</router-link>
                    </li>
                    <li>
                        <router-link to="/news">{{
                            $t("navbar.articles")
                        }}</router-link>
                    </li>
                    <li
                        class="other"
                        style="margin-left: 20; margin-right: 0px;"
                    >
                        <a class="wallet"></a>
                        <a
                            class="github"
                            target="_blank"
                            href="https://github.com/uni-arts-chain"
                        ></a>
                        <div
                            @click="changeLanguage"
                            :class="{
                                'lang en': lang == 'en',
                                'lang zh-cn': lang == 'zh',
                            }"
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
            return {}
        },
        computed: {
            isProducts() {
                return this.$store.state.isProducts
            },
            lang() {
                return this.$store.state.language
            },
        },
        methods: {
            changeLanguage() {
                let curLang = this.lang == "en" ? "zh" : "en"
                this.$store.dispatch("UpdateLanguage", curLang)
                this.$i18n.locale = curLang
            },
        },
    }
</script>

<style scoped lang="scss">
    nav {
        height: 120px;
        flex: 0 0 auto;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    nav.products {
        background-color: #172026;
        .right li {
            color: white;
        }
        .right li.active {
            color: black;
            background-color: #fff;
        }
        .github {
            background-image: url(~@/assets/images/github2@2x.png);
            background-size: 25px;
            background-repeat: no-repeat;
        }
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
    .right.en {
        li {
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
        }
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
        li a {
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
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
