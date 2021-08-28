<template>
  <v-col cols="12" sm="6" md="4">
    <v-hover v-slot="{ hover }">
      <v-card
        class="category-card"
        height="100%"
        min-height="250px"
        :to="{
          name: 'Content',
          params: {
            category: category,
            id: id,
          },
        }"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
      >
        <v-img
          :src="PlaceholderImage"
          class="category-image white--text"
          width="100%"
          height="100%"
        >
          <v-card-title class="category-title">
            {{ content.name || content.title }}
          </v-card-title>
        </v-img>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
import PlaceholderImage from "@/assets/placeholder.jpg";

export default {
  props: {
    content: Object,
    category: String,
  },
  data() {
    return {
      PlaceholderImage,
    };
  },
  computed: {
    id() {
      return /\/(\d+)\//.exec(this.content.url)[1];
    },
  },
};
</script>
