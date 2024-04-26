import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import DetailView from '../views/DetailView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import CheckoutView from '../views/CheckoutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'foods',
    component: FoodsView
  },
    
  {
    path: '/foods/:id',
    name: 'DetailView',
    component: DetailView
  },

  {
    path: '/keranjang',
    name: 'KeranjangView',
    component: KeranjangView
  },

  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
