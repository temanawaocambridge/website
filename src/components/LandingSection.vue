<template>
  <v-sheet
    id="home"
    class="d-flex justify-center align-center text-center flex-column"
    color="white"
    min-height="400px"
  >
    <v-img
      class="cover-image"
      src="https://picsum.photos/id/61/3264/1048"
      cover
    />
  </v-sheet>
</template>

<style>
#home {
  scroll-margin-top: 63px; /* Adjust this value according to your app-bar height */
}

/* Ensure the cover image fills the area */
.cover-image {
  width: 100%;
  height: 100%; /* Make sure height matches container */
  object-fit: cover; /* Crop and zoom the image to cover the area */
}

/* Media query to adjust for smaller screens */
@media (max-width: 600px) {
  #home {
    min-height: 300px; /* Adjust min-height for smaller screens */
  }
  .cover-image {
    height: 100%; /* Ensure height scales appropriately */
  }
}
</style>
