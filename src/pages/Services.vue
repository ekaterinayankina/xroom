<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="services">
            <p class="large">
                Supplier of&nbsp;a&nbsp;full cycle of&nbsp;services for the development,<br>
                modernization, implementation and maintenance of&nbsp;software<br>
                on&nbsp;the market of&nbsp;the CIS countries, since 1998.
            </p>
            <div class="section">
                <p class="title" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">For Web</p>
                <hr size="1" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                <div class="directions" data-aos="fade-up">
                    <div class="direction">
                        <p class="large">IT&nbsp;consulting</p>
                        <p class="small">
                            Itransition ensures efficient use of&nbsp;resources, management of&nbsp;project<br>
                            risks and fulltransparency of&nbsp;the project.
                        </p>
                    </div>
                    <div class="direction">
                        <p class="large">Dedicated development centers</p>
                        <p class="small">
                            Quality control of&nbsp;software is&nbsp;an&nbsp;integral part of&nbsp;the process<br>
                            of&nbsp;developing and implementing software solutions.
                        </p>
                    </div>
                    <div class="direction">
                        <p class="large">Prototyping</p>
                        <p class="small">
                            Individual approach to&nbsp;choosing the interaction model allows our<br>
                            clients to&nbsp;optimize the project budget.
                        </p>
                    </div>
                </div>
            </div>
            <div class="section">
                <p class="title" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Consulting</p>
                <hr size="1" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                <div class="directions" data-aos="fade-up">
                    <div class="direction">
                        <p class="large">Custom software development</p>
                        <p class="small">
                            Itransition ensures efficient use of&nbsp;resources, management of&nbsp;project<br>
                            risks and fulltransparency of&nbsp;the project.
                        </p>
                    </div>
                    <div class="direction">
                        <p class="large">Application Integration</p>
                        <p class="small">Quality control of&nbsp;software is&nbsp;an&nbsp;integral part of&nbsp;the process<br>
                            of&nbsp;developing and implementing software solutions.</p>
                    </div>
                    <div class="direction">
                        <p class="large">Independent testing</p>
                        <p class="small">
                            Individual approach to&nbsp;choosing the interaction model allows our<br>
                            clients to&nbsp;optimize the project budget.
                        </p>
                    </div>
                    <div class="direction">
                        <p class="large">Information Security</p>
                        <p class="small">
                            Technological expertise Itransition includes both platforms<br>
                            and products of&nbsp;the world&rsquo;s leading software vendors and open<br>
                            source technologies.
                        </p>
                    </div>
                    <div class="direction">
                        <p class="large">Virtualization</p>
                        <p class="small">
                            Technological expertise Itransition includes both platforms<br>
                            and products of&nbsp;the world&rsquo;s leading software vendors and open<br>
                            source technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div class="section">
                <p class="title" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Development</p>
                <hr size="1" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                <div class="directions" data-aos="fade-up">
                    <div class="direction">
                        <p class="large">Custom software development</p>
                        <p class="small">
                            Itransition ensures efficient use of&nbsp;resources, management of&nbsp;project<br>
                            risks and fulltransparency of&nbsp;the project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    export default {
        name: "Services",
        components: {TopBlock},
        data() {
            return {
                title: 'Services',
                subtitle: 'About services',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .services {
        padding: 110px 15% 104px 15%;
        p.large {
            margin-bottom: 84px;
        }
        .section {
            .title {
                margin-bottom: 35px;
            }
            hr {
                border: none;
                color: #404142;
                background-color: #404142;
                height: 3px;
            }
            .directions {
                margin-top: 62px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .direction {
                    margin-bottom: 63px;
                    min-width: 43%;
                    .large {
                        margin-top: 0;
                        margin-bottom: 0;
                        font-size: 28px;
                        letter-spacing: -0.5px;
                    }
                    .small {
                        margin-top: 16px;
                    }
                }
            }
        }
    }
</style>
