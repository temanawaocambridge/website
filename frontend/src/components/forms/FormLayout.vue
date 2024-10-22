<template>
  <PageLayout
    :title="title"
    :subtitle="subtitle"
    :headerKeywords="keywords"
    maxWidth="600px"
    :route="route"
  >
    <!-- Conditionally render the form or the success message -->
    <div v-if="!submitted">
      <v-form v-model="valid" fast-fail @submit.prevent="submit">
        <!-- Dynamically render fields based on the fetched data -->
        <div v-for="field in formFields" :key="field.key" class="mb-4">
          <!-- text field -->
          <div v-if="field.type === 'text'">
            <h3 v-if="field.key === 'FirstName'" class="pb-3">Contact Information</h3>
            <h3 v-if="field.key === 'Subject'" class="pb-3">Your Message</h3>
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
  </PageLayout>
</template>

<script>

export default {
  name: 'FormLayout',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    route: {
      type: String,
      default: '/'
    },
    formFields: {
      type: Array,
      required: true
    },
    submitAction: {
      type: Function,
      required: true
    },
    keywords: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      loading: false,
      submitted: false,
      formData: {},
      snackbar: false,
      successMessage: ''
    };
  },
  created() {
    this.initializeFormData();
  },
  methods: {
    initializeFormData() {
      this.formFields.forEach(field => {
        if (field.type === 'boolean') {
          this.formData[field.key] = false;
        } else if (field.type === 'checkbox') {
          this.formData[field.key] = [];
        } else {
          this.formData[field.key] = '';
        }
      });
    },

    async submit() {
      if (!this.valid) return;
      this.loading = true;
      try {
        await this.submitAction(this.formData);

        this.successMessage = 'Your request has been submitted successfully!';
        this.snackbar = true;
        this.submitted = true; // Set submitted to true to hide the form
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.loading = false;
      }
    },

    goToHome() {
      this.$router.push(this.route); // Navigate to the specified route
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
