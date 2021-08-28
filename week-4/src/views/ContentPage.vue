<template>
  <v-card
    class="category-card mx-auto d-flex"
    height="450px"
    width="900px"
    tile
  >
    <img :src="PlaceholderImage" alt="" height="100%" />
    <v-container class="pa-5">
      <h1 class="pb-2">
        {{ content.name || content.title }}
      </h1>
      <div v-for="(value, name) in filteredInfos" :key="name">
        <span class="red--text font-weight-black pr-1"
          >{{
            name
              .split("_")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")
          }}:</span
        >
        <span>{{ value }}</span>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import api from "@/services/api.js";
import PlaceholderImage from "@/assets/placeholder.jpg";

export default {
  props: {
    category: String,
    id: String,
  },
  data() {
    return {
      content: {},
      PlaceholderImage,
    };
  },
  created() {
    api.getItems(`${this.category}/${this.id}`).then((result) => {
      this.content = result.data;
    });
  },
  computed: {
    filteredInfos() {
      const newInfos = {};
      for (const [key, value] of Object.entries(this.content)) {
        !Array.isArray(value) &&
          typeof value !== "function" &&
          ![
            "name",
            "created",
            "edited",
            "url",
            "episode_id",
            "homeworld",
          ].includes(key) &&
          !value.includes("https://swapi.dev/api") &&
          (newInfos[key] = value);
      }
      return newInfos;
    },
  },
};
</script>
