<template>
  <PageLayout
    title="Request Help from Te Manawa o Cambridge"
    subtitle="We understand that life can get tough sometimes. If you or your family need assistance, please fill out this form. We're here to support you."
    headerKeywords="family support"
    maxWidth="600px"
    route="/get-help"
  >
      <!-- Conditionally render the form or the success message -->
      <div v-if="!submitted">
        <v-form v-model="valid" fast-fail @submit.prevent="submit">
          <!-- Dynamically render fields based on the fetched data -->
          <div v-for="field in getHelpFields" :key="field.key" class="mb-4">
            <!-- text field -->
            <div v-if="field.type === 'text'">
              <h3 v-if="field.key === 'FirstName'" class="pb-3">Contact Information</h3>
              <v-text-field
                :label="field.displayName"
                v-model="formData[field.key]"
                :required="field.required"
                :rules="field.required ? [v => !!v || `${field.displayName} is required`] : []"
                hide-details
              />
            </div>

            <div v-else-if="field.type === 'checkbox'">
              <h3>{{ field.displayName }}</h3>
              <v-checkbox
                v-for="option in field.choices"
                :key="option"
                v-model="formData[field.key]"
                :label="option"
                :value="option"
                hide-details
                density="compact"
                :required="field.required"
                :rules="field.required ? [v => !!v || `${field.displayName} is required`] : []"
              />
            </div>

            <div v-else-if="field.type === 'textarea'">
              <v-textarea
                v-model="formData[field.key]"
                :label="field.description"
                lines="3"
                :required="field.required"
                :rules="field.required ? [v => !!v || `${field.displayName} is required`] : []"
                hide-details
              />
            </div>
          </div>

          <v-btn :disabled="!valid" :loading="loading" class="mt-4" type="submit" variant="outlined" block>
            Send Request
          </v-btn>
        </v-form>
      </div>

      <!-- Success message and options -->
      <div v-else>
        <h2 class="mb-10">{{ successMessage }}</h2>
        <v-btn @click="goToHome" class="ma-4" variant="outlined">Go to Home Page</v-btn>
        <v-btn @click="resetForm" class="ma-4" variant="outlined">Make Another Submission</v-btn>
      </div>

      <!-- Snackbar for success message -->
      <v-snackbar v-model="snackbar" timeout="3000" color="success">
        {{ successMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    <!-- </v-sheet> -->
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      formReady: false,
      valid: false,
      loading: false,
      submitted: false, // New property to track submission status
      formData: {}, // Holds form data dynamically generated from fields
      snackbar: false, // Controls snackbar visibility
      successMessage: '' // Holds the success message
    };
  },
  computed: {
    ...mapGetters('getHelpForm', ['getHelpFields'])
  },
  methods: {
    ...mapActions('getHelpForm', ['submitGetHelpRequest']),

    isCheckboxOrRadio (field) {
      return field.type === 'checkbox' && field.choices;
    },

    initializeFormData () {
      this.getHelpFields.forEach(field => {
        if (field.type === 'boolean') {
          this.formData[field.key] = false;
        } else if (field.type === 'checkbox') {
          this.formData[field.key] = [];
        } else {
          this.formData[field.key] = '';
        }
      });
      this.formReady = true;
    },

    async submit () {
      if (!this.valid) return;
      this.loading = true;
      try {
        await this.submitGetHelpRequest(this.formData)

        this.successMessage = 'Your request has been submitted successfully!';
        this.snackbar = true;
        this.submitted = true; // Set submitted to true to hide the form
        this.loading = false;
      } catch (error) {
        console.error('Error submitting form:', error);
        this.loading = false;
      }
    },

    goToHome() {
      // Implement the logic to navigate to the home page
      this.$router.push('/'); // Adjust the route according to your application's structure
    },

    resetForm() {
      this.formData = {};
      this.valid = false;
      this.submitted = false; // Reset the submitted status to show the form again
      this.initializeFormData(); // Reinitialize the form data
    }
  }
}
</script>
