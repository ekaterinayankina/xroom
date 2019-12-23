<template>
        <Layout>
                <TopBlock v-bind:title=title v-bind:subtitle=subtitle />
                <Process/>
        </Layout>

</template>

<script>
    import TopBlock from "../components/TopBlock";
    import Process from "../components/Process";
    export default {
        name: "404",
            components: {Process, TopBlock},
            data() {
                return {
                    title: '404 - Not Found',
                    subtitle: 'Not Found',
                }
        }
    }
</script>

<style scoped>

</style>
