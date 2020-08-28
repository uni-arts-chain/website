<template>
    <div class="structure">
        <div class="container">
            <h2>{{ $t("home.structure-title") }}</h2>
            <div class="item-body">
                <img
                    v-if="locale == 'zh'"
                    src="@/assets/images/structure@2x.png"
                    alt=""
                />
                <img v-else src="@/assets/images/structure2@2x.png" alt="" />
            </div>
            <div class="item-body bottom">
                <img
                    v-if="locale == 'zh'"
                    src="@/assets/images/pi@2x.png"
                    alt=""
                />
                <img v-else src="@/assets/images/pi2@2x.png" alt="" />
            </div>
        </div>
        <CusCircle class="circle1" r="90" bg="#ffca50"></CusCircle>
        <CusCircle class="circle2" r="15" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle3" r="41" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle4" r="42" bg="#ffca50"></CusCircle>
        <CusCircle class="circle5" r="44" bg="#50c3ff"></CusCircle>
        <CusCircle class="circle6" r="15" bg="#ffca50"></CusCircle>
    </div>
</template>

<script>
    import CusCircle from "@/components/Circle"
    export default {
        name: "structure",
        components: {
            CusCircle,
        },
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
    }
    .circle2 {
        right: 8%;
        top: 40%;
    }
    .circle3 {
        right: 15%;
        bottom: 30%;
    }
    .circle4 {
        left: 2%;
        top: 37%;
    }
    .circle5 {
        left: 10%;
        bottom: 202px;
    }
    .circle6 {
        right: 2%;
        bottom: 0%;
    }
</style>
