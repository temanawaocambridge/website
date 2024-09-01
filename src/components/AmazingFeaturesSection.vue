<template>
  <v-sheet id="services" class="text-center py-16">
    <div class="text-h4 font-weight-medium">
      Key Services We Offer
    </div>

    <div class="text-body-1 text-medium-emphasis my-5">
      Learn more about the essential services and support we provide to our community.
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="item in services"
          :key="item.title"
          class="d-flex ga-5 pa-5 text-left"
          cols="12"
          md="4"
        >
          <div class="mt-2">
            <v-icon :icon="item.icon" size="40" />
          </div>

          <div>
            <div class="text-h6 font-weight-bold">
              {{ item.title }}
            </div>

            <div class="text-body-1 text-medium-emphasis mt-2">
              {{ item.description }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const services = [
    {
      icon: 'mdi-account-group', // Using Material Design Icons for consistency
      title: 'Community Support',
      description:
        'Providing essential resources and assistance to families in need within our community.',
    },
    {
      icon: 'mdi-school',
      title: 'Youth Programs',
      description:
        'Offering workshops and activities to empower and support young people in their personal development.',
    },
    {
      icon: 'mdi-handshake',
      title: 'Partnerships',
      description:
        'Building strong connections with local organizations and professionals to enhance our services.',
    },
    {
      icon: 'mdi-heart',
      title: 'Emotional Support',
      description:
        'Offering counseling and emotional support to help families navigate challenging times.',
    },
    {
      icon: 'mdi-calendar-multiple',
      title: 'Events & Fundraisers',
      description:
        'Organizing community events and fundraisers to support our mission and engage with the community.',
    },
    {
      icon: 'mdi-help-circle',
      title: 'Information & Resources',
      description:
        'Providing access to valuable information and resources to help families improve their quality of life.',
    },
  ]
</script>

<style>
#services {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}
</style>