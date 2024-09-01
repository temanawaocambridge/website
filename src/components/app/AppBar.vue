<template>
  <v-app-bar elevation="0">
    <!-- Logo and title -->
    <template #title>
      <div
        class="d-inline-flex align-center my-5"
        :class="[$vuetify.display.smAndDown ? 'text-h6' : 'text-h4', 'font-weight-bold text-primary']"
      >
        <v-img
          src="/assets/logo.png"
          :width="$vuetify.display.smAndDown ? '40px' : '60px'"
          class="mr-3"
        />
        Te Manawa o Cambridge
      </div>
    </template>

    <!-- Desktop menu -->
    <template v-if="$vuetify.display.mdAndUp" #append>
      <div>
        <v-btn
          v-for="item in menu"
          :key="item"
          class="text-body-1 blue-grey-darken-4"
          @click="scrollToSection(item.toLowerCase())"
          variant="text"
        >
          {{ item }}
        </v-btn>
      </div>
    </template>

    <!-- Mobile menu button -->
    <template v-else #append>
      <v-btn
        icon
        @click="drawer = !drawer"
        class="text-body-1 blue-grey-darken-4"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    right
  >
    <v-list>
      <v-list-item
        v-for="item in menu"
        :key="item"
        @click="scrollToSection(item.toLowerCase())"
        @click.native="drawer = false"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useGoTo } from 'vuetify';

const drawer = ref(false);
const menu = [
  'Home',
  'About',
  // 'Testimonials',
  // 'Mahi',
  'Trustees',
  'Services',
  'Contact'
  // 'Donate',
];

const goTo = useGoTo();

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    goTo(element, { offset: -64 }); // Adjust offset if needed
  }
}
</script>

<style>
/* Add styles as needed */
</style>
