<template>
    <div class="clients">
        <Header color="black"/>
        <div class="block">
            <div class="content">
                <h1>Clients</h1>
                <div class="groups">
                    <div class="group">
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/adobe.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/netflix.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/mozilla.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/salesforce.png"/></g-link></div>
                    </div>
                    <div class="group">
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/advance.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/xero.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/opera.png"/></g-link></div>
                        <div class="group-image"><g-link><g-image alt="" src="~/assets/img/clients/tile.png"/></g-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "Clients",
        components: {Header}
    }
</script>

<style lang="scss" scoped>
    .clients {
        padding-top: 27px;
        .block {
            padding-top: 35px;
            padding-bottom: 114px;
            .content {
                position: relative;
                display: flex;
                flex-direction: column;
                border-right: 1px solid #404142;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 29%;
                    border-right: 1px solid white;
                }
                h1 {
                    font-size: 36px;
                }
                .groups {
                    display: flex;
                    flex-direction: column;
                    padding-right: 180px;
                    .group {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        height: 160px;
                        img {
                            max-width: 100px;
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

