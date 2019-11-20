<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="project-management">
            <p class="large" data-aos="fade-up">
                We&nbsp;have built the project management process in&nbsp;such a&nbsp;way<br>
                as&nbsp;to&nbsp;maximize the use of&nbsp;available resources, guarantee<br>
                our clients full control and transparency of&nbsp;operations<br>
                and ensure effective management of&nbsp;project risks.
            </p>
            <div class="numbers" data-aos="fade-up">
                <div class="number-block">
                    <p class="number">01</p>
                    <p class="number-description">Composite<br>iterative approach</p>
                </div>
                <div class="separator"/>
                <div class="number-block">
                    <p class="number">02</p>
                    <p class="number-description">Agile-methodology</p>
                </div>
                <div class="separator"/>
                <div class="number-block">
                    <p class="number">03</p>
                    <p class="number-description">Rational<br>Unified Process (RUP)</p>
                </div>
                <div class="separator"/>
                <div class="number-block">
                    <p class="number">04</p>
                    <p class="number-description">Rational<br>Unified Process (RUP)</p>
                </div>
            </div>
            <div class="info">
                <hr size="1" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                <p class="small" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    We&nbsp;started Basov Design Bureau in&nbsp;2008. Our vision from day one was to&nbsp;apply strategic<br>
                    and creative thinking to&nbsp;propel startups to&nbsp;success.
                </p>
            </div>
            <div class="providing">
                <p class="title" data-aos="fade-up">Providing the Process</p>
                <p class="smaller" data-aos="fade-up">Regardless of&nbsp;the chosen management methodology, Itransition invariably provides a&nbsp;high level.</p>
                <p class="small" data-aos="fade-up">
                    We&nbsp;work with companies who are challenging the status quo. This means finding new ways<br>
                    to&nbsp;connect with people through bold ideas and experiences. We&nbsp;believe that brand is&nbsp;not just<br>
                    a&nbsp;competitive advantage&nbsp;&mdash; it&rsquo;s a&nbsp;core driver of&nbsp;business growth.<br>
                </p>
                <div class="columns">
                    <div class="column">
                        <BooksSvg/>
                        <p class="small">
                            We&nbsp;started Basov Design Bureau<br>
                            in&nbsp;2008. Our vision from day one<br>
                            was to&nbsp;apply strategic and creative<br>
                            thinking to&nbsp;propel startups<br>
                            to&nbsp;success.
                        </p>
                    </div>
                    <div class="column">
                        <ArrowsSvg/>
                        <p class="small">
                            We&nbsp;started Basov Design Bureau<br>
                            in&nbsp;2008. Our vision from day one<br>
                            was to&nbsp;apply strategic and creative<br>
                            thinking to&nbsp;propel startups<br>
                            to&nbsp;success.
                        </p>
                    </div>
                    <div class="column">
                        <DialogSvg/>
                        <p class="small">
                            We&nbsp;started Basov Design Bureau<br>
                            in&nbsp;2008. Our vision from day one<br>
                            was to&nbsp;apply strategic and creative<br>
                            thinking to&nbsp;propel startups<br>
                            to&nbsp;success.
                        </p>
                    </div>
                </div>
                <a href="#" class="btn-flip light" data-back="Make a project" data-front="Make a project"></a>
            </div>
        </div>
    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    import ArrowsSvg from "../components/ArrowsSvg";
    import BooksSvg from "../components/BooksSvg";
    import DialogSvg from "../components/DialogSvg";
    export default {
        name: "ProjectManagement",
        components: {DialogSvg, BooksSvg, ArrowsSvg, TopBlock},
        data() {
            return {
                title: 'Project management',
                subtitle: 'Our approach',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project-management {
        padding: 110px 15% 128px;
        .large {
            margin-bottom: 19px;
        }
        .numbers {
            display: flex;
            margin-bottom: 72px;
            justify-content: space-between;
            width: 95.2%;
            .number-block {
                display: flex;
                flex-direction: column;
                .number {
                    margin-top: 15px;
                    margin-bottom: 0;
                    font-size: 53px;
                    font-weight: bold;
                }
                .number-description {
                    margin-top: 0;
                    font-size: 10.5px;
                    white-space: nowrap;
                }
            }
            .separator {
                margin-top: 64px;
                margin-right: 28px;
                margin-left: 28px;
                height: 100%;
                width: inherit;
                border-top: solid 1px #f7f4f4;
            }
        }
        .info {
            margin-bottom: 85px;
            width: 54%;
            hr {
                margin: 22px 0 30px;
                width: 14%;
                border: none;
                color: #404142;
                background-color: #404142;
                height: 1px;
            }
        }
        .providing {
            .title {
                margin-bottom: 21px;
                font-weight: bold;
                font-size: 26.7px;
            }
            .small {
                margin-top: 29px;
            }
            .smaller {
                font-size: 12px;
                font-weight: 500;
            }
            .columns {
                margin-top: 48px;
                margin-bottom: 32px;
                margin-right: 77px;
                display: flex;
                justify-content: space-between;
                .column {
                    display: flex;
                    flex-direction: column;
                    svg {
                        max-width: 48px;
                    }
                    .small {
                        margin-top: 25px;
                    }
                }
            }
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
</style>
