window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Views
import Home from './components/views/home.vue';
import About from './components/views/about.vue';
import Products from './components/views/products.vue';
import Companies from './components/views/companies.vue';

const routes = [
	{ path: '/companies', component: Companies },
	{ path: '/products', component: Products },
  	{ path: '/about', component: About },
    { path: '/', component: Home },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router