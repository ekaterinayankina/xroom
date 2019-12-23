<template>
    <Layout>
        <div class="section" v-bind:class="{active: activeSection==0}"
             v-bind:style="{backgroundColor: sectionsColor[0], minHeight: screenHeight + 'px'}" ref="top" id="top">
            <div class="black relative">
                <TopBlock/>
            </div>
            <div class="second-block white">
                <TellStudyOffer/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==1}"
             v-bind:style="{backgroundColor: sectionsColor[1], minHeight: screenHeight + 'px'}" id="we-create"
             ref="we-create">
            <div class="white">
                <WeCreate/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==2}"
             v-bind:style="{backgroundColor: sectionsColor[2], minHeight: screenHeight + 'px'}" id="solution"
             ref="solution">
            <div class="black">
                <Solution/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==3}"
             v-bind:style="{backgroundColor: sectionsColor[3], minHeight: screenHeight + 'px'}" id="technologies"
             ref="technologies">
            <div class="white">
                <Technologies/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==4}"
             v-bind:style="{backgroundColor: sectionsColor[4], minHeight: screenHeight + 'px'}" id="portfolio"
             ref="portfolio">
            <div class="black">
                <Portfolio/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==5}"
             v-bind:style="{backgroundColor: sectionsColor[5], minHeight: screenHeight + 'px'}" id="clients"
             ref="clients">
            <div class="black">
                <Clients/>
            </div>
        </div>
        <div class="section" v-bind:class="{active: activeSection==6}"
             v-bind:style="{backgroundColor: sectionsColor[6], minHeight: screenHeight + 'px'}" ref="contact">
            <Footer/>
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
    import Footer from "../components/Footer";

    export default {
        components: {Footer, Clients, Portfolio, Technologies, Solution, WeCreate, TellStudyOffer, TopBlock},
        metaInfo: {
            //title: 'Hello, world!'
        },
        data() {
            return {
                anchors: ['top', 'we-create', 'solution', 'technologies', 'portfolio', 'clients', 'contact'],
                sectionsColor: ['#ffffff', '#ffffff', '#171717', '#ffffff', '#171717', '#171717', '#ffffff'],
                scrollOptions: {
                    easing: 'ease-in-out',
                    cancelable: true,
                    force: false
                },
                activeSection: 0,
                activeColor: 'red',
            }
        },
        methods: {
            handleScroll(event) {
                //текущая позиция скрола в окне
                let userPosY = window.scrollY;
                //текущая позиция скрола на странице
                let userPosYBottom = userPosY + document.documentElement.clientHeight;
                //номер секции, до которой доскролил юзер
                let closestSection = this.binarySearch(userPosYBottom, this.sectionsBottomCoords);
                //переключиться на следующую секцию
                let VueScrollTo = require('vue-scrollto');
                let cancelScrollDown = VueScrollTo.scrollTo('#' + this.anchors[closestSection], 1000, this.scrollOptions);
            },
            binarySearch(t,A) {       // t - искомый элемент, A - упорядоченный массив, в котором ищем.
                let i = 0, j = A.length, k;
                while (i < j)
                {  k = Math.floor((i+j)/2);
                    if (t <= A[k]) j = k;
                    else i = k+1;
                }
                if (A[ i-1 ] <= t && A[ i ] >= t) return i;     // На выходе индекс искомого элемента.
                else return -1;                                 // Если искомого элемента нет в массиве, то -1.
            }
        },
        computed: {
            isClient: function () {
                return typeof window !== 'undefined'
            },
            screenHeight: function () {
                return this.isClient ? document.documentElement.clientHeight : 0
            },
            sectionsBottomCoords: function () {
                let array = [];
                this.anchors.forEach((item, i) => {
                    let currentSection = this.anchors[i];
                    let sectionTopY = this.$refs[currentSection].offsetTop;
                    let sectionBottom = sectionTopY + this.$refs[currentSection].clientHeight;
                    array.push(sectionBottom);
                });
                return array;
            },
        },
        created() {
            if (!this.isClient) return;
            let debounce = require('debounce');
            window.addEventListener('scroll', debounce(this.handleScroll), 1000);
        },
        destroyed() {
            if (!this.isClient) return;
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style>
    .black {
        background-color: #171717;
        color: white;
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

    .section.active {
        /*animation: 1s ease;*/
        /*animation-name: bottom-to-top;*/
        /*animation-delay: .9s;*/
    }
</style>
