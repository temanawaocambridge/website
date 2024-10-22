<template>
  <v-container>
    <FormLayout
      title="Contact Us"
      subtitle="We're here to listen and help. Reach out with any questions, feedback, or support requests—our team is ready to assist you."
      route="/contact"
      :formFields="contactForm"
      :submitAction="submitContactRequest"
      keywords="family contact center"
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
    ...mapGetters('forms', ['contactForm'])
  },
  methods: {
    ...mapActions('forms', ['submitContactRequest'])
  }
}
</script>
