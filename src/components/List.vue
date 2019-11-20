<template>
    <div class="list">
        <div class="list-items">
            <g-link class="item__link" to="/"><p>IT consulting</p></g-link>
            <g-link class="item__link" to="/"><p>Prototyping</p></g-link>
            <g-link class="item__link" to="/"><p>Custom software development</p></g-link>
        </div>
        <div class="list-items">
            <g-link class="item__link" to="/"><p>Application Integration</p></g-link>
            <g-link class="item__link" to="/"><p>Migrating applications and data</p></g-link>
            <g-link class="item__link" to="/"><p>Software upgrade</p></g-link>
        </div>
        <div class="list-items">
            <g-link class="item__link" to="/"><p>Information Security</p></g-link>
            <g-link class="item__link" to="/"><p>Virtualization</p></g-link>
            <g-link class="item__link" to="/"><p>SAP Consulting</p></g-link>
        </div>
        <div class="list-items">
            <g-link class="item__link" to="/"><p>Independent testing</p></g-link>
            <g-link class="item__link" to="/"><p>Maintenance and support</p></g-link>
            <g-link class="item__link" to="/"><p>Dedicated development centers</p></g-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            items: {
                type: [Array],
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 62px;
        max-width: 73%;
        .list-items {
            display: flex;
            flex-direction: column;
        }
        .item__link {
            p {
                position: relative;
                margin-top: 0;
                margin-bottom: 0;
                width: max-content;
                font-size: 12px;
                font-weight: 500;
                color: black;
                line-height: 36px;
                white-space: nowrap;
                &:after {
                    position: absolute;
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 82%;
                    opacity: 0;
                    transition: all .2s ease-in-out;
                }
                &:hover {
                    &:after {
                        opacity: 1;
                        border-bottom: solid 1px black;
                    }
                }
            }

        }
    }
</style>
