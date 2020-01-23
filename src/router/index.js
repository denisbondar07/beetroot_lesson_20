import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'
import Shop from '../components/Shop.vue'
// import Clothing from '../components/bestseller/Clothing.vue'
import Categories from '../components/Categories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/categories',
    name:'categories',
    component:Categories
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    children: [
      {
        path: '/user/:id',
        name: 'userDetails',
        component: UserDetails,
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router