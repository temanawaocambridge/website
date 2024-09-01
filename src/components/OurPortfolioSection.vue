<template>
  <v-sheet id="mahi" class="text-center py-16">
    <div class="text-h4 font-weight-bold">
      Our Recent Initiatives
    </div>

    <div class="text-body-1 text-medium-emphasis mt-5">
      Explore some of the recent initiatives and events that have made a difference in our community.
    </div>

    <v-container
      class="d-flex justify-center align-center"
      >
      <v-row
        style="min-height: 600px; max-width: 1000px;"
      >
        <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
          <v-col
            :cols="getCols(image.cols)"
            class="d-flex flex-column pa-2"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
              height="100%"
              cover
              rounded="xl"
            ></v-img>
          </v-col>

          <v-col v-if="image.children" class="d-flex flex-column" :cols="getCols(6)">
            <v-row>
              <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
                <v-img
                  rounded="xl"
                  :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                  height="100%"
                  cover
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'OurPortfolioSection',
  data () {
    return {
      imageLayout: [
        { cols: 4 },
        {
          cols: 8,
          children: [{ cols: 12 }, { cols: 12 }],
        },
        { cols: 6 },
        // { cols: 3 },
        // { cols: 9 },
        // { cols: 4 },
        // { cols: 8 },
      ]
    }
  },
  methods: {
    getCols (cols) {
      return this.$vuetify.display.mdAndUp
        ? cols
        : 12
    }
  }
}
</script>

<style>
#mahi {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}
</style>