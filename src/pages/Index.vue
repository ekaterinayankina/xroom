<template>
  <Layout>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <div class="fp-bg"></div>
        <div class="black relative">
          <TopBlock/>
        </div>
        <div class="second-block white">
          <TellStudyOffer/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <div class="white">
          <WeCreate/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <div class="black">
          <Solution/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <div class="white">
          <Technologies/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <div class="black">
          <Portfolio/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <div class="black">
          <Clients/>
        </div>
      </div>
      <div class="section">
        <div class="fp-bg"></div>
        <Footer/>
      </div>
    </full-page>
  </Layout>
</template>

<script>
import TopBlock from "../components/Home/TopBlock";
import TellStudyOffer from "../components/Home/Tell-Study-Offer";
import WeCreate from "../components/Home/WeCreate";
import Solution from "../components/Home/Solution";
import Technologies from "../components/Home/Technologies";
import Portfolio from "../components/Home/Portfolio";
import Clients from "../components/Home/Clients";
import Footer from "../components/Footer";
export default {
  components: {Footer, Clients, Portfolio, Technologies, Solution, WeCreate, TellStudyOffer, TopBlock},
  metaInfo: {
    //title: 'Hello, world!'
  },
  data() {
    return {
      options: {
        licenseKey:'',
        anchors: ['','we-create', 'solution', 'technologies', 'portfolio', 'clients','contact'],
        fitToSection: false,
        bigSectionsDestination: 'top',
        touchSensitivity: 22,
        scrollOverflow: true,
        parallax: true,
        parallaxOptions: {type: 'cover', percentage: 100, property: 'translate'},
      }
    }
  }
}
</script>

<style>
  .black {
    background-color: #171717;
    color:white;
  }
  .relative {
    position: relative;
  }
  .second-block {
    padding-left: 15%;
    padding-right: 6.5%;
    border-bottom: 1px solid #ececec;
  }
  .footer-links a {
     margin-right: 1rem;
   }
</style>
