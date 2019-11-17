<template>
    <div class="top-block">
        <div class="block content">
            <div class="title">
                <h1>{{ title }}</h1>
                <hr size="1"/>
                <p>{{ subtitle }}</p>
            </div>
        </div>
        <div class="footer">
            <p class="footer-links">
                <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">facebook</a>
                <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">instagram</a>
                <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Behance</a>
                <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">vk</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBlock",
        props: {
            title: {
                type: [String],
                required: true
            },
            subtitle: {
                type: [String],
                required: true
            }
        }
    }
</script>


<style lang="scss" scoped>
    .top-block {
        display: flex;
        flex-direction: column;
        background-color: #171717;
        color: white;
        .content {
            display: flex;
            align-items: center;
            padding-top: 6.5%;
            padding-bottom: 29px;
            padding-right: 6%;
            position: relative;
            .title {
                display: flex;
                flex-direction: column;
                width: 45%;
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
        }
        .footer {
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
            height: 72px;
            align-items: center;
            cursor: pointer;
            .footer-links {
                display: flex;
                justify-content: space-around;
                margin-left: 7%;
                margin-right: 3.4%;
                a {
                    margin: 0 24px;
                    font-size: 13px;
                    font-weight: 500;
                }
            }
        }
    }
</style>

