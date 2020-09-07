<template>
    <div class="partner">
        <div class="container">
            <h2>{{ $t("home.partner-title") }}</h2>
            <div class="partner-item">
                <div class="item">
                    <div class="logo-box">
                        <img
                            src="@/assets/images/polkadot-logo@2x.png"
                            alt=""
                        />
                    </div>
                    <span>Polkadot</span>
                </div>
                <div class="item">
                    <div class="logo-box">
                        <img
                            src="@/assets/images/darwinanet@2x.png"
                            alt=""
                            style="width: 90px; height: 90px;"
                        />
                    </div>
                    <span>Darwinia</span>
                </div>
                <div class="item">
                    <div class="logo-box">
                        <img src="@/assets/images/bihu-logo@2x.png" alt="" />
                    </div>
                    <span>Bihu</span>
                </div>
                <div class="item">
                    <div class="logo-box">
                        <img
                            src="@/assets/images/hashkey-logo@2x.png"
                            style="height: 36px;"
                            alt=""
                        />
                    </div>
                    <span>Hashkey</span>
                </div>
                <div class="item">
                    <div class="logo-box">
                        <img src="@/assets/images/imtoken-logo@2x.png" alt="" />
                    </div>
                    <span>imToken</span>
                </div>
                <div class="item">
                    <div class="logo-box">
                        <img src="@/assets/images/ddex-logo@2x.png" alt="" />
                    </div>
                    <span>DDEX</span>
                </div>
            </div>
        </div>
        <CusCircle class="circle1" r="24.5" bg="#ffca50"></CusCircle>
        <CusCircle class="circle2" r="34.5" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle3" r="50" bg="#ffca50"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        name: "partner",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .partner {
        padding-top: 100px;
        position: relative;
        padding-bottom: 300px;
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
    .partner-item {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        justify-content: space-between;
        .item {
            .logo-box {
                height: 84px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
            }
            .logo-box > img {
                height: 100%;
            }
        }
        .item > span {
            font-size: 18px;
            font-weight: 400;
            text-align: left;
            color: #101010;
            letter-spacing: 0px;
        }
    }
    .circle1 {
        right: 5%;
        top: 140px;
    }
    .circle2 {
        left: 5%;
        top: 240px;
    }
    .circle3 {
        right: -40px;
        bottom: 10%;
    }
</style>
