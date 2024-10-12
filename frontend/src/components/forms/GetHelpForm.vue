<template>
  <v-sheet class="mx-auto" width="500">
    <v-form v-model="valid" fast-fail @submit.prevent>
      <!-- Section 1: Contact Information -->
      <h3>Contact Information</h3>
      <v-text-field
        v-model="formData.firstName"
        required
        :rules="rules"
        label="First name"
      ></v-text-field>

      <v-text-field
        v-model="formData.lastName"
        label="Last name"
      ></v-text-field>

      <v-text-field
        v-model="formData.email"
        required
        :rules="rules"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="formData.phone"
        label="Phone"
        type="tel"
      ></v-text-field>

      <!-- Section 2: Assistance Needs -->
      <h3>Assistance Needs</h3>
      <v-checkbox-group v-model="formData.assistanceNeeded" required>
        <v-checkbox label="Financial Support" value="financial"></v-checkbox>
        <v-checkbox label="Food Assistance" value="food"></v-checkbox>
        <v-checkbox label="Mental Health Support" value="mentalHealth"></v-checkbox>
        <v-checkbox label="Housing Assistance" value="housing"></v-checkbox>
        <v-checkbox label="Other" value="other"></v-checkbox>
      </v-checkbox-group>
      <v-textarea
        v-model="formData.issueDescription"
        label="Description of issue"
        required
      ></v-textarea>

      <!-- Section 3: Additional Information -->
      <h3>Additional Information</h3>
      <v-checkbox v-model="formData.preferredContactMethod" label="Email" value="email"></v-checkbox>
      <v-checkbox v-model="formData.preferredContactMethod" label="Phone" value="phone"></v-checkbox>
      <v-checkbox v-model="formData.preferredContactMethod" label="Text" value="text"></v-checkbox>

      <v-radio-group v-model="formData.bestTimeToContact" required>
        <v-radio label="Morning" value="morning"></v-radio>
        <v-radio label="Afternoon" value="afternoon"></v-radio>
        <v-radio label="Evening" value="evening"></v-radio>
        <v-radio label="Other" value="other"></v-radio>
      </v-radio-group>

      <v-radio-group v-model="formData.urgency" required>
        <v-radio label="Immediate" value="immediate"></v-radio>
        <v-radio label="Within a week" value="withinAWeek"></v-radio>
        <v-radio label="Not urgent" value="notUrgent"></v-radio>
        <v-radio label="Other" value="other"></v-radio>
      </v-radio-group>

      <!-- Section 4: Privacy and Consent -->
      <h3>Privacy and Consent</h3>
      <v-radio-group v-model="formData.consent" required>
        <v-radio label="Yes" value="yes"></v-radio>
        <v-radio label="No" value="no"></v-radio>
        <v-radio label="Maybe" value="maybe"></v-radio>
        <v-radio label="Other" value="other"></v-radio>
      </v-radio-group>

      <v-btn :disabled="!valid" class="mt-4" type="submit" variant="outlined" block @click="submit">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    valid: false,
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      assistanceNeeded: [],
      issueDescription: '',
      preferredContactMethod: [],
      bestTimeToContact: '',
      urgency: '',
      consent: '',
    },
    rules: [v => !!v || 'Required']
  }),
  methods: {
    ...mapActions('getHelpForm', ['submitGetHelpRequest']),
    async submit() {
      if (!this.valid) return;
      return this.submitGetHelpRequest(this.formData);
    }
  }
}
</script>
