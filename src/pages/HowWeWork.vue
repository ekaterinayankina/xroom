<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="how-we-work">
            <p class="title" data-aos="fade-up">Processes</p>
            <p class="large" data-aos="fade-up" data-aos-delay="500">Our tight-knit crew is&nbsp;at&nbsp;the core of&nbsp;our<br>
                collaborative approach: on&nbsp;our team, no&nbsp;one<br>
                sits out an&nbsp;inning.</p>
            <g-link class="step" to="/project-management" data-aos="fade-up">
                <div class="step-img">
                    <RocketSvg/>
                </div>
                <div class="step-text">
                    <p class="large step-title">Project management</p>
                    <p class="small step-description">Itransition ensures efficient use of&nbsp;resources, management of&nbsp;project risks and full<br>
                        transparency of&nbsp;the project.</p>
                </div>
            </g-link>
            <div class="step" data-aos="fade-up">
                <div class="step-img">
                    <ModelsSvg/>
                </div>
                <div class="step-text">
                    <p class="large step-title">Models of&nbsp;cooperation</p>
                    <p class="small step-description">Individual approach to&nbsp;choosing the interaction model allows our clients to&nbsp;optimize<br>
                        the project budget.
                    </p>
                </div>
            </div>
            <div class="step" data-aos="fade-up">
                <div class="step-img">
                    <QualitySvg/>
                </div>
                <div class="step-text">
                    <p class="large step-title">Quality assurance</p>
                    <p class="small step-description">Quality control of&nbsp;software is&nbsp;an&nbsp;integral part of&nbsp;the process of&nbsp;developing and implementing<br>
                        software solutions.</p>
                </div>
            </div>
            <div class="step" data-aos="fade-up">
                <div class="step-img">
                    <TechnologiesSvg/>
                </div>
                <div class="step-text">
                    <p class="large step-title">Technologies</p>
                    <p class="small step-description">Technological expertise Itransition includes both platforms and products of&nbsp;the world&rsquo;s leading<br>
                        software vendors and open source technologies.</p>
                </div>
            </div>
            <a href="#" class="btn-flip light" data-back="Make a project" data-front="Make a project" data-aos="fade-up"></a>
        </div>

    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    import RocketSvg from "../components/RocketSvg";
    import ModelsSvg from "../components/ModelsSvg";
    import QualitySvg from "../components/QualitySvg";
    import TechnologiesSvg from "../components/TechnologiesSvg";
    export default {
        name: "HowWeWork",
        components: {TechnologiesSvg, QualitySvg, ModelsSvg, RocketSvg, TopBlock},
        data() {
            return {
                title: 'How We Work',
                subtitle: 'Сompany and Сustomers',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .how-we-work {
        padding: 110px 15% 128px;
        .large {
            margin-bottom: 54px;
        }
        .btn-flip {
            margin-top: 20px;
            width: 150px;
            &:before{
                background-color: white;
                border: 1px solid #ececec;
            }
        }
    }
    .step {
        display: flex;
        margin-bottom: 38px;
        cursor: pointer;
        color: black;
        .step-text {
            display: flex;
            flex-direction: column;
            margin-left: 36px;
            .step-title {
                margin-bottom: 4px;
                transition: all ease-in-out 0.1s;
            }
        }
        &:hover {
            .step-title {
                text-decoration: underline;
                &:after {
                    content: '';
                    text-decoration: none;
                }
            }
        }
    }
    .step-img {
        display: flex;
        width: 66px;
        svg {
            align-self: center;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
