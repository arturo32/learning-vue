import Vue from 'vue';
import App from './App.vue';
import './index.css';



var vueInstance = new Vue({
	el: '#theVueElement',
	render: h => h(App),
})