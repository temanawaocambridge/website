<template>
  <v-sheet
    id="about"
    class="py-16 text-center"
    color="secondary"
  >
    <div class="text-h4 font-weight-bold">
      Our Impact Areas
    </div>

    <div class="text-body-1 font-weight-regular mt-3 text-medium-emphasis mb-12">
      Explore the key areas where we make a significant difference in the lives of those we support.
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="item in impactAreas"
          :key="item.title"
          class="d-flex flex-column align-center"
          cols="12"
          md="4"
        >
          <v-icon
            class="text-h2"
            :icon="item.icon"
          />

          <div class="text-h6 mt-1">
            {{ item.title }}
          </div>

          <div class="text-body-1 mt-2 text-medium-emphasis w-75">
            {{ item.description }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const impactAreas = [
    {
      icon: 'mdi-hands-pray', // MDI icon for community or support
      title: 'Community Support Initiatives',
      description:
        'We provide direct support to individuals and families through various community-based programs and outreach efforts.',
    },
    {
      icon: 'mdi-lightbulb-on', // MDI icon for ideas or innovation
      title: 'Innovative Solutions',
      description:
        'Implementing creative and effective solutions to address the unique challenges faced by families and individuals in need.',
    },
    {
      icon: 'mdi-account-group', // MDI icon for groups or teamwork
      title: 'Collaborative Partnerships',
      description:
        'Partnering with local organisations, businesses, and volunteers to enhance our services and broaden our impact.',
    },
  ]
</script>

<style>
/* Add any additional styles if needed */
</style>
