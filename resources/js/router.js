import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage';
import WhatWeOffer from './components/pages/WhatWeOffer';
import AboutUs from './components/pages/AboutUs';
import SpecialFeatures from "./components/pages/SpecialFeatures";
import OurNetwork from "./components/pages/OurNetwork";
import DonationPage from "./components/pages/DonationPage"

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/what-we-offer', component: WhatWeOffer },
        { path: '/about', component: AboutUs },
        { path: '/features', component: SpecialFeatures },
        { path: '/our-network', component: OurNetwork },
        { path: '/donate', component: DonationPage },
    ],
    mode: 'history'
});
