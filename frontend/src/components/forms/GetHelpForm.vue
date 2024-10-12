<template>
  <v-sheet class="mx-auto" width="300">
    <v-form v-model="valid" fast-fail @submit.prevent>
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

      <v-btn :disabled="!valid" class="mt-2" type="submit" variant="outlined" block @click="submit">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  data: () => ({
    valid: false,
    formData: {},
    rules: [v => !!v || 'Required']
  }),
  methods: {
    // ...mapActions('getHelpForm', ['submitGetHelpRequest']),
    async submit () {
      if (!this.valid) return
      // return this.submitGetHelpRequest(this.formData)
    }
  }
}
</script>