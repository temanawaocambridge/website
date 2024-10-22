// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

// views
import Home from '@/components/views/Home.vue'

// forms
import GetHelpForm from '@/components/forms/GetHelpForm.vue'
import ContactForm from '@/components/forms/ContactForm.vue'

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
    path: '/help',
    name: 'GetHelp',
    component: GetHelpForm,
    meta: { breadcrumb: 'Get Help Form' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm,
    meta: { breadcrumb: 'Contact Us Form' }
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
