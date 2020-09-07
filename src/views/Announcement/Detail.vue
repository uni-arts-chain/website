/** * Created by Lay Hunt on 2020-09-07 11:25:57. */
<template>
    <div class="detail">
        <div class="container">
            <h1>什么是OCO订单（选择性委托订单）？</h1>
            <img src="@/assets/images/ecology1@2x.png" alt="" />
            <div class="content">
                OCO订单（选择性委托订单）或“二选一”订单支持用户同时提交两个订单。它结合了限价订单和止盈止损，但最终只能执行其中一个。
                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。
                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。
                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。<br />
                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。
                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。<br />

                换句话说，只要其中一个订单部分或全部被执行，则另一个订单将自动取消。请注意，若取消其中一个订单，则另一个订单也会被取消。
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "detail",
        data() {
            return {}
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
        font-size: 16px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
        -webkit-text-stroke: 1px transparent;
        margin-bottom: 1rem;
        line-height: 2rem;
    }
</style>
