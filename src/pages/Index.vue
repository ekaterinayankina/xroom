<template>
  <Layout>
    <div class="black relative">
      <TopBlock/>
    </div>
    <a href="#" v-scroll-to="'#we-create'">Scroll to #we-create</a>
    <div class="second-block white" v-scroll-to="'#we-create'">
      <TellStudyOffer/>
    </div>
    <div id="we-create" class="white" v-scroll-reveal="{ distance: '400px', duration: 600,  scale: 0.85 }">
      <WeCreate/>
    </div>
    <div id="solution" class="black" v-scroll-reveal="{ distance: '400px', duration: 600,  scale: 0.85 }">
      <Solution/>
    </div>
    <div id="technologies" class="white" v-scroll-reveal="{ distance: '400px', duration: 600,  scale: 0.85 }">
      <Technologies/>
    </div>
    <div id="portfolio" class="black" v-scroll-reveal="{ distance: '400px', duration: 600,  scale: 0.85 }">
      <Portfolio/>
    </div>
    <div id="clients" class="black" v-scroll-reveal="{ distance: '400px', duration: 600,  scale: 0.85 }">
      <Clients/>
    </div>
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
export default {
  components: {Clients, Portfolio, Technologies, Solution, WeCreate, TellStudyOffer, TopBlock},
  metaInfo: {
    //title: 'Hello, world!'
  },
  methods: {
  }}
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
