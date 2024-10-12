<template>
    <v-container class="pa-4 text-center">
      <v-row class="ma-5" justify="center">
        <template v-for="(option, i) in items" :key="i">
          <v-col
            cols="12"
            md="4"
            lg="3"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 5 : 0"
                v-bind="props"
                height="400px"
                variant="outlined"
                @click="navigateTo(option.link)"
              >
                <v-img
                  :src="option.img"
                  height="300px"
                  cover
                  class="d-flex align-end"
                >
                  <v-card-title :class="{ 'text-h4': $vuetify.display.mdAndUp, 'text-h6': $vuetify.display.smAndDown, 'text-white': true }">
                    {{ option.title }}
                  </v-card-title>
                </v-img>

                <v-card-text>
                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold">
                        {{ option.description }}
                      </p>
                      <p class="text-caption font-weight-medium">
                        {{ option.subtext }}
                      </p>
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

import { createClient } from 'pexels'

const client = createClient(import.meta.env.VITE_PEXELS_API_KEY)

    export default {
      data: () => ({
        icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
        items: [
          {
            title: 'Get Help',
            description: 'Reach out for support and guidance.',
            keywords: 'parent, help, happy, New Zealand, support, aid',
            link: '/get-help'
          },
          {
            title: 'Volunteer',
            description: 'Join us in making a difference in our community.',
            keywords: 'volunteer, help, support, giving back'
          },
          {
            title: 'Contact Us',
            description: 'Have questions? We’re here to listen.',
            keywords: 'contact us'
          },
          {
            title: 'Our Services',
            description: 'Discover the support available for you.',
            keywords: 'services'
          },
          {
            title: 'Our Partners',
            description: 'Meet the organizations we work with.',
            keywords: 'partner, collaboration, business, support, community engagement'
          },
          {
            title: 'Become a Partner',
            description: 'Partner with us to strengthen our community',
            keywords: 'become a community partner'
          },
          // {
          //     title: 'Join Us for Events',
          //     text: 'Check our calendar for upcoming workshops and support groups in your community.',
          //     keywords: 'events, workshops, community, participation, activities'
          // },
          // {
          //     title: 'Frequently Asked Questions',
          //     text: 'Find answers to common questions about our services and support.',
          //     keywords: 'FAQs, questions, help, information, support'
          // }
        ]
      }),
      async mounted () {
    await this.populateImages()
  },
  methods: {
    async getImage (query) {
        const { photos } = await client.photos.search({ query, per_page: 1 })
        if (photos.length) return photos[0].src.medium
        return null
    },
    async populateImages () {
        await Promise.all(
            this.items.map(async card => {
                const imageSrc = await this.getImage(card.keywords)
                card.img = imageSrc
                return card
            })
        )
    },
    navigateTo (link) {
      if (!link) return
      this.$router.push(link)
    }
  }
}
  </script>

  <!-- <template>
    <v-container fluid>
      <v-row class="ma-5" justify="center">
        <v-col
          v-for="option in options"
          :key="option.title"
          cols="12"
          md="4"
          lg="3"
        >
          <v-card>
            <v-img :src="option.image" height="200px"></v-img>
            <v-card-title>{{ option.title }}</v-card-title>
            <v-card-subtitle>{{ option.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="primary" @click="navigateTo(option.link)">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        options: [

        ],
      };
    },
    methods: {
      navigateTo(link) {
        this.$router.push(link); // Adjust navigation based on your routing setup
      },
    },
  };
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
  </style> -->
  