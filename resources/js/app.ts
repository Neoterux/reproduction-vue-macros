import App from 'App.vue';
import './bootstrap';
import Vue from 'vue'


const app = new Vue({
    render: (h) => h(App)
})


app.$mount('#app')
