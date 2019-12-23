<template>
  <div class="layout">
    <header v-if="!isHomePage()">
      <Header color="black"/>
    </header>
      <transition name="fade" appear>
          <main> <!-- a wrapper for slot is needed -->
            <slot/>
          </main>
      </transition>
   <footer v-if="!isHomePage()">
     <Footer/>
   </footer>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  export default {
    components: {Footer, Header},
      methods: {
          isHomePage: function() {
              if(this.$route.path == "/" || this.$route.path == "/home" ) {
                  return true
              } else {
                  return false
              }
          }
      },
      computed: {
        isClient:  function () {
            return typeof window !== 'undefined'
        }
      },
      created () {
          if (this.isClient) {
            AOS.init({
                duration: 1000,
                once: true
            });
        }
      }
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
@font-face {
    font-family: AvenirNext;
    src: url('../assets/fonts/AvenirNextLTPro-Demi.otf') format("opentype");
    font-weight: 500;
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
