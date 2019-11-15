<template>
  <div class="layout">
    <header>
      <Header color="black"/>
    </header>
      <transition name="fade" appear>
          <main> <!-- a wrapper for slot is needed -->
            <slot/>
          </main>
      </transition>
   <footer>
     <Footer/>
   </footer>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, Header}
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
  display: flex;
  flex-direction: column;
}
header {
  background-color: #171717;
}
.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}
</style>
