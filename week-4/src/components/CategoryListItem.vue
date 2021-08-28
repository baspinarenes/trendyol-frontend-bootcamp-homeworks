<template>
  <v-col cols="12" sm="6" md="4">
    <v-hover v-slot="{ hover }">
      <v-card
        class="category-card"
        height="100%"
        min-height="250px"
        :to="{
          name: 'Category',
          params: {
            category: categoryName,
          },
        }"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-img
          :src="backgroundImage"
          class="category-image white--text"
          width="100%"
          height="100%"
        >
          <v-card-title class="category-title">{{ categoryName }}</v-card-title>
        </v-img>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
import CharactersBackground from "@/assets/characters-background.jpg";
import PlanetsBackground from "@/assets/planets-background.jpg";
import FilmsBackground from "@/assets/films-background.jpg";
import SpeciesBackground from "@/assets/species-background.jpg";
import VehiclesBackground from "@/assets/vehicles-background.jpg";
import StarshipsBackground from "@/assets/starships-background.png";

export default {
  props: {
    categoryUrl: String,
    categoryName: String,
  },
  data() {
    return {
      backgroundImage: null,
    };
  },
  created() {
    switch (this.categoryName.toLowerCase()) {
      case "people":
        this.backgroundImage = CharactersBackground;
        break;
      case "planets":
        this.backgroundImage = PlanetsBackground;
        break;
      case "films":
        this.backgroundImage = FilmsBackground;
        break;
      case "species":
        this.backgroundImage = SpeciesBackground;
        break;
      case "vehicles":
        this.backgroundImage = VehiclesBackground;
        break;
      case "starships":
        this.backgroundImage = StarshipsBackground;
        break;
      default:
        this.backgroundImage = null;
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "StarJedi";
  src: url("../fonts/StarJedi.ttf");
}

.category-title {
  font-family: "StarJedi", arial;
  font-size: 45px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: white;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
