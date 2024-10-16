<template>
  <v-container class="text-center px-0">
    <v-row class="px-md-3 justify-center">
      <template v-for="(option, i) in items" :key="i">
        <v-col
          cols="12"
          sm="4"
          md="4"
          lg="4"
          class="d-flex justify-center"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :class="{ 'on-hover': isHovering && !option.disabled, 'no-pointer': option.disabled }"
              :elevation="isHovering && !option.disabled ? 5 : 0"
              color="#D3D3D3"
              :ripple="!option.disabled"
              v-bind="props"
              :width="$vuetify.display.mdAndUp ? '340px' : '100%'"
              height="350px"
              variant="outlined"
              @click="navigateTo(option.link)"
            >
              <v-img
                :src="option.img"
                :width="$vuetify.display.mdAndUp ? '340px' : '100%'"
                height="240px"
                cover
                class="d-flex align-end"
              >
                <v-card-title :class="{ 'text-h5': $vuetify.display.mdAndUp, 'text-h7': $vuetify.display.smAndDown, 'text-white': true }">
                  {{ option.title }}
                </v-card-title>
              </v-img>

              <v-card-text>
                <div>
                  <p class="ma-0 text-body-1 text-black font-weight-medium">
                    {{ option.description }}
                  </p>
                  <!-- <p class="text-caption font-weight-medium">
                    {{ option.subtext }}
                  </p> -->
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Get Help',
        description: 'Reach out for support and guidance.',
        keywords: 'family support',
        link: '/get-help',
      },
      {
        title: 'Volunteer',
        description: 'Join us in making a difference in our community.',
        keywords: 'volunteer, help, support, giving back',
        disabled: true
      },
      {
        title: 'Contact Us',
        description: 'Have questions? We’re here to listen.',
        keywords: 'family contact center',
        disabled: true
      },
      {
        title: 'Our Services',
        description: 'Discover the support available for you.',
        keywords: 'community services, how we help',
        disabled: true
      },
      {
        title: 'Our Partners',
        description: 'Meet the organizations we work with.',
        keywords: 'collaboration, business, support, community engagement, work together',
        disabled: true
      },
      // {
      //   title: 'Become a Partner',
      //   description: 'Partner with us to strengthen our community',
      //   keywords: 'work together',
      // },
    ],
  }),
  async mounted() {
    await this.populateImages()
  },
  methods: {
    async populateImages() {
      // Fetch images from Vuex store
      await Promise.all(
        this.items.map(async (card) => {
          const imageSrc = await this.$store.dispatch('pexels/fetchMediumPhoto', card.keywords)
          card.img = imageSrc
          return card
        })
      )
    },
    navigateTo(link) {
      if (!link) return
      this.$router.push(link)
    },
  },
}
</script>

<style scoped>
.overlay {
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  text-align: center;
}

.subtle-text {
  color: #333; /* Adjust color for your text overlay */
}

.no-pointer {
  cursor: not-allowed;
}
</style>
