<template>
    <div class="structure">
        <div class="container">
            <h2>架构设计</h2>
            <div class="item-body">
                <img src="@/assets/images/structure@2x.png" alt="" />
            </div>
            <div class="item-body bottom">
                <img src="@/assets/images/pi@2x.png" alt="" />
            </div>
        </div>
        <CusCircle class="circle1"></CusCircle>
        <CusCircle class="circle2"></CusCircle>
        <CusCircle class="circle3"></CusCircle>
        <CusCircle class="circle4"></CusCircle>
        <CusCircle class="circle5"></CusCircle>
        <CusCircle class="circle6"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        name: "structure",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .structure {
        padding-top: 100px;
        position: relative;
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
    .item-body {
        width: 100%;
        padding: 0 5%;
        padding-bottom: 40px;
        > img {
            width: 100%;
        }
    }
    .bottom {
        padding-top: 100px;
        padding-bottom: 40px;
        padding-left: 0;
        padding-right: 0;
    }
    .circle1 {
        right: -110px;
        top: 20px;
        width: 180px;
        height: 180px;
        background-color: #ffca50;
    }
    .circle2 {
        right: 8%;
        top: 40%;
        width: 30px;
        height: 30px;
        background-color: #50c3ff;
    }
    .circle3 {
        right: 15%;
        bottom: 30%;
        width: 82px;
        height: 82px;
        background-color: #50c3ff;
    }
    .circle4 {
        left: 2%;
        top: 37%;
        width: 84px;
        height: 84px;
        background-color: #ffca50;
    }
    .circle5 {
        left: 10%;
        bottom: 202px;
        width: 88px;
        height: 88px;
        background-color: #50c3ff;
    }
    .circle6 {
        right: 2%;
        bottom: 0%;
        width: 30px;
        height: 30px;
        background-color: #ffca50;
    }
</style>
