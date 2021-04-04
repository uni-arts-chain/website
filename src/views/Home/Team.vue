<template>
    <div class="team">
        <h2 class="title">Meet our team</h2>
        <div class="item-content">
            <h1>{{ $t("home.team-title") }}</h1>
            <p v-html="$t('home.team-desc')"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "team",
    }
</script>

<style scoped lang="scss">
    .team {
        padding-top: 105px;
    }
    .item-content {
        width: 100%;
        height: 631px;
        background: url(~@/assets/images/team@2x.png) no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2.title {
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 700;
        text-align: center;
        color: #101010;
        margin-bottom: 105px;
    }
    h1 {
        font-size: 46px;
        font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
        font-weight: 400;
        text-align: left;
        padding-bottom: 55px;
        color: #fefefe;
        position: relative;
        margin-bottom: 31px;
        text-shadow: 2px 2px 5px rgba(14, 41, 87, 0.93);
    }
    h1::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 199px;
        height: 4px;
        opacity: 1;
        background: #ffffff;
        box-shadow: 1px 2px 8px rgba(14, 41, 87, 0.75);
    }
    p {
        font-size: 30px;
        font-family: Helvetica Neue Regular, Helvetica Neue Regular-Regular;
        font-weight: 400;
        text-align: center;
        color: #fefefe;
        text-shadow: 1px 2px 4px rgba(14, 41, 87, 0.93);
    }
</style>
