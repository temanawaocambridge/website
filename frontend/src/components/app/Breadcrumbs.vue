<template>
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-img
        src="/assets/logo.png"
        width="40px"
        class="mr-3"
      />
    </template>
  </v-breadcrumbs>
</template>

<script>

  export default {
    props: {
      route: String,
      title: String
    },
    computed: {
      items () {
        const items = [{
          title: 'Home',
          disabled: false,
          href: '/',
        }]

        if (!this.route) return items

        return [
          ...items,
          {
            title: this.title,
            disabled: true,
            href: this.route
          }
        ]
      }
    }
  }
</script>
