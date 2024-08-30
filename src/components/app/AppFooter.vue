<template>
  <v-footer class="pa-8">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" class="text-left">
          <div class="text-body-1">
            &copy; {{ (new Date()).getFullYear() }} Te Manawa o Cambridge Trust. All Rights Reserved.
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <div class="text-body-1">
            <v-btn
              icon
              class="mx-1"
              href="https://www.facebook.com/temanawaocambridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <!-- <v-btn
              icon
              class="mx-1"
              :href="'https://www.twitter.com/TeManawaCambridge'"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn> -->
            <v-btn
              icon
              class="mx-1"
              href="mailto:admin@cambridgeyouthcentre.org.nz"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
