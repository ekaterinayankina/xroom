<template>
    <div class="top-block">
        <Header color="black"/>
        <div class="block content">
            <div class="title">
                <div class="text-wrapper">
                    <h1 class="animate-lr">We&nbsp;take digital experiences to&nbsp;the next&nbsp;level</h1>
                </div>
                <hr class="animate-lr d-2" size="1" color="#ffffff" />
                <p class="animate-lr d-3">
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
    import Header from "../Header";
    export default {
        name: "TopBlock",
        components: {Header, Whale}
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
            padding-right: 6%;
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
                    margin: 22px 0 15px;
                    width: 14%;
                    border: none;
                    color: #404142;
                    background-color: #404142;
                    height: 1px;
                }
                p {
                    font-size: 11.9px;
                    font-weight: 500;
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
            cursor: pointer;
            &__left {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                background-color: white;
                transition: .18s ease-in-out;
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
                        &:hover {
                            font-weight: 500;
                            font-size: 12.7px;
                        }
                    }
                }
            }
            &__right {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                transition: .18s ease-in-out;
                .footer-links {
                    display: flex;
                    justify-content: space-around;
                    margin-left: 7%;
                    margin-right: 5.5%;
                    a {
                        margin: 0 31px;
                        font-size: 13px;
                        &:hover {
                            font-weight: 500;
                            font-size: 12.7px;
                        }
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
    @media (max-width: 1370px) {
        .top-block {
            .footer__left, .footer__right {
                .footer-links {
                    margin-left: 0;
                    margin-right: 0;
                    a {
                        font-size: 10px;
                        &:hover {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 62.5em) {
        .top-block {
            .content {
                flex-direction: column-reverse;
                .title {
                    h1 {
                        font-size: 27px;
                    }
                }
                .whale {
                    svg {
                        width: 100%;
                        height: auto;
                    }
                }
            }
            .footer__left, .footer__right {
                .footer-links {
                    margin-left: 0;
                    margin-right: 0;
                    a {
                        margin-right: 16px;
                        margin-left: 0;
                    }
                }
            }
        }
    }
    @media (max-width: 767px) {
        .top-block {
            .content {
                &:before {
                    content: none;
                }
                .title {
                    width: 100%;
                }
                .whale {
                    height: 250px;
                }
            }
            .footer {
                flex-direction: column;
                .footer__left, .footer__right {
                    width: 100%;
                    margin-left: 15%;
                    margin-right: 6.5%;
                    justify-content: flex-start;
                }
                .footer__left {
                    margin-top: 45px;
                    .footer-links {
                        margin-right: 15px;
                        flex-direction: column;
                        a {
                            &:first-child {
                                width: 50%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
