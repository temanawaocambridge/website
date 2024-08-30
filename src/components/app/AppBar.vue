<template>
  <v-app-bar elevation=0>
    <template #title>
      <div class="d-inline-flex align-center text-h4 font-weight-bold my-5 text-primary">
        <v-img src="/assets/logo.png" start width="60px" />

        Te Manawa o Cambridge
      </div>
    </template>

    <template v-if="$vuetify.display.mdAndUp" #append>
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item"
          class="text-body-1 blue-grey-darken-4"
          :href="`#${item.toLowerCase()}`"
          variant="text"
        >
          {{ item }}
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
  const menu = [
    'Home',
    'About',
    'Testimonials',
    'Mahi',
    'Trustees',
    'Services',
    'Donate',
  ]
</script>
