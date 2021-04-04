<template>
    <div class="structure">
        <div class="container">
            <h2>Uniarts App</h2>
            <div class="item-body">
                <img src="@/assets/images/app-bottom-bg@2x.png" alt="" />
                <div class="web">
                    <div class="bottom-title">UniArts Webpage</div>
                </div>
                <div class="app">
                    <div class="bottom-title" style="bottom: -56px;">
                        UniArts Application
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "structure",
        computed: {
            locale() {
                return this.$store.state.language
            },
        },
    }
</script>

<style scoped lang="scss">
    .structure {
        padding-top: 100px;
        position: relative;
        padding-bottom: 37px;
    }
    h2 {
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        margin-bottom: 75px;
        color: #101010;
    }
    .item-body {
        width: 100%;
        height: 817px;
        padding: 106px 113px;
        background: linear-gradient(34deg, #7bcfff 0%, #ffec86 100%);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 20px;
            left: 0;
        }
    }

    .web {
        background: url(~@/assets/images/web@2x.png) no-repeat;
        background-size: 600px;
        background-position: center;
        position: relative;
        width: 542px;
        height: 567px;
        opacity: 1;
        border-radius: 30px;
        box-shadow: 0px 1px 28px 2px rgba(178, 178, 178, 0.74);
    }
    .app {
        background: url(~@/assets/images/app@2x.png) no-repeat;
        background-size: 325px;
        background-position: center;
        position: relative;
        width: 267px;
        height: 575px;
        opacity: 1;
        border-radius: 30px;
        box-shadow: 0px 1px 28px 2px rgba(178, 178, 178, 0.92);
    }
    .bottom-title {
        position: absolute;
        bottom: -65px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        font-family: PingFang SC Medium, PingFang SC Medium-Medium;
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        color: #ffffff;
    }
</style>
