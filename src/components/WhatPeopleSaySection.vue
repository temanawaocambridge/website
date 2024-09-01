<template>
  <v-sheet
    id="testimonials"
    class="py-16"
    color="secondary"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="text-h4 font-weight-medium">
            What Our Community Says
          </div>

          <div class="text-body-1 text-medium-white mt-5">
            Hear directly from those we’ve had the pleasure of assisting. Their stories and feedback inspire and guide our work.
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-alert
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            border="start"
            border-color="accent"
            class="my-5 border-opacity-100"
            color="white"
            elevation="5"
            rounded
          >
            <div class="d-flex flex-row align-center ga-3">
              <v-avatar :image="testimonial.avatar" />

              <div class="font-weight-bold text-h6">
                {{ testimonial.name }} /
                <span class="text-primary">{{ testimonial.role }}</span>
              </div>
            </div>

            <div class="mt-3">
              <v-rating
                :value="testimonial.rating"
                color="yellow-darken-2"
                density="compact"
                readonly
              />
            </div>

            <div class="text-body-1 mt-3">
              "{{ testimonial.feedback }}"
            </div>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Parent',
      avatar: '@/assets/images/sarah_thompson.png', // Update with actual image path
      rating: 5,
      feedback: 'Te Manawa o Cambridge Trust has been a lifeline for my family. Their support and resources have made a huge difference in our lives.',
    },
    {
      name: 'Michael Roberts',
      role: 'Local Volunteer',
      avatar: '@/assets/images/michael_roberts.png', // Update with actual image path
      rating: 5,
      feedback: 'Working with the trust has been incredibly rewarding. They are dedicated and truly make an impact in our community.',
    },
    {
      name: 'Emily Brown',
      role: 'Community Leader',
      avatar: '@/assets/images/emily_brown.png', // Update with actual image path
      rating: 5,
      feedback: 'The trust’s initiatives are fantastic. They offer valuable support and build strong community connections.',
    },
  ]
</script>

<style>
#testimonials {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}
</style>
