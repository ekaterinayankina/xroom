// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/sass/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
//import VueScrollReveal from 'gridsome-scroll-reveal'
import '@fortawesome/fontawesome-svg-core/styles.css'
//import VueScrollTo from 'vue-scrollto'
import 'animate.css'
import Vue from 'vue'
import { debounce } from "debounce";

config.autoAddCss = false;
library.add(faGithub, faTwitter);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
 // Vue.use(VueScrollReveal);
  //Vue.use(VueScrollTo);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
  })

}

