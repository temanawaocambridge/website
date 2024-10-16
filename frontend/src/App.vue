<template>
  <v-app>
    <AppBar ref="appBar" />

    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <!-- Uncomment additional sections as needed -->
        <!-- <WhatWeDoSection /> -->
        <!-- <DiscoverHelp /> -->
        <!-- <CustomizeSection /> -->
        <!-- <FunFactsSection /> -->
        <!-- <WhatPeopleSaySection /> -->
        <!-- <OurPortfolioSection /> -->
        <!-- <MeetOurTeamSection /> -->
        <!-- <AwardWinningSection /> -->
        <!-- <AmazingFeaturesSection /> -->
        <!-- <DonationSection id="donate" /> -->
        <!-- <FAQSection /> -->
        <!-- <ContactUsSection /> -->
      </v-container>
    </v-main>

    <AppFooter ref="appFooter" />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      contentHeight: '0px'
    };
  },
  async created() {
    await this.populateGetHelpForm()
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateHeight);
  },
  methods: {
    ...mapActions('getHelpForm', ['populateGetHelpForm']),
    calculateHeight () {
      const appBarHeight = this.$refs.appBar.$el.offsetHeight;
      const appFooterHeight = this.$refs.appFooter.$el.offsetHeight;
      this.contentHeight = `calc(100vh - ${appBarHeight + appFooterHeight}px)`;
    }
  }
}
</script>

<style>
.main-content {
  scroll-margin-top: -63px;
}

section[id] {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
