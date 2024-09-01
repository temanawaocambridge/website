<template>
  <v-sheet
    id="donations"
    class="d-flex align-center py-16"
    color="secondary"
  >
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <div class="text-h4 font-weight-bold">
            How You Can Support Us
          </div>

          <div class="text-body-1 text-medium-emphasis mt-5">
            Your contributions help us provide essential services and support to families in need. Choose a way to support our mission and make a difference in our community.
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5"
            elevation="5"
            color="primary"
          >
            <div class="text-h6 font-weight-bold">
              ONE-TIME DONATION
            </div>

            <div class="text-h2 font-weight-bold">
              Any Amount
            </div>

            <div class="text-body-1 text-white">
              Make a single donation to support our cause.
            </div>

            <v-btn
              class="text-body-1 font-weight-bold"
              color="accent"
              flat
              rounded
              text="DONATE NOW"
            />

            <div class="text-center text-body-1">
              Your donation will have an immediate impact. <br>
              Support our ongoing programs and initiatives.
            </div>
          </v-card>

          <v-card
            class="mt-4 pt-10 pb-5 d-flex flex-column align-center justify-center ga-5"
            elevation="5"
          >
            <div class="text-h6 font-weight-bold">
              MONTHLY SUPPORTER
            </div>

            <div class="text-h2 font-weight-bold">
              $20 / Month
            </div>

            <div class="text-body-1 text-medium-emphasis">
              Provide ongoing support to our programs and services.
            </div>

            <v-btn
              class="text-body-1 font-weight-bold"
              color="surface-variant"
              flat
              rounded
              text="BECOME A SUPPORTER"
            />

            <div class="text-center text-body-1 text-medium-emphasis">
              Regular contributions help us plan and execute long-term initiatives. <br>
              Make a lasting impact in our community.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style>
#donations {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}
</style>