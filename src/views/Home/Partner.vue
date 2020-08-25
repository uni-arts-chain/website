<template>
    <div class="partner">
        <div class="container">
            <h2>合作机构</h2>
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
        <CusCircle class="circle1"></CusCircle>
        <CusCircle class="circle2"></CusCircle>
        <CusCircle class="circle3"></CusCircle>
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
        width: 49px;
        height: 49px;
        background-color: #ffca50;
    }
    .circle2 {
        left: 5%;
        top: 240px;
        width: 69px;
        height: 69px;
        background-color: #50c3ff;
    }
    .circle3 {
        right: -40px;
        bottom: 10%;
        width: 100px;
        height: 100px;
        background-color: #ffca50;
    }
</style>
