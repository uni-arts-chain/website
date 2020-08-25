<template>
    <div class="route">
        <div class="container">
            <h2>路线图</h2>
            <div class="route-item">
                <div class="item flag1">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />里程碑I
                    </h3>
                    <h4>预计2020年Q4</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem1@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>云画链区块链Alpha版开发完成</li>
                        <li>云画链区块链浏览器Alpha版开发完成</li>
                        <li>云画链应用App Alpha版开发完成</li>
                        <li>实现交易产品的NFT数字化管理</li>
                    </ul>
                </div>
                <div class="item flag2">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />里程碑II
                    </h3>
                    <h4>预计2021年Q1</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem2@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>云画链区块链Beta版开发完成</li>
                        <li>云画链区块链浏览器Beta版开发完成</li>
                        <li>云画链测试网络(伏羲版)上线</li>
                        <li>云画链应用App Beta版开发完成</li>
                        <li>实现艺术品交易全过程数据的上链</li>
                        <li>技术与社区开始进行对接波卡生态准备</li>
                    </ul>
                </div>
                <div class="item flag3">
                    <h3>
                        <img
                            src="@/assets/images/flag@2x.png"
                            alt=""
                        />里程碑III
                    </h3>
                    <h4>预计2021年Q3</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem3@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>云画链区块链Stable版开发完成</li>
                        <li>云画链区块链浏览器Stable版开发完成</li>
                        <li>接入波卡生态，成为波卡平行链的一员</li>
                        <li>云画链正式网络(女娲版)上线</li>
                        <li>云画链应用App Stable版开发完成</li>
                        <li>云画链进行去中心社区化管理</li>
                    </ul>
                </div>
                <div class="item flag4">
                    <h3>
                        <img src="@/assets/images/flag@2x.png" alt="" />里程碑IV
                    </h3>
                    <h4>预计2022年Q4</h4>
                    <div class="totem">
                        <img src="@/assets/images/totem4@2x.png" alt="" />
                    </div>
                    <ul>
                        <li>大数据智能匹配系统上线</li>
                        <li>基金会艺术孵化与投资项目启动</li>
                        <li>云画链正式网络(后羿版)上线</li>
                        <li>大型艺术机构与拍卖机构接入</li>
                        <li>云画链应用App全部功能上线</li>
                        <li>更多艺术品与非遗产品上线</li>
                    </ul>
                </div>
            </div>
        </div>
        <CusCircle class="circle1"></CusCircle>
        <CusCircle class="circle2"></CusCircle>
        <CusCircle class="circle3"></CusCircle>
        <CusCircle class="circle4"></CusCircle>
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
        margin-bottom: 40px;
    }

    .route-item {
        display: flex;
        justify-content: space-between;
        .item {
            max-width: 290px;
            h3 {
                font-size: 20px;
                font-weight: 500;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
            }
            h3 > img {
                width: 26px;
                height: 51px;
            }
            h4 {
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                color: #101010;
                letter-spacing: 0px;
                margin-bottom: 37px;
            }
            .totem {
                position: relative;
            }
            .totem > img {
                width: 102px;
                height: 102px;
                margin-bottom: 42px;
            }
            li {
                margin-left: 20px;
                text-align: left;
                position: relative;
                padding: 3px 0;
            }
            li::before {
                content: "";
                display: block;
                position: absolute;
                left: -10px;
                top: 11px;
                width: 4px;
                height: 4px;
                border-radius: 50%;
            }
        }
        .item.flag1 {
            li::before {
                background-color: #60a2a8;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -20px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #006871 0%, #ffffff 100%);
                border-radius: 1px;
            }
        }
        .item.flag2 {
            li::before {
                background-color: #b0b0b0;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #2d2d2d 0%, #027781 100%);
                border-radius: 1px;
            }
        }
        .item.flag3 {
            li::before {
                background-color: #ecaea7;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #bc1400 0%, #2d2d2d 100%);
                border-radius: 1px;
            }
        }
        .item.flag4 {
            li::before {
                background-color: #7291ca;
            }
            .totem::before {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                left: -50px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to left, #2d2d2d 0%, #bc1400 100%);
                border-radius: 1px;
            }
            .totem::after {
                content: "";
                display: block;
                position: absolute;
                top: 50px;
                right: -40px;
                width: 63px;
                height: 2px;
                background: linear-gradient(to right, #204994 0%, #ffffff 100%);
                border-radius: 1px;
            }
        }
    }

    .circle1 {
        left: 12%;
        top: 15%;
        width: 28px;
        height: 28px;
        background-color: #ffca50;
    }
    .circle2 {
        right: 14%;
        top: 12%;
        width: 59px;
        height: 59px;
        background-color: #ffca50;
    }
    .circle3 {
        top: 40%;
        left: -67px;
        width: 134px;
        height: 134px;
        background-color: #ffca50;
    }
    .circle4 {
        right: -73px;
        bottom: 26%;
        width: 167px;
        height: 167px;
        background-color: #50c3ff;
    }
</style>
