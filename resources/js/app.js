require('./bootstrap');
window.Vue = require('vue');

//https://medium.com/@weehong/laravel-5-7-vue-vue-router-spa-5e07fd591981


import router from './router.js';   

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('router-outlet', require('./components/RouterTemplate.vue').default);



const app = new Vue({
    el: '#vue-app',
    router: router
});
