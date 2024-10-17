// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

// views
import Home from '@/components/views/Home.vue' // Import your components

// forms
import GetHelpForm from '@/components/forms/GetHelpForm.vue' // Import the Get Help component
// import Volunteer from '@/components/Volunteer.vue' // Import the Volunteer component
// Import other components as needed

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { breadcrumb: 'Home' }
  },
  {
    path: '/get-help',
    name: 'GetHelp',
    component: GetHelpForm,
    meta: { breadcrumb: 'Get Help Form' }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
  // {
  //   path: '/volunteer',
  //   name: 'Volunteer',
  //   component: Volunteer
  // }
  // Add more routes here
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page
    return { top: 0 };
  }
})

export default router
