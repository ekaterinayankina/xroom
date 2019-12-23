<template>
    <div class="create-block">
        <Header color="white"/>
        <div class="block">
            <h1 class="animate-bt">We create</h1>
            <p class="animate-bt">We&nbsp;do&nbsp;not draw a&nbsp;beautiful picture, we&nbsp;offer working solutions.
                We&nbsp;are young professionals making visual identities, digital solutions and associated services for business</p>
            <List v-bind:items="links" class="list"/>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    import List from "../List";
    export default {
        name: "WeCreate",
        components: {List, Header},
        data() {
            return {
                links: [
                    ['IT consulting', 'Prototyping', 'Custom software development'],
                    ['Application Integration', 'Migrating applications and data','Software upgrade'],
                    ['Information Security', 'Virtualization', 'SAP Consulting'],
                    ['Independent testing', 'Maintenance and support', 'Dedicated development centers']
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .create-block {
        padding-top: 30px;
        .block {
            position: relative;
            padding-top: 34px;
            padding-bottom: 130px;
            border-right: 1px solid #404142;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 9%;
                border-right: 1px solid #ececec;
            }
            h1 {
                font-size: 36px;
            }
            p {
                max-width: 75%;
                margin-top: 25px;
                font-size: 27px;
                line-height: 45px;
            }
        }
    }
    @media (max-width: 767px) {
        .create-block .block {
            padding-top: 0;
            h1 {
                font-size: 27px;
            }
            p {
                max-width: 90%;
                font-size: 12px;
                line-height: 30px;
            }
            .list {
                margin-top: 30px;
            }
        }
    }
</style>
