<template>
  <v-sheet
    class="py-16"
    color="secondary"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="7">
          <v-list
            base-color="transparent"
            bg-color="transparent"
            class="px-2"
            lines="three"
            variant="flat"
          >
            <v-list-item
              v-for="(item, index) in services"
              :key="item.title"
              class="pa-5"
              :class="{ 'bg-grey-lighten-5 elevation-5 rounded': index === 0 }"
            >
              <template #prepend>
                <v-icon
                  class="text-h4"
                >
                  {{ item.icon }}
                </v-icon>
              </template>

              <template #title>
                <span class="text-h6 font-weight-bold">{{ item.title }}</span>
              </template>

              <template #subtitle>
                <span class="text-body-1 text-white-darken-3">{{ item.subtitle }}</span>
              </template>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="5">
          <v-img src="/assets/customize_bg.png" /> <!-- Update with relevant background image -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const services = [
    {
      icon: 'mdi-heart', // MDI icon for support or care
      title: 'Community Support',
      subtitle: 'Providing emotional and practical support to families in need.',
    },
    {
      icon: 'mdi-handshake', // MDI icon for partnership or collaboration
      title: 'Partnerships',
      subtitle: 'Building connections with local organizations and professionals.',
    },
    {
      icon: 'mdi-calendar-check', // MDI icon for events
      title: 'Events & Workshops',
      subtitle: 'Organising community events and workshops for skill-building and support.',
    },
    {
      icon: 'mdi-cash-multiple', // MDI icon for funding
      title: 'Fundraising',
      subtitle: 'Raising funds to support our programs and services.',
    },
  ]
</script>

<style>
/* You can add additional styles if needed */
</style>
