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
    </div>
</template>

<script>
    export default {
        name: "ecology",
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
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        color: #101010;
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
            width: 497px;
            font-size: 18px;
            font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
            font-weight: 400;
            text-align: center;
            color: #101010;
            line-height: 30px;
        }
    }
</style>
