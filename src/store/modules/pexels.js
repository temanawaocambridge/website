import { createClient } from 'pexels'

const client = createClient(import.meta.env.VITE_PEXELS_API_KEY)

const state = {
}

const getters = {
}

const actions = {
  // eslint-disable-next-line camelcase
  async fetchPhotosByQuery (_, { query, per_page = 5 }) {
    try {
      // eslint-disable-next-line camelcase
      const response = await client.photos.search({ query, per_page })
      if (!response?.photos?.length) return []

      return response.photos
    } catch (error) {
      console.error(error)
    }
  },
  async fetchRandomPhoto ({ dispatch }, opts) {
    const photos = await dispatch('fetchPhotosByQuery', opts)
    const photo = await dispatch('pickRandomPhoto', photos)
    // Generate a random index

    return photo
  },
  async pickRandomPhoto (_, photos) {
    const randomIndex = Math.floor(Math.random() * photos.length)
    return photos[randomIndex]
  },
  async fetchCoverPhoto ({ dispatch }) {
    const photo = await dispatch('fetchRandomPhoto', { query: 'family', per_page: 5 })

    return photo.src.landscape
  },
  async fetchMediumPhoto ({ dispatch }, keywords) {
    const photo = await dispatch('fetchRandomPhoto', { query: keywords })
    return photo.src.medium
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
