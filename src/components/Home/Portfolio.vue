<template>
    <div class="portfolio">
        <div class="content">
            <div class="project">
                <h2 class="title">Homepage</h2>
                <g-image class="first-project-img" alt="" src="~/assets/img/projects/project1.png" width="720px"/>
                <div class="footer black">
                    <p class="project-name">Bike Board Shop</p>
                    <button>View</button>
                </div>
            </div>
            <div class="project">
                <h2 class="title"></h2>
                <g-image alt="" src="~/assets/img/projects/project2.png" width="720px"/>
                <div class="footer white">
                    <p class="project-name">Kitty Nail Store</p>
                    <button>View</button>
                </div>
            </div>
            <div class="project">
                <h2 class="title"></h2>
                <g-image alt=""src="~/assets/img/projects/project3.png" width="720px"/>
                <div class="footer white">
                    <p class="project-name">Vitamin-Z Dome system</p>
                    <button>View</button>
                </div>
            </div>
            <div class="projects-union project">
                <div class="project">
                    <h2 class="title"></h2>
                    <g-image alt="" src="~/assets/img/projects/project4.png" width="720px"/>
                    <div class="footer black">
                        <p class="project-name">E-commerce Store</p>
                        <button>View</button>
                    </div>
                </div>
                <div class="project">
                    <h2 class="title"></h2>
                    <g-image alt="" src="~/assets/img/projects/project5.png" width="720px"/>
                    <div class="footer white">
                        <p class="project-name">TV chanal</p>
                        <button>View</button>
                    </div>
                </div>
            </div>
            <div class="project">
                <h2 class="title"></h2>
                <g-image alt=""src="~/assets/img/projects/project6.png" width="720px"/>
                <div class="footer white">
                    <p class="project-name">SCG printing</p>
                    <button>View</button>
                </div>
            </div>
            <div class="project">
                <h2 class="title"></h2>
                <g-image alt="" src="~/assets/img/projects/project7.png" width="720px"/>
                <div class="footer black">
                    <p class="project-name">Yokohama tires APP</p>
                    <button>View</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "Portfolio",
        components: {Header}
    }
</script>

<style lang="scss" scoped>
    .portfolio {
        overflow: scroll;
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top: 8px;
            padding-right: 5px;
            padding-bottom: 8px;
            background-color: black;
            .project {
                position: relative;
                margin-top: 5px;
                width: 49.8%;
                max-height: 710px;
                overflow: hidden;
                &:hover:not(.projects-union) {
                    img {
                        transform: scale(1.1);
                        opacity: 0.9;
                    }
                    .footer {
                        opacity: 1;
                        bottom: 0;
                    }
                }
                .title {
                    position: absolute;
                    z-index: 1;
                    top: 84px;
                    left: 117px;
                    text-transform: uppercase;
                    font-size: 16px;
                    letter-spacing: 0.4px;
                    font-weight: 600;
                    transition: all ease-in-out .5s;
                }
                .first-project-img {
                    position: absolute;
                    z-index: 0;
                    width: 715px;
                    left: 3px;
                    transition: all ease-in-out .5s;
                }
                img {
                    transition: all ease-in-out .5s;
                }
                .footer {
                    position: absolute;
                    z-index: 1;
                    bottom: -50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 73px;
                    width: 100%;
                    opacity: 0;
                    transition: all ease-in-out .5s;
                    &.white {
                        background-color: rgba(255, 255, 255, 0.15);
                    }
                    &.black {
                        background-color: rgba(23, 23, 23, 0.3);
                    }
                    .project-name {
                        margin-left: 48px;
                        font-size: 13px;
                        letter-spacing: 0.3px;
                    }
                    button {
                        margin-right: 43px;
                        text-transform: uppercase;
                        letter-spacing: 1.1px;
                        font-size: 8px;
                        padding: 12px 38px;
                        border: 1px solid rgba(255, 255, 255, 0.3);
                    }
                }
            }
            .projects-union {
                display: flex;
                flex-direction: column;
                .project {
                    width: 100%;
                    height: 50%;
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
</style>
