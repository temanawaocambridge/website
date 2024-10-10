<template>
    <v-container class="pa-4 text-center">
      <v-row
        align="center"
        justify="center"
      >
        <template v-for="(item, i) in items" :key="i">
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
                height="400px"
              >
                <v-img
                  :src="item.img"
                  height="300px"
                  cover
                  class="d-flex align-end"
                >
                  <v-card-title :class="{ 'text-h4': $vuetify.display.mdAndUp, 'text-h6': $vuetify.display.smAndDown, 'text-white': true }">
                    {{ item.title }}
                  </v-card-title>
                </v-img>

                <v-card-text>
                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold">
                        {{ item.text }}
                      </p>
                      <p class="text-caption font-weight-medium">
                        {{ item.subtext }}
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
                title: 'Request Help',
                text: 'Submit your request for assistance using our simple form.',
                keywords: 'parent, help, happy, New Zealand, support, aid'
            },
            {
                title: 'Become a Volunteer',
                text: 'Sign up to volunteer and help others in your community and make a difference.',
                keywords: 'volunteer, help, support, giving back'
            },
            {
                title: 'Become a Partner',
                text: 'Are you a local business or service provider wanting to get involved?',
                keywords: 'partner, collaboration, business, support, community engagement'
            },
            {
                title: 'Join Us for Events',
                text: 'Check our calendar for upcoming workshops and support groups in your community.',
                keywords: 'events, workshops, community, participation, activities'
            },
            {
                title: 'Frequently Asked Questions',
                text: 'Find answers to common questions about our services and support.',
                keywords: 'FAQs, questions, help, information, support'
            },
            {
                title: 'Community Resources',
                text: 'Explore links to local support services, including food banks and housing assistance.',
                keywords: 'resources, support services, food banks, housing, assistance'
            }
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
    }
  }
}
  </script>
