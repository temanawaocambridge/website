<template>
  <v-container>
    <FormLayout

      title="Request Help from Te Manawa o Cambridge"
      subtitle="We understand that life can get tough sometimes. If you or your family need assistance, please fill out this form. We're here to support you."
      route="/help"
      :formFields="helpForm"
      :submitAction="submitHelpRequest"
      keywords="family support"
    />
    <PageLayout>
      <v-row class="justify-left">
        <v-col>
          <h3>Alternative Contact Information</h3>
          <p>
            If you'd prefer to reach out directly, here are other ways to get in touch with us:
          </p>
          <ul>
            <strong>Email:</strong> info@temanawaocambridge.org.nz
          </ul>
          <p>
            We're here to help and look forward to hearing from you!
          </p>
        </v-col>
      </v-row>
    </PageLayout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageLayout from '../app/PageLayout.vue';

export default {
  computed: {
    ...mapGetters('forms', ['helpForm'])
  },
  methods: {
    ...mapActions('forms', ['submitHelpRequest'])
  }
}
</script>
