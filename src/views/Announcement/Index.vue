/** * Created by Lay Hunt on 2020-09-07 10:00:01. */
<template>
    <div class="index">
        <div class="container">
            <h1>{{ $t("navbar.articles") }}</h1>
            <router-link to="/news/1" class="card">
                <div class="img"></div>
                <div class="content">
                    <h4>什么是OCO订单（选择性委托订单）？</h4>
                    <p>
                        OCO订单（选择性委托订单）是一项简单但功能强大的工具，它OCO订单（选择性委托订单）是一项简单但功能但功能强大的工具，能够让你和其他币安用户一起通过更为安全和多样的方式进行交易。
                    </p>
                </div>
            </router-link>
            <router-link to="/news/2" class="card">
                <div class="img"></div>
                <div class="content">
                    <h4>什么是OCO订单（选择性委托订单）？</h4>
                    <p>
                        OCO订单（选择性委托订单）是一项简单但功能强大的工具，它OCO订单（选择性委托订单）是一项简单但功能但功能强大的工具，能够让你和其他币安用户一起通过更为安全和多样的方式进行交易。
                    </p>
                </div>
            </router-link>
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
        box-shadow: 0 5px 9px rgba(0, 0, 0, 0.08), 0 5px 9px rgba(0, 0, 0, 0.04);
        display: flex;
        justify-content: space-between;
        height: 168px;
        margin-bottom: 30px;
    }
    .card:hover .content p {
        color: black;
    }
    .content {
        padding: 16px;
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
        P {
            text-align: left;
            line-height: 1.5;
            color: #2c3e50;
            transition: color 0.3 ease;
        }
    }
    .img {
        width: 300px;
        background: url(~@/assets/images/ecology1@2x.png) no-repeat;
        background-size: cover;
    }

    @media only screen and (min-width: 1024px) {
    }
</style>
