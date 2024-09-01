<template>
  <v-sheet
    class="text-center pa-16"
    color="accent"
  >
    <div class="text-h3 font-weight-bold mb-5">
      Impact and Achievements
    </div>

    <v-container>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-col
          v-for="item in impactStats"
          :key="item.title"
          cols="12"
          sm="6"
          md="3"
        >
          <v-icon
            class="text-h2 mb-3"
            :color="item.color"
            size="56"
          >
            {{ item.icon }}
          </v-icon>

          <div class="text-h4 font-weight-bold mt-3">
            {{ item.title }}
          </div>

          <div class="text-body-1 mt-2">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
const impactStats = [
  {
    icon: 'mdi-account-group', // MDI icon name for "Families Supported"
    title: '1+',
    description: 'Families Supported',
    color: 'yellow', // Set icon color
  },
  {
    icon: 'mdi-calendar-month', // MDI icon name for "Community Events Held"
    title: '1',
    description: 'Community Events Held',
    color: 'blue', // Set icon color
  },
  {
    icon: 'mdi-account', // MDI icon name for "Volunteers Engaged"
    title: '10',
    description: 'Volunteers Engaged',
    color: 'orange', // Set icon color
  },
  {
    icon: 'mdi-cash', // MDI icon name for "Funds Raised"
    title: '$1.5k',
    description: 'Funds Raised',
    color: 'green', // Set icon color
  },
]
</script>

<style>
/* Ensure responsiveness and better mobile view */
.text-h3 {
  font-size: 2rem; /* Adjust heading size for smaller screens */
}

.text-h4 {
  font-size: 1.5rem; /* Adjust subheading size for smaller screens */
}

.text-body-1 {
  font-size: 1rem; /* Adjust body text size for smaller screens */
}

.pa-16 {
  padding: 16px; /* Adjust padding for responsive spacing */
}

.mx-0 {
  margin-left: 0;
  margin-right: 0; /* Adjust margin for better alignment */
}
</style>
