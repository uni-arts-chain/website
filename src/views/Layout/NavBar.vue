<template>
    <nav :class="{ products: isProducts }">
        <div class="container">
            <img
                @click="goHome"
                class="left"
                v-if="isProducts"
                src="@/assets/images/logo-white@2x.png"
            />
            <img
                @click="goHome"
                class="left"
                v-else
                src="@/assets/images/logo@2x.png"
            />
            <div class="right" :class="{ en: $store.state.language == 'en' }">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/uni-arts-chain/UniArts-white-paper"
                            >{{ $t("navbar.white-page") }}</a
                        >
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://telemetry.polkadot.io/#list/Uni-Arts%20Staging%20network
"
                            >{{ $t("navbar.testnet") }}</a
                        >
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="http://explorer.uniarts.me/#/explorer"
                            >{{ $t("navbar.explorer") }}</a
                        >
                    </li>
                    <li :class="{ active: $route.path == '/products' }">
                        <router-link to="/products">{{
                            $t("navbar.products")
                        }}</router-link>
                    </li>
                    <li>
                        <router-link to="/faq">{{
                            $t("navbar.articles")
                        }}</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/news">{{
                            $t("navbar.news")
                        }}</router-link>
                    </li> -->
                    <li
                        class="other"
                        style="margin-left: 20; margin-right: 0px;"
                    >
                        <a
                            class="wallet"
                            target="_blank"
                            href="https://app.uniarts.me"
                        ></a>
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
            goHome() {
                this.$router.push("/")
            },
            changeLanguage() {
                let curLang = this.lang == "en" ? "zh" : "en"
                this.$store.dispatch("UpdateLanguage", curLang)
                this.$i18n.locale = curLang
                if (curLang == "zh") {
                    let meta_keywords = document.querySelector(
                        "meta[name=keywords]"
                    )
                    let meta_description = document.querySelector(
                        "meta[name=description]"
                    )
                    meta_keywords.setAttribute(
                        "content",
                        this.$t("meta.keywords")
                    )
                    meta_description.setAttribute(
                        "content",
                        this.$t("meta.description")
                    )
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    nav {
        height: 90px;
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
            color: white;
            /* background-color: #fff; */
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
        height: 45px;
        cursor: pointer;
    }
    .right.en {
        li {
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
            opacity: 1;
            font-size: 20px;
            font-family: Helvetica Neue Thin, Helvetica Neue Thin-Thin;
            font-weight: 200;
            text-align: center;
            color: #101010;
            letter-spacing: 1px;
            margin: 0 20px;
        }
        li a {
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
        }
        li.active {
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
            width: 25px;
            height: 25px;
            background-image: url(~@/assets/images/uniarts.png);
            background-size: 25px 25px;
            background-repeat: no-repeat;
        }
        .github {
            width: 25px;
            height: 25px;
            background-image: url(~@/assets/images/github3@2x.png);
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
