<template>
    <div class="ecology">
        <div class="container">
            <h2>{{ $t("home.ecology-title") }}</h2>
            <div class="body">
                <div class="left">
                    <img src="@/assets/images/ecology1@2x.png" alt="" />
                    <h3>{{ $t("home.ecology-title-item1-title") }}</h3>
                    <p>{{ $t("home.ecology-title-item1-desc") }}</p>
                </div>
                <div class="right">
                    <img src="@/assets/images/ecology2@2x.png" alt="" />
                    <h3>{{ $t("home.ecology-title-item2-title") }}</h3>
                    <p>{{ $t("home.ecology-title-item2-desc") }}</p>
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
        name: "ecology",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .ecology {
        padding-top: 100px;
        position: relative;
        padding-top: 69px;
        padding-bottom: 86px;
        background-color: #f1faff;
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
    .body {
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .left,
    .right {
        position: relative;
        z-index: 1;
        img {
            width: 460px;
            margin-bottom: 30px;
        }
        h3 {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            color: #101010;
            letter-spacing: 0px;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: #101010;
            line-height: 30px;
            max-width: 470px;
            letter-spacing: 0px;
        }
    }

    .circle1 {
        top: 30%;
        left: 5%;
        z-index: 0;
        width: 49px;
        height: 49px;
        background-color: #50c3ff;
    }
    .circle2 {
        z-index: 0;
        right: 8%;
        top: 30%;
        width: 28px;
        height: 28px;
        background-color: #50c3ff;
    }
    .circle3 {
        z-index: 0;
        right: 2%;
        bottom: 15%;
        width: 49px;
        height: 49px;
        background-color: #ffca50;
    }
</style>
