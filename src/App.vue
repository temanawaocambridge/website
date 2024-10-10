<template>
  <v-app>
    <AppBar />

    <v-main class="main-content">
      <v-container fluid class="pa-0">
        <LandingSection />

        <ShortcutSection/>
        
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

    <AppFooter />
  </v-app>
</template>

<style>
.main-content {
  scroll-margin-top: -63px;
}

section[id] {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}

</style>
