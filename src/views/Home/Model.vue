<template>
    <div class="model">
        <div class="container">
            <h2>云画链经济模型</h2>
            <div class="left">
                <div class="item">
                    <h3 class="title">
                        <img src="@/assets/images/uart@2x.png" alt="" />UART
                    </h3>
                    <p>
                        云画链网络的原生资产，UART可以作为交易的燃料费。燃料费包括交易费用，合约执行费用，网络带宽费用，存储费用等等。保证所有节点服务商的基础收益。
                    </p>
                </div>
                <div class="item">
                    <h3 class="title">
                        <img
                            src="@/assets/images/uink@2x.png"
                            style="width: 50px; height: 58px; margin-right: 0;"
                            alt=""
                        />UNIK
                    </h3>
                    <p>
                        云画链上发行的积分，没有数量限制，是平台收益分红权益证明，促进平台多方的共通发展。通过碎片化数字化分红权的方式来激励用户，增加用户粘性。根据多方用户行为实时奖励给用户。持有云画积分（UINK）的用户可以参与云画链收入分成。为了鼓励用户进行长期锁定和承诺投入，进行每天或每小时进行奖励。
                    </p>
                </div>
                <div class="item">
                    <h3 class="title">
                        <img
                            src="@/assets/images/staking@2x.png"
                            alt=""
                        />Staking
                    </h3>
                    <p>
                        云画链网络将会是波卡平行链中的一员。用户通过DOT
                        Staking在网络中视同参与波卡的POS挖矿过程，挖矿者通过质押DOT资产来获得Staking
                        DOT收益以及云画链的UART收益。
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="table" style="margin-bottom: 50px;">
                    <div class="title"><span>UART</span>分配方案</div>
                    <div class="table-body">
                        <div class="header">
                            <div class="td">分类</div>
                            <div class="td">比例</div>
                            <div class="td">数量</div>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="td">挖矿</div>
                                <div class="td">40%</div>
                                <div class="td">8400万</div>
                            </div>
                            <div class="row">
                                <div class="td">社区运营</div>
                                <div class="td">10%</div>
                                <div class="td">2100万</div>
                            </div>
                            <div class="row">
                                <div class="td">波卡生态</div>
                                <div class="td">10%</div>
                                <div class="td">2100万</div>
                            </div>
                            <div class="row">
                                <div class="td">基金会孵化器</div>
                                <div class="td">10%</div>
                                <div class="td">2100万</div>
                            </div>
                            <div class="row">
                                <div class="td">团队持有</div>
                                <div class="td">30%</div>
                                <div class="td">6300万</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table bottom-table">
                    <div class="title"><span>UINK</span>分配比例</div>
                    <div class="table-body">
                        <div class="header">
                            <div class="td">获得方</div>
                            <div class="td">参与方式</div>
                            <div class="td">预计占比</div>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="td">创作者</div>
                                <div class="td">溯源上链证明</div>
                                <div class="td">30%</div>
                            </div>
                            <div class="row">
                                <div class="td">机构</div>
                                <div class="td">证书加签</div>
                                <div class="td">15%</div>
                            </div>
                            <div class="row">
                                <div class="td">买家</div>
                                <div class="td">交易证明</div>
                                <div class="td">15%</div>
                            </div>
                            <div class="row">
                                <div class="td">创作者 机构 买家</div>
                                <div class="td">贡献证明</div>
                                <div class="td">20%</div>
                            </div>
                            <div class="row">
                                <div class="td">机构、法人</div>
                                <div class="td">执法证明</div>
                                <div class="td">5%</div>
                            </div>
                            <div class="row">
                                <div class="td">开发团队</div>
                                <div class="td">新功能上线</div>
                                <div class="td">10%</div>
                            </div>
                            <div class="row">
                                <div class="td">社群</div>
                                <div class="td">活动组织</div>
                                <div class="td">5%</div>
                            </div>
                        </div>
                    </div>
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
        name: "model",
        components: {
            CusCircle,
        },
    }
</script>

<style scoped lang="scss">
    .model {
        padding-top: 100px;
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
    .container {
        overflow: hidden;
    }
    .left {
        width: 45%;
        float: left;
        .item {
            margin-bottom: 57px;
            .title {
                font-size: 24px;
                line-height: 30px;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 23px;
                display: flex;
                align-items: flex-end;
                font-weight: 600;
            }
            .title > img {
                width: 32px;
                height: 32px;
                margin-right: 15px;
            }
            p {
                font-size: 16px;
                font-weight: 400;
                text-align: left;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
            }
        }
    }
    .right {
        float: right;
        width: 55%;
        padding-left: 5%;
        .table {
            .title {
                text-align: right;
                font-size: 18px;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 12px;
                span {
                    font-weight: 600;
                }
            }
            .header,
            .body {
                float: left;
                width: 100%;
            }
            .table-body {
                overflow: hidden;
                background-color: #fff;
            }
            .table-body .header .td {
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
            }
            .table-body .body .td {
                font-size: 16px;
                font-weight: 400;
                color: #101010;
                line-height: 30px;
                letter-spacing: 0px;
                padding: 3px 0;
            }
            .table-body .header {
                padding: 5px 0;
                background: #98d8ff;
            }
            .table-body .td {
                float: left;
                width: 33%;
                font-size: 16px;
            }
            .table-body .row {
                overflow: hidden;
            }
            .table-body .row:nth-child(odd) {
                background-color: #eaf7ff;
            }
        }
        .bottom-table .table-body .header {
            padding: 5px 0;
            background: #ffce57;
        }
        .bottom-table .table-body .row:nth-child(odd) {
            background-color: #fef5dc;
        }
    }

    .circle1 {
        left: -107px;
        top: 30%;
        width: 215px;
        height: 215px;
        background-color: #ffca50;
    }
    .circle2 {
        left: 10%;
        bottom: 27%;
        width: 30px;
        height: 30px;
        background-color: #ffca50;
    }
    .circle3 {
        right: 5%;
        bottom: 45%;
        width: 58px;
        height: 58px;
        background-color: #50c3ff;
    }
</style>
