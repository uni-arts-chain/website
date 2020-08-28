<template>
    <div class="team">
        <h1>{{ $t("home.team-title") }}</h1>
        <p>{{ $t("home.team-desc") }}</p>
    </div>
</template>

<script>
    export default {
        name: "team",
    }
</script>

<style scoped lang="scss">
    .team {
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
    h1 {
        font-size: 46px;
        font-weight: 600;
        text-align: left;
        color: #fefefe;
        letter-spacing: 5px;
        margin-bottom: 24px;
    }
    h1::after {
        content: "";
        display: block;
        margin-top: 15px;
        width: 100%;
        height: 4px;
        background: #ffffff;
    }
    p {
        font-size: 24px;
        font-weight: 600;
        text-align: left;
        color: #fefefe;
        letter-spacing: 2px;
    }
</style>
