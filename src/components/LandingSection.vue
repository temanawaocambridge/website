<template>
  <v-sheet
    id="home"
    class="d-flex justify-center align-center text-center flex-column"
    color="white"
    min-height="30vh"
  >
    <v-img
      class="cover-image d-flex align-center"
      src="https://cdn.cambridge.co.nz/2022/05/15143536/banner-cambridge-bridge.jpg"
      cover
      height="300px"
    >

      <v-card-title :class="{ 'text-h4': $vuetify.display.mdAndUp, 'text-h6': $vuetify.display.smAndDown, 'text-white': true }">
        Nau Mai, Haere Mai<br>
        Our website is<br>
        under construction<br>
        Coming Soon...
      </v-card-title>
  
    </v-img>
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
