// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

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
    component: Home
  },
  {
    path: '/get-help',
    name: 'GetHelp',
    component: GetHelpForm
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
  history: createWebHistory(),
  routes
})

export default router
