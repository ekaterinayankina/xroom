<template>
    <div class="technologies">
        <Header color="white"/>
        <div class="block">
            <div class="content">
                <h1>Technologies</h1>
                <div class="groups">
                    <div class="group">
                        <p>For Business</p>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/adobe.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/advance.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/netflix.png"/></g-link></div>
                    </div>
                    <div class="group">
                        <p>For Management</p>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/netflix.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/xero.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/adobe.png"/></g-link></div>
                    </div>
                    <div class="group">
                        <p>For Development</p>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/mozilla.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/opera.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/salesforce.png"/></g-link></div>
                    </div>
                    <div class="group">
                        <p>For Design</p>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/salesforce.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/tile.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/mozilla.png"/></g-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "Technologies",
        components: {Header}
    }
</script>

<style lang="scss" scoped>
    .technologies {
        padding-top: 27px;
        .block {
            padding-top: 35px;
            padding-bottom: 95px;
            .content {
                position: relative;
                display: flex;
                flex-direction: column;
                border-right: 1px solid #404142;
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 9%;
                    border-right: 1px solid #ececec;
                }
                h1 {
                    font-size: 36px;
                }
                .groups {
                    display: flex;
                    padding: 28px 25px 0;
                    .group {
                        margin-left: 9.1%;
                        width: 17.5%;
                        border-right: 1px solid #ececec;
                        height: 313px;
                        &:first-child {
                            margin-left: 0;
                        }
                        &:last-child {
                            border: none;
                        }
                        p {
                            font-size: 12px;
                        }
                        img {
                            max-width: 71px;
                        }
                        .group-image {
                            height: 45px;
                            margin-top: 49px;
                        }
                    }
                }
            }
        }
    }
</style>
