<template>
  <v-container fluid :style="contentStyle">
    <Breadcrumbs v-if="!isHomePage && title && route" :title="title" :route="route"/>

    <v-img
      v-if="header"
      :src="header"
      :width="$vuetify.display.mdAndUp ? maxWidth : '100%'"
      height="240px"
      cover
      class="d-flex align-end"
    />
    
    <h2 v-if="title" class="page-header justify-center text-center pt-3">
      {{ title }}
    </h2>

    <h5 v-if="subtitle" class="font-weight-medium px-3 justify-center text-center">
        {{ subtitle }}
    </h5>
    <div :class="contentClass">
      <slot />
    </div>
  </v-container>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  props: {
    title: String,
    subtitle: String,
    route: String,
    headerKeywords: String,
    maxWidth: String
  },
  data () {
    return {
      header: null
    }
  },
  async mounted () {
    await this.getHeader()
  },
  computed: {
    contentClass() {
      return {
        'pa-4': true,
        'pa-0': this.isMobile,
        'mx-auto': true,
        'justify-center': true,
        'text-center': true
      }
    },
    contentStyle () {
      return {
        maxWidth: this.maxWidth || '1000px'
      }
    },
    isMobile () {
      return this.$vuetify.display.smAndDown
    },
    isHomePage() {
      const route = useRoute()
      return route.path === '/'
    }
  },
  methods: {
    async getHeader () {
      if (!this.headerKeywords) return
      this.header = await this.$store.dispatch('pexels/fetchMediumPhoto', this.headerKeywords)
    }
  }
};
</script>

<style scoped>
.page-header {
  margin-bottom: 16px;
}
</style>
