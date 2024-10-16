<template>
  <v-sheet
    class="text-center"
    min-height="700"
    color="background"
  >
    <div class="text-h4 font-weight-medium pt-15">
      Frequently Asked Questions
    </div>

    <div class="text-body-1 text-medium-emphasis mt-5">
      Here are some common questions we receive. If you have more questions, feel free to contact us.
    </div>

    <v-container>
      <v-row class="pa-10 text-left">
        <v-col
          v-for="(faq, index) in faqs"
          :key="index"
          class="pa-10"
          cols="12"
          md="6"
        >
          <div class="text-h6 font-weight-bold text-blue-grey-darken-2">
            {{ faq.question }}
          </div>

          <div class="text-body-1 text-medium-emphasis mt-5">
            {{ faq.answer }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const faqs = [
    {
      question: 'How can I get involved with Te Manawa o Cambridge Trust?',
      answer: 'You can get involved by volunteering, making a donation, or helping us spread the word about our mission. Visit our support page for more details on how you can contribute.',
    },
    {
      question: 'What services does the trust provide?',
      answer: 'We offer various support services for families in need, including financial assistance, emotional support, and connection to professional resources. For more information, please visit our services page.',
    },
    {
      question: 'How can I make a donation?',
      answer: 'Donations can be made through our website via the donation page. We accept one-time and recurring donations, and every contribution helps us continue our work in the community.',
    },
    {
      question: 'Can I volunteer with the trust?',
      answer: 'Absolutely! We welcome volunteers who are passionate about helping others. Please reach out to us through our contact form or visit our volunteer page to learn more about available opportunities.',
    },
  ];
</script>
