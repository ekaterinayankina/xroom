<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="dedicated-development-centers">
            <div class="article">
                <p class="title">
                    Reliability And Result
                </p>
                <p class="large">
                    Dedicated development center is&nbsp;a&nbsp;model of&nbsp;cooperation<br>
                    that allows the customer to&nbsp;get at&nbsp;his disposal a&nbsp;team<br>
                    of&nbsp;specialists selected according to&nbsp;the individual needs<br>
                    and objectives of&nbsp;the project, as&nbsp;well as&nbsp;preferred methods<br>
                    of&nbsp;project management. Since 1998, we&nbsp;have been<br>
                    building teams of&nbsp;experienced developers for the<br>
                    implementation of&nbsp;both remote and managed projects<br>
                    within the customer organization of&nbsp;various technical<br>
                    and industry areas.
                </p>
                <p class="smaller">
                    You have at&nbsp;your disposal a&nbsp;carefully selected team of&nbsp;technical experts, programmers, system architects, QA-engineers<br>
                    and business analysts, whose experience and knowledge will help you achieve your business goals. We&nbsp;offer our clients<br>
                    a&nbsp;time-tested, individually adaptable cooperation strategy, as&nbsp;well as&nbsp;the opportunity to&nbsp;interview<br>
                    pre-selected specialists.
                </p>
                <hr size="1" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
            </div>
            <div class="advantages-block">
                <div class="advantage">
                    <DiamondSvg/>
                    <p class="title">Exclusivity</p>
                    <p class="description">
                        Itransition ensures efficient use of&nbsp;resources, management of&nbsp;project<br>
                        risks and fulltransparency of&nbsp;the project.
                    </p>
                </div>
                <div class="advantage">
                    <FlexibilitySvg/>
                    <p class="title">Flexibility and scalability</p>
                    <p class="description">
                        Quality control of&nbsp;software is&nbsp;an&nbsp;integral part of&nbsp;the process<br>
                        of&nbsp;developing and implementing software solutions.
                    </p>
                </div>
                <div class="advantage">
                    <ControlSvg/>
                    <p class="title">Full control</p>
                    <p class="description">
                        Individual approach to&nbsp;choosing the interaction model allows our<br>
                        clients to&nbsp;optimize the project budget.
                    </p>
                </div>
                <div class="advantage">
                    <ProcessesSvg/>
                    <p class="title">Mature processes</p>
                    <p class="description">
                        Technological expertise Itransition includes both platforms<br>
                        and products of&nbsp;the world&rsquo;s leading software vendors and open<br>
                        source technologies.
                    </p>
                </div>
                <div class="advantage">
                    <TargetSvg/>
                    <p class="title">Starting a&nbsp;business</p>
                    <p class="description">
                        Technological expertise Itransition includes both platforms<br>
                        and products of&nbsp;the world&rsquo;s leading software vendors and open<br>
                        source technologies.
                    </p>
                </div>
            </div>
            <div class="example-project">
                <g-image alt="" src="~/assets/img/camera.jpg"/>
                <p class="title">Automated E-shop</p>
                <div class="button-wrapper">
                    <button>
                        Find a solution with us
                    </button>
                </div>
            </div>
            <TellStudyOffer/>
        </div>
    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    import DiamondSvg from "../components/DiamondSvg";
    import FlexibilitySvg from "../components/FlexibilitySvg";
    import ControlSvg from "../components/ControlSvg";
    import ProcessesSvg from "../components/ProcessesSvg";
    import TargetSvg from "../components/TargetSvg";
    import TellStudyOffer from "../components/Home/Tell-Study-Offer";
    export default {
        name: "DedicatedDevelopmentCenters",
        components: {TellStudyOffer, TargetSvg, ProcessesSvg, ControlSvg, FlexibilitySvg, DiamondSvg, TopBlock},
        data() {
            return {
                title: 'Dedicated development centers',
                subtitle: 'Service',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .dedicated-development-centers {
        padding: 110px 15% 59px 15%;
        p.large {
            margin-bottom: 92px;
        }
        p.smaller {
            margin-bottom: 48px;
        }
        hr {
            margin: 22px 0 15px;
            width: 21.4%;
            border: none;
            color: #404142;
            background-color: #404142;
            height: 3px;
        }
        .article {
            margin-bottom: 93px;
        }
        .advantages-block {
            margin-bottom: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .advantage {
                margin-bottom: 30px;
                width: 43%;
                svg {
                    max-width: 43px;
                }
                p.title {
                    margin: 5px 0;
                    font-weight: 100;
                    font-size: 22px;
                    letter-spacing: 0.2px;
                }
                p.description {
                    margin-top: 22px;
                    font-size: 13.5px;
                    line-height: 1.8;
                }
            }
        }
        .example-project {
            position: relative;
            overflow: hidden;
            margin-bottom: 8px;
            .title {
                position: absolute;
                top: 20%;
                right: 0;
                left: 0;
                margin: auto;
                width: 70%;
                color: white;
                font-size: 27px;
                font-weight: normal;
                text-align: center;
                opacity: 0;
                transition: all ease-in-out .5s;
            }
            img {
                width: 100%;
                transition: all ease-in-out .5s;
            }
            .button-wrapper {
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                width: 70%;
                height: 72px;
                text-align: center;
                opacity: 0;
                transition: all ease-in-out .5s;
                button {
                    width: 100%;
                    height: 100%;
                    font-size: 15px;
                    text-transform: uppercase;
                    font-weight: 100;
                    border: solid 1px white;
                    transition: all ease-in-out .5s;
                    &:hover {
                        transform: scale(1.05);
                        background-color: rgba(0, 0, 0, 0.2);;
                    }
                }
            }
            &:hover {
                img {
                    transform: scale(1.1);
                    opacity: 0.9;
                }
                .title {
                    top: 37%;
                    opacity: 1;
                }
                .button-wrapper {
                    opacity: 1;
                    bottom: 77px;
                }
            }
        }
    }
</style>
