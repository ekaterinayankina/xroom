<template>
    <div class="create-block">
        <Header color="white"/>
        <div class="block">
            <h1>We create</h1>
            <p>We&nbsp;do&nbsp;not draw a&nbsp;beautiful picture, we&nbsp;offer working solutions.
                We&nbsp;are young professionals making visual identities, digital solutions and associated services for business</p>
            <div class="services">
                <div class="services-group">
                    <g-link class="service__link" to="/">IT consulting</g-link>
                    <g-link class="service__link" to="/">Prototyping</g-link>
                    <g-link class="service__link" to="/">Custom software development</g-link>
                </div>
                <div class="services-group">
                    <g-link class="service__link" to="/">Application Integration</g-link>
                    <g-link class="service__link" to="/">Migrating applications and data</g-link>
                    <g-link class="service__link" to="/">Software upgrade</g-link>
                </div>
                <div class="services-group">
                    <g-link class="service__link" to="/">Information Security  </g-link>
                    <g-link class="service__link" to="/">Virtualization</g-link>
                    <g-link class="service__link" to="/">SAP Consulting</g-link>
                </div>
                <div class="services-group">
                    <g-link class="service__link" to="/">Independent testing</g-link>
                    <g-link class="service__link" to="/">Maintenance and support</g-link>
                    <g-link class="service__link" to="/">Dedicated development centers</g-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "WeCreate",
        components: {Header}
    }
</script>

<style lang="scss" scoped>
    .create-block {
        padding-top: 30px;
        .block {
            position: relative;
            padding-top: 34px;
            padding-bottom: 130px;
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
            p {
                max-width: 75%;
                margin-top: 25px;
                font-size: 27px;
                line-height: 45px;
            }
            .services {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 62px;
                max-width: 73%;
                .services-group {
                    display: flex;
                    flex-direction: column;
                }
                .service__link {
                    font-size: 12px;
                    color: black;
                    line-height: 36px;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
