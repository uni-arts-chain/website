<template>
    <div class="route">
        <div class="container">
            <h2>路线图</h2>
            <div class="route-item">
                <div class="item">
                    <h3></h3>
                    <h4></h4>
                    <img src="" alt="" />
                    <ul></ul>
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
        margin-bottom: 65px;
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
</style>
