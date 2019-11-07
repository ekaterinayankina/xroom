<template>
  <div class="layout">
    <header>
      <Header/>
    </header>
    <slot/>
  </div>
</template>

<script>
  import Header from "../components/Header";
  export default {
    components: {Header}
  }
</script>

<style lang="scss">
@font-face {
  font-family: AvenirNext;
  src: url('../assets/fonts/AvenirNextLTPro-Regular.otf') format("opentype");
  font-weight: normal;
}
@font-face {
  font-family: AvenirNext;
  src: url('../assets/fonts/AvenirNextLTPro-Bold.otf') format("opentype");
  font-weight: bold;
}
body {
  font-family: AvenirNext,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}
</style>
