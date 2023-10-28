import { createRouter, createWebHistory } from 'vue-router'
import Show from "../views/Show.vue"
import AddUser from "../views/AddUser.vue"
import Apply from "../views/Apply.vue"
import SeeMore from "../views/SeeMore.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'show',
      component: Show
    },
    {
      path: '/Add',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/Apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/See/:id',
      name: 'seeMore',
      component: SeeMore
    }
  ]
})

export default router
