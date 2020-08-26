<template>
    <div class="banner">
        <div class="container">
            <h1 class="title">{{ $t("home.banner-title") }}</h1>
            <div class="line"></div>
            <h3 class="desc">{{ $t("home.banner-desc") }}</h3>
            <div class="sub-body">
                <input type="text" placeholder="name@email.com" />
                <button>{{ $t("home.banner-button") }}</button>
            </div>
            <CusCircle class="circle1"></CusCircle>
            <CusCircle class="circle2"></CusCircle>
        </div>
        <CusCircle class="circle3"></CusCircle>
        <CusCircle class="circle4"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .banner {
        padding-top: 60px;
        position: relative;
    }
    .container {
        position: relative;
    }
    .title {
        font-size: 46px;
        font-weight: 600;
        text-align: left;
        color: #101010;
        line-height: 60px;
        letter-spacing: 5px;
        margin-bottom: 51px;
    }
    .line {
        width: 156px;
        height: 5px;
        background: linear-gradient(to right, #ffca50 0%, #50c3ff 100%);
        margin-bottom: 41px;
    }
    .desc {
        max-width: 52%;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #101010;
        line-height: 32px;
        letter-spacing: 1px;
        margin-bottom: 78px;
    }
    .sub-body {
        text-align: left;
        input {
            width: 333px;
            height: 53px;
            background: #51c2ff;
            border-radius: 27px;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            color: white;
            letter-spacing: 0px;
            text-align: left;
            outline: none;
            margin-right: 10px;
            padding-left: 25px;
            padding-right: 25px;
        }
        input::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #6b6b6b;
        }
        input:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #6b6b6b;
        }
        input::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #6b6b6b;
        }
        input:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #6b6b6b;
        }
        button {
            background: #ffca50;
            border-radius: 27px;
            height: 53px;
            padding-left: 25px;
            padding-right: 25px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            letter-spacing: 1px;
            outline: none;
            cursor: pointer;
        }
    }
    .circle {
        position: absolute;
    }
    .circle1 {
        right: 8%;
        top: 0;
        width: 216px;
        height: 216px;
        background-color: #50c3ff;
    }
    .circle2 {
        bottom: 0;
        right: 30%;
        width: 84px;
        height: 84px;
        background-color: #ffca50;
    }
    .circle3 {
        bottom: 20%;
        right: 5%;
        width: 39px;
        height: 39px;
        background-color: #50c3ff;
    }
    .circle4 {
        bottom: 15%;
        left: 5%;
        width: 45px;
        height: 45px;
        background-color: #ffca50;
    }
</style>
