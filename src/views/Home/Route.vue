<template>
    <div class="route">
        <div class="container">
            <h2>{{ $t("home.route-title") }}</h2>
            <div class="route-item">
                <div class="item flag1">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />{{
                            $t("home.route-item1-title")
                        }}
                    </h3>
                    <h4>{{ $t("home.route-item1-date") }}</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem1@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>{{ $t("home.route-item1-li1") }}</li>
                        <li>{{ $t("home.route-item1-li2") }}</li>
                        <li>{{ $t("home.route-item1-li3") }}</li>
                        <li>{{ $t("home.route-item1-li4") }}</li>
                    </ul>
                </div>
                <div class="item flag2">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />{{
                            $t("home.route-item2-title")
                        }}
                    </h3>
                    <h4>{{ $t("home.route-item2-date") }}</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem2@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>{{ $t("home.route-item2-li1") }}</li>
                        <li>{{ $t("home.route-item2-li2") }}</li>
                        <li>{{ $t("home.route-item2-li3") }}</li>
                        <li>{{ $t("home.route-item2-li4") }}</li>
                        <li>{{ $t("home.route-item2-li5") }}</li>
                        <li>{{ $t("home.route-item2-li6") }}</li>
                    </ul>
                </div>
                <div class="item flag3">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />{{
                            $t("home.route-item3-title")
                        }}
                    </h3>
                    <h4>{{ $t("home.route-item3-date") }}</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem3@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>{{ $t("home.route-item3-li1") }}</li>
                        <li>{{ $t("home.route-item3-li2") }}</li>
                        <li>{{ $t("home.route-item3-li3") }}</li>
                        <li>{{ $t("home.route-item3-li4") }}</li>
                        <li>{{ $t("home.route-item3-li5") }}</li>
                        <li>{{ $t("home.route-item3-li6") }}</li>
                    </ul>
                </div>
                <div class="item flag4">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />{{
                            $t("home.route-item4-title")
                        }}
                    </h3>
                    <h4>{{ $t("home.route-item4-date") }}</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem4@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>{{ $t("home.route-item4-li1") }}</li>
                        <li>{{ $t("home.route-item4-li2") }}</li>
                        <li>{{ $t("home.route-item4-li3") }}</li>
                        <li>{{ $t("home.route-item4-li4") }}</li>
                        <li>{{ $t("home.route-item4-li5") }}</li>
                        <li>{{ $t("home.route-item4-li6") }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <CusCircle class="circle1" r="14" bg="#ffca50"></CusCircle>
        <CusCircle class="circle2" r="29.5" bg="#ffca50"></CusCircle>
        <CusCircle class="circle3" r="67" bg="#ffca50"></CusCircle>
        <CusCircle class="circle4" r="83.5" bg="#50c3ff"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        name: "Route",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .route {
        padding-top: 89px;
        position: relative;
        padding-bottom: 100px;
    }
    h2 {
        text-align: left;
        font-size: 38px;
        font-weight: 300;
        text-align: left;
        color: #101010;
        letter-spacing: 0px;
        margin-bottom: 40px;
    }

    .route-item {
        display: flex;
        justify-content: space-between;
        .item {
            max-width: 290px;
            h3 {
                font-size: 20px;
                font-weight: 500;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
            }
            h3 > img {
                width: 26px;
                height: 51px;
            }
            h4 {
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 37px;
            }
            .totem {
                position: relative;
            }
            .totem > img {
                width: 102px;
                height: 102px;
                margin-bottom: 42px;
            }
            li {
                margin-left: 10px;
                text-align: left;
                position: relative;
                padding: 3px 0;
            }
            li::before {
                content: "";
                display: block;
                position: absolute;
                left: -10px;
                top: 11px;
                width: 4px;
                height: 4px;
                border-radius: 50%;
            }
        }
        .item.flag1 {
            li::before {
                background-color: #60a2a8;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -20px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #006871 0%, #ffffff 100%);
                border-radius: 1px;
            }
        }
        .item.flag2 {
            li::before {
                background-color: #b0b0b0;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #2d2d2d 0%, #027781 100%);
                border-radius: 1px;
            }
        }
        .item.flag3 {
            li::before {
                background-color: #ecaea7;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #bc1400 0%, #2d2d2d 100%);
                border-radius: 1px;
            }
        }
        .item.flag4 {
            li::before {
                background-color: #7291ca;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #2d2d2d 0%, #bc1400 100%);
                border-radius: 1px;
            }
            .totem::after {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                right: -40px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to right, #204994 0%, #ffffff 100%);
                border-radius: 1px;
            }
        }
    }

    .circle1 {
        left: 12%;
        top: 15%;
    }
    .circle2 {
        right: 14%;
        top: 12%;
    }
    .circle3 {
        top: 40%;
        left: -67px;
    }
    .circle4 {
        right: -73px;
        bottom: 26%;
    }
</style>
