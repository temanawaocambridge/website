<template>
  <v-sheet
    class="text-center pa-16"
    color="accent"
  >
    <div class="text-h3 font-weight-bold mb-5 mb-12">
      Impact and Achievements
    </div>

    <v-container>
      <v-row align="center" class="mx-15">
        <v-col
          v-for="item in impactStats"
          :key="item.title"
          cols="12"
          md="3"
          sm="6"
        >
          <v-icon
            class="text-h2 mb-3"
            size="56"
          >
            {{ item.icon }}
          </v-icon>

          <div class="text-h4 font-weight-bold mt-5">
            {{ item.title }}
          </div>

          <div class="text-body-1 mt-5">
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
    },
    {
      icon: 'mdi-calendar-month', // MDI icon name for "Community Events Held"
      title: '1',
      description: 'Community Events Held',
    },
    {
      icon: 'mdi-account', // MDI icon name for "Volunteers Engaged"
      title: '10',
      description: 'Volunteers Engaged',
    },
    {
      icon: 'mdi-cash', // MDI icon name for "Funds Raised"
      title: '$1.5k',
      description: 'Funds Raised',
    },
  ]
</script>

