<template>
    <div class="list">
        <div class="list-items" v-for="item in items" v-bind:key="item.id">
            <g-link class="item__link" to="/" v-for="link in item" v-bind:key="link.id">
                <p>{{ link }}</p>
            </g-link>
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
