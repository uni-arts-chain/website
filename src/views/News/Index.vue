/** * Created by Lay Hunt on 2020-09-07 10:00:01. */
<template>
    <div class="index">
        <div class="container">
            <h1>{{ $t("navbar.news") }}</h1>
            <!-- <p>{{$t("news.no-data")}}</p> -->
            <router-link to="/faq/1" class="card">
                <div class="img"></div>
                <div class="content">
                    <h4>{{ $t("news.articles1-title") }}</h4>
                    <div class="date">2012-11-22 18:03:22</div>
                    <p>{{ $t("news.articles1-detail") }}</p>
                </div>
            </router-link>
            <router-link to="/faq/2" class="card">
                <div class="img"></div>
                <div class="content">
                    <h4>{{ $t("news.articles2-title") }}</h4>
                    <div class="date">2012-11-22 18:03:22</div>
                    <p>{{ $t("news.articles2-detail") }}</p>
                </div>
            </router-link>
            <router-link to="/faq/3" class="card">
                <div class="img"></div>
                <div class="content">
                    <h4>{{ $t("news.articles3-title") }}</h4>
                    <div class="date">2012-11-22 18:03:22</div>
                    <p>{{ $t("news.articles3-detail") }}</p>
                </div>
            </router-link>

            <div class="more">{{ $t("global.more") }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                dialogVisible: false,
            }
        },
        methods: {
            showDialog() {
                this.dialogVisible = true
            },
        },
    }
</script>
<style lang="scss" scoped>
    h1 {
        font-size: 38px;
        font-weight: 300;
        padding-top: 50px;
        text-align: left;
        color: #101010;
        letter-spacing: 0px;
        margin-bottom: 45px;
    }
    .card {
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 5px 9px rgba(0, 0, 0, 0.08), 0 5px 9px rgba(0, 0, 0, 0.04);
        display: flex;
        justify-content: space-between;
        height: 210px;
        margin-bottom: 30px;
    }
    .card:hover .content p {
        color: black;
    }
    .content {
        padding: 30px 40px;
        width: calc(100% - 300px);
        overflow: hidden;
        h4 {
            font-size: 18px;
            font-weight: 600;
            text-align: left;
            color: black;
            letter-spacing: 0px;
            margin-bottom: 19px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .date {
            text-align: left;
            color: #848484;
            font-size: 15px;
            margin-bottom: 25px;
        }
        P {
            text-align: left;
            line-height: 1.5;
            color: #2c3e50;
            transition: color 0.3 ease;
        }
    }
    .img {
        width: 300px;
        background: url(~@/assets/images/faq@2x.png) no-repeat;
        background-size: cover;
    }

    .more {
        font-weight: 600;
        font-size: 16px;
        padding: 0 75px;
        border-radius: 5px;
        line-height: 43px;
        color: #2c3e50;
        border: 1px solid #2c3e50;
        width: 208px;
        height: 43px;
        margin: 0 auto;
        margin-top: 70px;
        cursor: pointer;
    }

    @media only screen and (min-width: 1024px) {
    }
</style>
