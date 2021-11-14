import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Through from '../layout/through.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    // name: 'About',
		component:Through,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
		children:[
			{
				path: '/',
				name: 'About',
				component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
			}
		]
    
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
