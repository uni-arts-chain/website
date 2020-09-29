/** * Created by Lay Hunt on 2020-09-07 11:25:57. */
<template>
    <div class="detail">
        <div class="container">
            <h1>{{ $t("news.articles" + id + "-title") }}</h1>
            <img src="@/assets/images/faq@2x.png" alt="" />
            <div class="content">
                {{ $t("news.articles" + id + "-content") }}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "detail",
        data() {
            return {
                id: this.$route.params.id,
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 40px 32px;
        text-align: center;
    }
    h1 {
        text-align: left;
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 50px;
    }
    img {
        max-width: 100%;
        max-height: 350px;
        margin-bottom: 40px;
    }
    .content {
        text-align: left;
        color: #101010;
        font-size: 17px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-text-stroke: 1px transparent;
        margin-bottom: 1rem;
        line-height: 2rem;
        text-indent: 34px;
    }
</style>
