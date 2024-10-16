<template>
  <v-container fluid :style="contentStyle">
    <v-breadcrumbs v-if="breadcrumbs" :items="breadcrumbs" class="mb-4" />

    <v-img
      v-if="header"
      :src="header"
      :width="$vuetify.display.mdAndUp ? maxWidth : '100%'"
      height="240px"
      cover
      class="d-flex align-end"
    />
    
    <h2 v-if="pageTitle" class="page-header justify-center text-center pt-3">
      {{ pageTitle }}
    </h2>

    <h5 v-if="pageSubTitle" class="font-weight-medium px-3 justify-center text-center">
        {{ pageSubTitle }}
    </h5>
    <div :class="contentClass">
      <slot />
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
    pageTitle: String,
    pageSubTitle: String,
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
