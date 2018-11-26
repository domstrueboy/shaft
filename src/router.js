import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
        },
        {
            path: '/services',
            name: 'services',
            component: () => import(/* webpackChunkName: "about" */ './views/Services.vue')
        },
        {
            path: '/:section/:article',
            name: 'article',
            component: () => import(/* webpackChunkName: "about" */ './views/Article.vue')
        }
    ]
})
