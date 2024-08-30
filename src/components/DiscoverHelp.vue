<template>
  <v-sheet class="py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-img src="/assets/discover_bg.png" /> <!-- Update with relevant background image -->
        </v-col>

        <v-col cols="12" md="7">
          <div class="text-h4">
            How We Make a Difference in Our Community
          </div>

          <div class="text-body-1 text-medium-emphasis my-5">
            At Te Manawa o Cambridge Trust, we are committed to fostering positive change by providing essential support and building meaningful connections within our community.
          </div>

          <div
            v-for="item in keyInitiatives"
            :key="item"
            class="text-medium-emphasis my-2 mb-4"
          >
            <v-icon
              color="accent"
              icon="mdi-check-circle-outline"
              start
            />

            {{ item }}
          </div>

          <v-btn
            color="primary"
            flat
            height="55"
            rounded
            text="Learn More"
            @click="handleLearnMoreClick"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const keyInitiatives = [
    'Offering counseling and support services for families in crisis',
    'Facilitating workshops and training for personal and professional growth',
    'Partnering with local organisations to enhance community resources',
    'Organising fundraising events to sustain our programs and outreach',
  ];

  function handleLearnMoreClick() {
    // Logic to navigate to a detailed page or section about initiatives
    console.log('Learn More button clicked');
  }
</script>

<style>
/* Add any additional styles if needed */
</style>
