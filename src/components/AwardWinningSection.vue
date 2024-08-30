<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center py-16 text-center"
    color="primary"
  >
    <div class="text-white text-h4 font-weight-medium">
      Join Us in Making a Difference
    </div>

    <div class="text-white mt-7">
      At Te Manawa o Cambridge Trust, we are dedicated to supporting our community and empowering families. Your involvement can help us create a positive impact in the lives of those we serve.
    </div>

    <div class="d-flex ga-12 justify-center mt-15">
      <v-btn
        class="text-primary text-body-2"
        flat
        height="55"
        rounded
        text="Learn More"
        width="128"
        to="/about"
      />

      <v-btn
        class="text-body-2"
        color="accent"
        flat
        height="55"
        rounded
        width="128"
        to="/contact"
      >
        Contact Us
      </v-btn>
    </div>
  </v-sheet>
</template>
