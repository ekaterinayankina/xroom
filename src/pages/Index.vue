<template>
  <Layout>
    <div class="block black">
      <TopBlock/>
    </div>
  </Layout>
</template>

<script>
import TopBlock from "../components/Home/TopBlock";
export default {
  components: {TopBlock},
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
  .block {
    padding-left: 15%;
    padding-right: 6.5%;
    position: relative;
  }
.black {
  background-color: #171717;
  color:white;
}
.footer-links a {
  margin-right: 1rem;
}
</style>
