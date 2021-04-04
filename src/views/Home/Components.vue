<template>
    <div class="components">
        <div class="container">
            <h2>{{ $t("home.components-title") }}</h2>
            <div class="item-body">
                <div class="item">
                    <div class="img-box">
                        <img
                            src="@/assets/images/SDK@2x.png"
                            style="width: 81px; height: 67px;"
                            alt=""
                        />
                    </div>
                    <h3>NFT Maker SDK</h3>
                    <p>
                        NFT maker SDK tool is a set of mainstream authoring tool
                        plug-ins. It is used for editing software such as
                        Photoshop, cubism editor, and Final Cut Pro. It can
                        forward authoring content to NFT with one click and
                        publish it on uniarts network
                    </p>
                </div>
                <div class="item">
                    <div class="img-box">
                        <img
                            src="@/assets/images/brige@2x.png"
                            style="width: 112px; height: 47px;"
                            alt=""
                        />
                    </div>
                    <h3>Cross link bridge</h3>
                    <p>
                        NFT maker SDK tool is a set of mainstream authoring tool
                        plug-ins. It is used for editing software such as
                        Photoshop, cubism editor, and Final Cut Pro. It can
                        forward authoring content to NFT with one click and
                        publish it on uniarts network
                    </p>
                </div>
                <div class="item">
                    <div class="img-box">
                        <img
                            src="@/assets/images/dao@2x.png"
                            style="width: 83px; height: 77px;"
                            alt=""
                        />
                    </div>
                    <h3>DAO Governance</h3>
                    <p>
                        NFT maker SDK tool is a set of mainstream authoring tool
                        plug-ins. It is used for editing software such as
                        Photoshop, cubism editor, and Final Cut Pro. It can
                        forward authoring content to NFT with one click and
                        publish it on uniarts network
                    </p>
                </div>
                <div class="item">
                    <div class="img-box">
                        <img
                            src="@/assets/images/shop@2x.png"
                            style="width: 81px; height: 56px;"
                            alt=""
                        />
                    </div>
                    <h3>Personalized store SDK</h3>
                    <p>
                        NFT maker SDK tool is a set of mainstream authoring tool
                        plug-ins. It is used for editing software such as
                        Photoshop, cubism editor, and Final Cut Pro. It can
                        forward authoring content to NFT with one click and
                        publish it on uniarts network
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "components",
    }
</script>

<style scoped lang="scss">
    .components {
        padding-top: 96px;
        padding-bottom: 200px;
        position: relative;
        background: url(~@/assets/images/key-features@2x.png) no-repeat;
        background-size: cover;
        background-position: center;
    }
    h2 {
        opacity: 1;
        font-size: 38px;
        font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
        font-weight: 800;
        text-align: center;
        margin-bottom: 65px;
        color: #101010;
    }
    .item-body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 585px;
            /* height: 309px; */
            padding: 24px 29px 40px 29px;
            margin-bottom: 40px;
            background: #ffffff;
            box-shadow: 0px 0px 28px 2px rgba(198, 198, 198, 0.29);
        }
        .img-box {
            height: 77px;
            text-align: left;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        h3 {
            font-size: 25px;
            font-weight: 500;
            text-align: left;
            color: #101010;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #101010;
            line-height: 30px;
        }
    }
</style>
