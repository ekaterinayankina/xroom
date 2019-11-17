<template>
    <div class="footer">
        <div class="make-a-project">
            <div class="title">
                <p>We collaborate with ambitious brands and people;<br>
                    we’d love to build something great together.<br>
                    info@xroom.com
                </p>
            </div>
            <div class="button-wrapper">
                <button class="make">Make a project</button>
            </div>
        </div>
        <div class="contact-us">
            <h1>Contact us</h1>
            <div class="groups">
                <div class="group">
                    <div class="group-block">
                        <p>Russian<br> 103426 Moscow, New Arbat Street 165/32</p>
                        <p>8 800 300 30 30 <br>consult@xroom.com</p>
                    </div>
                </div>
                <div class="group">
                    <div class="group-block">
                        <p>USA <br> 8432 Steller Dr Culver City CA 90232</p>
                        <p>1 213-349-1539 <br> info@noxsterseo.com</p>
                    </div>
                </div>
                <div class="group">
                    <div class="group-block">
                        <p>Israel <br> 68125 Tel Aviv, 29 Hamered Street</p>
                        <p>1 213-349-1539 <br> isr@noxsterseo.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-block">
            <p class="copyright">© 2018 All right reserved</p>
            <div class="links">
                <g-link to="/">facebook</g-link>
                <g-link to="/">instagram</g-link>
                <g-link to="/">Behance</g-link>
                <g-link to="/">vk</g-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    .footer {
        padding: 72px 72px 95px;
        .make-a-project {
            position: relative;
            display: flex;
            justify-content: space-between;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 5.6%;
                border-top: 1px solid #404142;
            }
            .title {
                padding-top: 18px;
                p {
                    font-size: 27px;
                    line-height: 44px;
                    color: #2f2f2f;
                }
            }
            .button-wrapper {
                display: flex;
                align-items: center;
                padding-top:20px;
                padding-bottom: 90px;
            }
        }
        .contact-us {
            padding-top: 61px;
            padding-bottom: 79px;
            h1 {
                font-size: 13px;
            }
            .groups {
                display: flex;
                padding-top: 34px;
                .group {
                    margin-left: 5.8%;
                    width: 27.4%;
                    height: 135px;
                    &:first-child {
                        margin-left: 0;
                    }
                    &:last-child {
                        border: none;
                    }
                    .group-block {
                        border-right: 1px solid #ececec;
                    }
                    p {
                        margin-top: 10px;
                        margin-bottom: 34px;
                        font-size: 13.5px;
                        line-height: 19px;
                    }
                }
            }
        }
        .bottom-block {
            display: flex;
            justify-content: space-between;
            .copyright {
                font-size: 13px;
                font-weight: 500;
            }
            .links {
                width: 25%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    color: black;
                    font-size: 13px;
                    font-weight: 500;
                }
            }
        }
    }
</style>
