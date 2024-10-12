<template>
  <v-footer :app="!isMobile" class="footer ma-0 pa-0">
    <v-container fluid>
      <v-divider v-if="!isMobile"/>
      <v-row class="align-center justify-center">
        <v-col cols="12" sm="6" class="text-center text-md-left">
          <div class="text-body-2">
            &copy; {{ (new Date()).getFullYear() }} Te Manawa o Cambridge Trust. All Rights Reserved.
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-center text-md-right">
          <div class="text-body-2">
            <v-btn
              icon
              flat
              class="mx-1"
              href="https://www.facebook.com/temanawaocambridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              flat
              class="mx-1"
              href="mailto:admin@temanawaocambridge.org.nz"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  computed: {
    isMobile () {
      return this.$vuetify.display.smAndDown
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, transparent 12%, white 22%);
  min-height: 40px; /* Adjust to your preferred height */
  padding: 10px 0; /* Reduce padding to make it more compact */
}

</style>