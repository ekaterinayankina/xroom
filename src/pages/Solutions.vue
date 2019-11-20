<template>
    <Layout>
        <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
        <div class="solutions">
            <p class="large">
                We&nbsp;started Basov Design Bureau in&nbsp;2008. Our vision<br>
                from day one was to&nbsp;apply strategic and creative thinking<br>
                to&nbsp;propel startups to&nbsp;success.
            </p>
            <div class="examples">
                <div class="example">
                    <p>Mobile <br> solutions</p>
                    <g-image alt="Mobile solutions" src="~/assets/img/mobile.png" width="340"  />
                </div>
                <div class="example">
                    <p>UI/UX <br> solutions</p>
                    <g-image alt="UI/UX solutions" src="~/assets/img/ux.png" width="340" />
                </div>
                <div class="example">
                    <p>UI/UX <br> solutions</p>
                    <g-image alt="UI/UX solutions" src="~/assets/img/phone.png" width="340" />
                </div>
                <div class="example">
                    <p>Analytical <br> solution</p>
                    <g-image alt="Analytical solution" src="~/assets/img/analytical.png" width="340" />
                </div>
                <div class="example">
                    <p>E-commerce <br> solutions</p>
                    <g-image alt="E-commerce solutions" src="~/assets/img/e-commerce.png" width="340"  />
                </div>
                <div class="example">
                    <p>UI/UX <br> solutions</p>
                    <g-image alt="UI/UX solutions" src="~/assets/img/tablet.png" width="340" />
                </div>
            </div>
            <p class="title">Other Solutions</p>
            <List v-bind:items="links" class="list"/>
        </div>
    </Layout>
</template>

<script>
    import TopBlock from "../components/TopBlock";
    import List from "../components/List";
    export default {
        name: "Solutions",
        components: {List, TopBlock},
        data() {
            return {
                title: 'Solutions',
                subtitle: 'For business',
                links: [
                    ['IT consulting', 'Prototyping', 'Custom software development','Virtualization','SAP Consulting','Software upgrade'],
                    ['Application Integration', 'Migrating applications and data','Software upgrade','Maintenance and support','Dedicated development centers','Prototyping'],
                    ['Information Security', 'Virtualization', 'SAP Consulting','Migrating applications and data','Software upgrade','SAP Consulting'],
                    ['Independent testing', 'Maintenance and support', 'Dedicated development centers','Software upgrade','Custom software development']
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .solutions {
        padding: 110px 13% 104px 15%;
        .examples {
            display: flex;
            flex-wrap: wrap;
            padding-top: 46px;
            padding-bottom: 94px;
            .example {
                position: relative;
                width: 345px;
                height: 251px;
                background-color: unset;
                color: white;
                p {
                    position: absolute;
                    bottom: 8px;
                    left: 28px;
                    font-size: 12px;
                    line-height: 15px;
                }
            }
        }
        .title {
            font-weight: bold;
            font-size: 26.3px;
            letter-spacing: 0.5px;
        }
        .list {
            margin-top: 28px;
            max-width: unset;
        }
    }
</style>
