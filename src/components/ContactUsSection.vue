<template>
  <v-sheet
    class="text-center py-16"
    color="primary"
    id="contact"
  >
    <div class="text-white text-h4 font-weight-medium">
      Get in Touch with Us
    </div>

    <div class="text-center text-body-1 mb-15">
      We’re here to help! Whether you need assistance or want to support our cause, reach out to us using the form below.
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            bg-color="transparent"
            flat
            hide-details
            label="Full Name*"
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            bg-color="transparent"
            flat
            hide-details
            label="Email Address*"
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            bg-color="transparent"
            flat
            hide-details
            label="Phone Number"
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            :items="options"
            bg-color="transparent"
            flat
            hide-details
            label="How can we assist you?"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12">
          <v-textarea
            bg-color="transparent"
            flat
            hide-details
            label="Your Message..."
            lines="4"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
        class="text-body-2"
        color="accent"
        flat
        height="55"
        rounded
        width="158"
        @click="alert('not implemented')"
      >
        Send Message
      </v-btn>
  </v-sheet>
</template>

<script setup>
  const options = [
    'Request for Assistance',
    'Volunteer Inquiry',
    'Donation Inquiry',
    'General Question',
  ];
</script>

<style>
#contact {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}
</style>