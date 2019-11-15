<template>
    <div class=" block top-block">
        <div class="content">
            <div class="title">
                <h1>We&nbsp;take digital experiences to&nbsp;the next&nbsp;level</h1>
                <hr size="1" color="#ffffff" />
                <p>
                    X-ROM Consulting Group
                </p>
            </div>
            <div class="whale">
                <Whale/>
            </div>
        </div>
        <div class="footer">
            <div class="footer__right">
                <p class="footer-links">
                    <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">facebook</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">instagram</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Behance</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">vk</a>
                </p>
            </div>
            <div class="footer__left">
                <p class="footer-links">
                    <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Сontact us</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Russian, Moscow, New Arbat Street 165/32</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">8 800 300 30 30</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Whale from "./Whale";
    export default {
        name: "TopBlock",
        components: {Whale}
    }
</script>

<style lang="scss" scoped>
    .top-block {
        display: flex;
        flex-direction: column;
        .content {
            display: flex;
            align-items: center;
            padding-bottom: 112px;
            padding-right: 7.6%;
            position: relative;
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
            .title {
                display: flex;
                flex-direction: column;
                width: 45%;
                position: absolute;
                left: 0;
                h1 {
                    margin-bottom: -6px;
                    margin-top: -9px;
                    font-size: 36px;
                }
                hr {
                    margin: 22px 0 11px;
                    width: 14%;
                    border: none;
                    color: #404142;
                    background-color: #404142;
                    height: 1px;
                }
                p {
                    font-size: 12.1px;
                }
            }
            .whale {
                width: 100%;
                text-align: right;
            }
        }
        .footer {
            display: flex;
            flex-direction: row-reverse;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 72px;
            &__left {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                background-color: white;
                .footer-links {
                    display: flex;
                    justify-content: space-around;
                    margin-left: 7%;
                    margin-right: 5.5%;
                    a {
                        margin: 0 31px;
                        font-size: 13px;
                        color: black;
                        &:first-child {
                            font-weight: 500;
                        }
                    }
                }
            }
            &__right {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                .footer-links {
                    display: flex;
                    justify-content: space-around;
                    margin-left: 7%;
                    margin-right: 5.5%;
                    a {
                        margin: 0 31px;
                        font-size: 13px;
                    }
                }
                &:hover {
                    background-color: white;
                    a{
                        color: black;
                    }
                    &+div {
                        background-color:  transparent;
                        a{
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>
