<template>
  <v-sheet
    id="trustees"
    class="text-center py-16"
    color="secondary"
    min-height="800"
  >
    <div class="text-h4 font-weight-bold">
      Meet Our Trustees
    </div>

    <div class="text-body-1 text-medium-emphasis mt-5">
      Discover more about our amazing group of trustees.
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="person in team"
          :key="person.name"
          class="pa-5"
          cols="12"
          md="4"
        >
          <v-card
            class="bg-white rounded-t-xl pb-5"
            flat
          >
            <v-img
              class="w-100 rounded-t-xl"
              :src="person.image"
            />

            <div class="mt-3 text-body-1">
              {{ person.name }}
            </div>

            <div class="mt-3 text-grey-lighten-1 font-italic text-body-1">
              {{ person.title }}
            </div>

            <div class="mt-5 text-medium-emphasis mx-5">
              {{ person.description }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
  const team = [
    {
      image: './assets/team/person3.png',
      name: 'RAYLENE REUBEN',
      title: 'Chairperson',
      description:
        'Raylene is ....',
    },
    {
      image: './assets/team/person3.png',
      name: 'CHERESE ERIEPA',
      title: 'Secretary',
      description:
        'Cherese is .....',
    },
    {
      image: './assets/team/person3.png',
      name: 'KIM KOBERSTEIN',
      title: 'Trustee',
      description:
        'Kim is ...',
    },
    {
      image: './assets/team/person3.png',
      name: 'ANDREA RUFF',
      title: 'Trustee',
      description:
        'Andrea is ...',
    },
    {
      image: './assets/team/person3.png',
      name: 'TYNAYA MANE',
      title: 'Trustee',
      description:
        'Tynaya is ...',
    },
    {
      image: './assets/team/person3.png',
      name: 'AROHA HEREWINI',
      title: 'Trustee',
      description:
        'Aroha is ....',
    },
  ]
</script>
