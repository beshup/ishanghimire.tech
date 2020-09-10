import Vue from 'vue'
import App from './App.vue'
import Carousel3d from 'vue-carousel-3d'
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faFileAlt, faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/aos/dist/aos.css'

import VueMobileDetection from "vue-mobile-detection";

library.add(faGlobe, faGithub, faYoutube, faFileAlt, faEnvelope, faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", function() { 
  window.scrollTo(0, 0);
});

Vue.use(VueMobileDetection);
Vue.use(Carousel3d)

new Vue({
  render: h => h(App),
}).$mount('#app')
